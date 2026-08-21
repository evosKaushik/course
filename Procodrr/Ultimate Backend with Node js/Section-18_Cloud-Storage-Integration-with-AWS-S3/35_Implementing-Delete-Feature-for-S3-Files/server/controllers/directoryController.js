import Directory from "../models/directoryModel.js";
import File from "../models/fileModel.js";
import { updateDirectorySizes } from "./fileController.js";
import { deleteMultipleFilesFromS3 } from "../utils/s3.js";

export const getDirectory = async (req, res) => {
  const user = req.user;
  const _id = req.params.id || user.rootDirId.toString();
  const directoryData = await Directory.findOne({
    _id,
    userId: req.user._id,
  }).lean();
  if (!directoryData) {
    return res
      .status(404)
      .json({ error: "Directory not found or you do not have access to it!" });
  }

  const [files, directories] = await Promise.all([
    File.find({ parentDirId: directoryData._id }).lean(),
    Directory.find({ parentDirId: _id }).lean(),
  ]);

  return res.status(200).json({
    ...directoryData,
    files: files.map((f) => ({ ...f, id: f._id })),
    directories: directories.map((d) => ({ ...d, id: d._id })),
  });
};

export const createDirectory = async (req, res, next) => {
  const user = req.user;

  const parentDirId = req.params.parentDirId || user.rootDirId.toString();
  const dirname = req.headers.dirname || "New Folder";
  try {
    const parentDir = await Directory.findOne({
      _id: parentDirId,
    }).lean();

    if (!parentDir)
      return res
        .status(404)
        .json({ message: "Parent Directory Does not exist!" });

    await Directory.insertOne({
      name: dirname,
      parentDirId,
      userId: user._id,
    });

    return res.status(201).json({ message: "Directory Created!" });
  } catch (err) {
    if (err.code === 121) {
      res
        .status(400)
        .json({ error: "Invalid input, please enter valid details" });
    } else {
      next(err);
    }
  }
};

export const renameDirectory = async (req, res, next) => {
  const user = req.user;
  const { id } = req.params;
  const { newDirName } = req.body;
  try {
    await Directory.findOneAndUpdate(
      {
        _id: id,
        userId: user._id,
      },
      { name: newDirName }
    );
    res.status(200).json({ message: "Directory Renamed!" });
  } catch (err) {
    next(err);
  }
};

export const deleteDirectory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const directoryData = await Directory.findOne({
      _id: id,
      userId: req.user._id,
    }).lean();

    if (!directoryData) {
      return res.status(404).json({ error: "Directory not found!" });
    }

    const allDirIds = [id];
    let currentIds = [id];

    while (currentIds.length > 0) {
      const children = await Directory.find({
        parentDirId: { $in: currentIds },
      })
        .select("_id")
        .lean();

      const childIds = children.map((d) => d._id.toString());
      allDirIds.push(...childIds);
      currentIds = childIds;
    }

    const allFiles = await File.find({
      parentDirId: { $in: allDirIds },
    })
      .select("_id extension")
      .lean();

    const s3Keys = allFiles.map((f) => `${f._id}${f.extension}`);

    await Promise.all([
      deleteMultipleFilesFromS3(s3Keys),
      File.deleteMany({ _id: { $in: allFiles.map((f) => f._id) } }),
      Directory.deleteMany({ _id: { $in: allDirIds } }),
      updateDirectorySizes(directoryData.parentDirId, -directoryData.size),
    ]);

    return res.status(200).json({ message: "Directory deleted" });
  } catch (err) {
    next(err);
  }
};
