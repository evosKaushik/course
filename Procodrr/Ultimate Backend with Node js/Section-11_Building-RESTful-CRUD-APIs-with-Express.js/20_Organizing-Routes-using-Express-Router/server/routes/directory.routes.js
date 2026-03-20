import express from "express";
import { mkdir, readdir, stat } from "fs/promises";
import path from "path";

const router = express.Router();

// Read
router.get("/?*", async (req, res) => {
  const { 0: dirname } = req.params;
  const fullDirPath = `./storage${path.join("/", dirname)}`;
  try {
    const filesList = await readdir(fullDirPath);
    const resData = [];
    for (const item of filesList) {
      const stats = await stat(`${fullDirPath}/${item}`);
      resData.push({ name: item, isDirectory: stats.isDirectory() });
    }
    res.json(resData);
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
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
