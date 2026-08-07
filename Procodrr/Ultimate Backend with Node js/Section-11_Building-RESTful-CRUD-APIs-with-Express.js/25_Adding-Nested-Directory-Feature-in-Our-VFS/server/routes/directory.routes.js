import express from "express";
import { mkdir, readdir, stat, writeFile } from "fs/promises";
import path from "path";
import directoriesDB from "../directoriesDB.json" with { type: "json" };
import filesData from "../filesDB.json" with { type: "json" };

const router = express.Router();

// Read
router.get("/:id?", async (req, res) => {
  const { id } = req.params;
  const directoriesData = id
    ? directoriesDB.find((directory) => directory.id === id)
    : directoriesDB[0];

  const files = directoriesData.files?.map((fileId) =>
    filesData.find((file) => file.id === fileId),
  );
  const directories = directoriesData.directories?.map((directoryId) =>
    directoriesDB.find((directory) => directory.id === directoryId),
  );
  res.json({ ...directoriesData, files, directories });
});

router.post("/:parentDirId?", async (req, res) => {
  const parentDirId = req.params.parentDirId || directoriesDB[0].id;

  const { dirname } = req.headers;

  const randomId = crypto.randomUUID();

  const parentDir = directoriesDB.find(
    (directory) => directory.id === parentDirId,
  );

  parentDir.directories.push(randomId);

  directoriesDB.push({
    id: randomId,
    name: dirname,
    parentID: parentDirId,
    files: [],
    directories: [],
  });
  try {
    await writeFile("./directoriesDB.json", JSON.stringify(directoriesDB));

    res.status(201).json({ message: "Directory Created successfully" });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
