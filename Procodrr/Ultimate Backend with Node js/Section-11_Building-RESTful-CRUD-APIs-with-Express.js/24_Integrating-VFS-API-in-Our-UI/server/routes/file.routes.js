import express from "express";
import { createWriteStream } from "fs";
import { rename, rm, writeFile } from "fs/promises";
import path from "path";
import filesData from "../filesDB.json" with { type: "json" };
import directoriesDB from "../directoriesDB.json" with { type: "json" };

const router = express.Router();

// Create
router.post("/:filename", (req, res) => {
  const { filename } = req.params;
  const parentId = req.headers.parentid || directoriesDB[0].id;
  const extension = path.extname(filename); //extract extension
  const randomId = crypto.randomUUID(); // random Id
  const fileName = `${randomId}${extension}`; // Merge both
  const writeStream = createWriteStream(`./storage/${fileName}`);
  req.pipe(writeStream);

  req.on("end", async () => {
    filesData.push({
      id: randomId,
      extension,
      name: path.parse(filename).name,
      parentId,
    });
    const parentDirData = directoriesDB.find(
      (directoryData) => directoryData.id === parentId,
    );

    parentDirData.files.push(randomId);

    await writeFile("./filesDB.json", JSON.stringify(filesData));
    await writeFile("./directoriesDB.json", JSON.stringify(directoriesDB));

    res.json({ message: "File Uploaded" });
  });
});

// Read
router.get("/:fileId", (req, res) => {
  const { fileId } = req.params;

  const fileData = filesData.find((file) => file.id === fileId);

  if (req.query.action === "download") {
    res.set("Content-Disposition", "attachment");
  }
  res.sendFile(`${process.cwd()}/storage/${fileId}${fileData.extension}`);
});

// Update
router.put("/:fileId", async (req, res) => {
  const { fileId } = req.params;
  const { newName } = req.body;
  const fileData = filesData.find((file) => file.id === fileId);
  fileData.name = newName;
  await writeFile("./filesDB.json", JSON.stringify(fileData));
  res.json({ message: "Renamed" });
});

// Delete
router.delete("/:fileId", async (req, res) => {
  const { fileId } = req.params;
  const fileData = filesData.find((file) => file.id === fileId);

  const parentDirData = directoriesDB.find(
    (directoryData) => directoryData.id === fileData.parentId,
  );

  parentDirData.files = parentDirData.files.filter(
    (fileID) => fileID !== fileId,
  );



  try {
    await rm(`./storage/${fileId}${fileData.extension}`, { recursive: true });
    await writeFile(
      "./filesDB.json",
      JSON.stringify(filesData.filter((fileData) => fileData.id !== fileId)),
    );
    await writeFile("./directoriesDB.json", JSON.stringify(directoriesDB));
    res.json({ message: "File Deleted Successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
