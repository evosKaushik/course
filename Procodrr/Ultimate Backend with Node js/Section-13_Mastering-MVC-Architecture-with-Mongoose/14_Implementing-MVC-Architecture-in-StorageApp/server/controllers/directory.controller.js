import { rm } from "fs/promises";
import { ObjectId } from "mongodb";
import Directory from "../models/directory.model.js";
import File from "../models/file.model.js";

const getDirectoryById = async (req, res) => {
  const user = req.user;
  const id = req.params.id || user.rootDirId;
  const directoryData = await Directory.findById(id).lean();
  if (!directoryData) {
    return res
      .status(404)
      .json({ error: "Directory not found or you do not have access to it!" });
  }
  const files = await File.find({ parentDirId: directoryData._id }).lean();
  const directories = await Directory.find({ parentDirId: id }).lean();
  return res.status(200).json({
    ...directoryData,
    files: files.map((dir) => ({ ...dir, id: dir._id })),
    directories: directories.map((dir) => ({ ...dir, id: dir._id })),
  });
};

const createDirectory = async (req, res, next) => {
  const user = req.user;
  const db = req.db;
  const dirCollection = db.collection("directories");

  const parentDirId = req.params.parentDirId
    ? new ObjectId(req.params.parentDirId)
    : user.rootDirId;
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
        .json({ error: "Invalid fields, please enter valid input" });
    } else {
      next(err);
    }
  }
};

const renameDirectory = async (req, res, next) => {
  const user = req.user;
  const { id } = req.params;
  const { newDirName } = req.body;
  try {
    await Directory.findOneAndUpdate(
      {
        _id: id,
        userId: user._id,
      },
      { name: newDirName },
    );
    res.status(200).json({ message: "Directory Renamed!" });
  } catch (err) {
    next(err);
  }
};

const deleteDirectoryById = async (req, res, next) => {
  const { id } = req.params;
  const db = req.db;
  const filesCollection = db.collection("files");
  const dirCollection = db.collection("directories");
  const dirObjId = new ObjectId(id);

  const directoryData = await Directory.findOne({
    _id: dirObjId,
    userId: req.user._id,
  })
    .select("_id")
    .lean();

  if (!directoryData) {
    return res.status(404).json({ error: "Directory not found!" });
  }

  async function getDirectoryContents(id) {
    let files = await File.find({ parentDirId: id }).select("extension").lean();
    let directories = await Directory.find({ parentDirId: id })
      .select("_id")
      .lean();

    for (const { _id, name } of directories) {
      const { files: childFiles, directories: childDirectories } =
        await getDirectoryContents(_id);

      files = [...files, ...childFiles];
      directories = [...directories, ...childDirectories];
    }
 
    return { files, directories };
  }

  const { files, directories } = await getDirectoryContents(dirObjId);

  for (const { _id, extension } of files) {
    await rm(`./storage/${_id.toString()}${extension}`);
  }

  await filesCollection.deleteMany({
    _id: { $in: files.map(({ _id }) => _id) },
  });

  await dirCollection.deleteMany({
    _id: { $in: [...directories.map(({ _id }) => _id), dirObjId] },
  });

  return res.json({ message: "Files deleted successfully" });
};

export {
  getDirectoryById,
  createDirectory,
  renameDirectory,
  deleteDirectoryById,
};
