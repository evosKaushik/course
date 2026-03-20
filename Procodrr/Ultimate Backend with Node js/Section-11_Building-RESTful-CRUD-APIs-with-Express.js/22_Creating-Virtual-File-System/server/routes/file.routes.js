import express from "express";
import { createWriteStream } from "fs";
import { rename, rm, writeFile } from "fs/promises";
import path from "path";
import filesData from "../filesDB.json" with { type: "json" };

const router = express.Router();

// Create
router.post("/:filename", (req, res) => {
  const { filename } = req.params;
  const extension = path.extname(filename); //extract extension
  const randomId = crypto.randomUUID(); // random Id
  const fileName = `${randomId}${extension}`; // Merge both
  const writeStream = createWriteStream(`./storage/${fileName}`);
  req.pipe(writeStream);

  req.on("end", async () => {
    filesData.push({
      id: randomId,
      extension,
      name: path.parse(filename),
    });

    await writeFile("./filesDB.json", JSON.stringify(filesData));

    res.json({ message: "File Uploaded" });
  });
});

// Path Traversal Vulnerability
router.get("/:fileId", (req, res) => {
  const { fileId } = req.params;

  const fileData = filesData.find((file) => file.id === fileId);

  if (req.query.action === "download") {
    res.set("Content-Disposition", "attachment");
  }
  res.sendFile(`${process.cwd()}/storage/${fileId}${fileData.extension}`);
});

// Update
router.patch("/*", async (req, res) => {
  const { 0: filePath } = req.params;
  await rename(`./storage/${filePath}`, `./storage/${req.body.newFilename}`);
  res.json({ message: "Renamed" });
});

// Delete
router.delete("/*", async (req, res) => {
  const filePath = path.join("/", req.params[0]);
  try {
    await rm(`./storage/${filePath}`, { recursive: true });
    res.json({ message: "File Deleted Successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
