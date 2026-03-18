import express from "express";
import { createWriteStream } from "node:fs";
import { readdir, rename, rm } from "node:fs/promises";

const app = express();
const PORT = 4000;

//Enabling CORS
app.use(express.json());

app.put("/rename", async (req, res) => {
  const { oldName, newName } = req.body;
  const [, extension] = oldName.split(".");
  await rename(`./storage/${oldName}`, `./storage/${newName}.${extension}`);
});

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
  });
  next();
});

app.post("/:filename", (req, res) => {
  const writeStream = createWriteStream(`./storage/${req.params.filename}`);
  req.pipe(writeStream);
  req.on("end", () => {
    res.json({
      success: true,
      message: "File Uploaded",
    });
  });
});

// Preview File in Trash
app.get("/trash", async (req, res) => {
  const filesList = await readdir("./trash", { withFileTypes: true });
  let filenameList = [];
  filesList.forEach((item) => {
    filenameList.push({ name: item.name, isDirectory: item.isDirectory() });
  });
  res.json(filenameList);
});

// Serve File and download
app.get("/:filename", async (req, res) => {
  const { filename } = req.params;
  if (req.query.action === "download") {
    res.set("Content-Disposition", "attachment");
  }
  res.sendFile(`${import.meta.dirname}/storage/${filename}`);
});

// Move file to Trash
app.delete("/:filename", async (req, res) => {
  const { filename } = req.params;
  try {
    await rename(`./storage/${filename}`, `./trash/${filename}`);
    res.json({ success: true });
    res.status(201);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ success: false });
  }
});

app.get("/", async (req, res) => {
  const filesList = await readdir("./storage", { withFileTypes: true });
  let filenameList = [];
  filesList.forEach((item) => {
    filenameList.push({ name: item.name, isDirectory: item.isDirectory() });
  });
  res.json(filenameList);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
