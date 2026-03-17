import express from "express";
import { readdir, rename, rm } from "node:fs/promises";

const app = express();
const PORT = 4000;

//Enabling CORS
app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  });
  next();
});

app.get("/trash", async (req, res) => {
  const filesList = await readdir("./trash", { withFileTypes: true });
  let filenameList = [];
  filesList.forEach((item) => {
    filenameList.push({ name: item.name, isDirectory: item.isDirectory() });
  });
  res.json(filenameList);
});

app.get("/:item", async (req, res) => {
  const { item } = req.params;
  console.log(item);
  const { isDirectory } = req.query;
  console.log(isDirectory);
  if (isDirectory) {
    const filesList = await readdir(`./storage/${item}`, {
      withFileTypes: true,
    });
    let filenameList = [];
    filesList.forEach((item) => {
      filenameList.push({ name: item.name, isDirectory: item.isDirectory() });
    });
    res.json(filenameList);
  } else {
    if (req.query.action === "download") {
      res.set("Content-Disposition", "attachment");
    }
    res.sendFile(`${import.meta.dirname}/storage/${filename}`);
  }
});


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
