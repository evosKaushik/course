import express from "express";
import { mkdir, readdir, stat } from "fs/promises";
import path from "path";
import directoriesDB from "../directoriesDB.json" with { type: "json" };
import filesData from "../filesDB.json" with { type: "json" };

const router = express.Router();

// Read
router.get("/:id?", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    const directoriesData = directoriesDB[0];
    const files = directoriesData.files?.map((fileId) =>
      filesData.find((file) => file.id === fileId),
    );
    res.json({ ...directoriesData, files });
  } else {
    const directoriesData = directoriesDB.find((directory) => folder.id === id);
    res.json(directoriesData);
  }
});

router.post("/*", async (req, res) => {
  const { 0: dirname } = req.params;
  const fullDirPath = `./storage${path.join("/", dirname)}`;
  try {
    await mkdir(fullDirPath);
    // await mkdir(`./storage/${dirname}`);
    res.status(201).json({ message: "Directory Created successfully" });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
