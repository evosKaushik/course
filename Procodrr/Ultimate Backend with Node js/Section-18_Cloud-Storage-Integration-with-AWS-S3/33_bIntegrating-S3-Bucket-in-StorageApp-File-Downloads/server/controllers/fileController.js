import path from "path";
import Directory from "../models/directoryModel.js";
import File from "../models/fileModel.js";
import User from "../models/userModel.js";
import {
  deleteFileFromS3,
  generatePresignedDownloadUrl,
  generatePresignedUploadUrl,
  generatePresignedViewUrl,
  isFileUploadedToS3,
} from "../utils/s3.js";

export async function updateDirectorySizes(parentId, deltaSize) {
  while (parentId) {
    const dir = await Directory.findById(parentId);
    if (!dir) break;
    dir.size += deltaSize;
    await dir.save();
    parentId = dir.parentDirId;
  }
}

export const initializeFileUpload = async (req, res, next) => {
  try {
    const parentDirId = req.params.parentDirId || req.user.rootDirId;

    const filename = req.headers.filename;
    const filesize = Number(req.headers.filesize);

    if (!filename || !filesize) {
      return res.status(400).json({ error: "Filename and filesize are required" });
    }

    const [parentDir, user, rootDir] = await Promise.all([
      Directory.findOne({ _id: parentDirId, userId: req.user._id }),
      User.findById(req.user._id),
      Directory.findById(req.user.rootDirId),
    ]);

    if (!parentDir) {
      return res.status(404).json({ error: "Parent directory not found" });
    }

    const remainingSpace = user.maxStorageInBytes - rootDir.size;
    if (filesize > remainingSpace) {
      return res.status(400).json({ error: "File exceeds available storage space" });
    }

    const extension = path.extname(filename);

    const file = await File.insertOne({
      extension,
      name: filename,
      size: filesize,
      parentDirId: parentDir._id,
      userId: req.user._id,
    });

    const s3Key = `${file.id}${extension}`;
    const uploadURL = await generatePresignedUploadUrl(s3Key);

    return res.status(200).json({ uploadURL, fileId: file.id });
  } catch (err) {
    next(err);
  }
};

export const finalizeFileUpload = async (req, res, next) => {
  try {
    const { id } = req.params;

    const file = await File.findOne({
      _id: id,
      userId: req.user._id,
    });

    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    const s3Key = `${file._id}${file.extension}`;
    const exists = await isFileUploadedToS3(s3Key);

    if (!exists) {
      await file.deleteOne();
      return res.status(404).json({ error: "Upload failed — file not found in S3" });
    }

    return res.status(200).json({ success: true, message: "Upload verified" });
  } catch (err) {
    next(err);
  }
};

export const getFile = async (req, res, next) => {
  try {
    const { id } = req.params;

    const file = await File.findOne({
      _id: id,
      userId: req.user._id,
    }).lean();

    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    const s3Key = `${id}${file.extension}`;

    if (req.query.action === "download") {
      const downloadURL = await generatePresignedDownloadUrl(s3Key, file.name);
      return res.redirect(downloadURL);
    }

    const viewURL = await generatePresignedViewUrl(s3Key);
    return res.redirect(viewURL);
  } catch (err) {
    next(err);
  }
};

export const renameFile = async (req, res, next) => {
  try {
    const { id } = req.params;

    const file = await File.findOne({
      _id: id,
      userId: req.user._id,
    });

    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    file.name = req.body.newFilename;
    await file.save();

    return res.status(200).json({ message: "File renamed" });
  } catch (err) {
    next(err);
  }
};

export const deleteFile = async (req, res, next) => {
  try {
    const { id } = req.params;

    const file = await File.findOne({
      _id: id,
      userId: req.user._id,
    });

    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    const s3Key = `${id}${file.extension}`;

    await Promise.all([
      file.deleteOne(),
      deleteFileFromS3(s3Key),
      updateDirectorySizes(file.parentDirId, -file.size),
    ]);

    return res.status(200).json({ message: "File deleted" });
  } catch (err) {
    next(err);
  }
};
