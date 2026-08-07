import express from "express";
import { createWriteStream } from "node:fs";
import { readdir, rename, rm } from "node:fs/promises";
import cors from "cors";

const app = express();
const PORT = 4000;

//Enabling CORS
app.use(cors());
app.use(express.json());

app.put("/files/rename", async (req, res) => {
  const { oldName, newName } = req.body;
  const [, extension] = oldName.split(".");
  await rename(`./storage/${oldName}`, `./storage/${newName}.${extension}`);
});

app.post("/files/:filename", (req, res) => {
  const writeStream = createWriteStream(`./storage/${req.params.filename}`);
  req.pipe(writeStream);
  req.on("end", () => {
    res.json({
      success: true,
      message: "File Uploaded",
    });
  });
});

// Serve File and download
app.get("/files/*", async (req, res) => {
  const { 0: filepath } = req.params;
  if (req.query.action === "download") {
    res.set("Content-Disposition", "attachment");
  } else {
  }
  res.sendFile(`${import.meta.dirname}/storage/${filepath}`);
});

// Move file to Trash
app.delete("/files/:filename", async (req, res) => {
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

// Preview File in Trash
app.get("/directory/trash", async (req, res) => {
  const filesList = await readdir("./trash", { withFileTypes: true });
  let filenameList = [];
  filesList.forEach((item) => {
    filenameList.push({ name: item.name, isDirectory: item.isDirectory() });
  });
  res.json(filenameList);
});

// Read Directory
// app.get(["/directory", "/:dirPath"], async (req, res) => {
app.get("/directory/?*", async (req, res) => {
  const { 0: dirpath } = req.params;
  try {
    const filesList = await readdir(
      `./storage/${dirpath ? dirpath : "/"}`,
      {
        withFileTypes: true,
      },
    );
    let filenameList = [];
    filesList.forEach((item) => {
      filenameList.push({ name: item.name, isDirectory: item.isDirectory() });
    });
    res.json(filenameList);
  } catch (error) {
    console.log(error.message);
    res.json({ message: "server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
