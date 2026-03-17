import express from "express";
import { readdir } from "node:fs/promises";

const app = express();
const PORT = 4000;

//Enabling CORS
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

//Handling Preview and Download
app.use((req, res, next) => {
  if (req.query.action === "download") {
    res.set("Content-Disposition", "attachment");
  }
  next();
}, express.static("./storage"));

app.get("/", async (req, res) => {
  const filesList = await readdir("./storage", { withFileTypes: true });
  let filenameList = [];
  filesList.forEach((item) => {
    filenameList.push({ name: item.name, isDirectory: item.isDirectory() });
  });
  res.json(filenameList);
});

app.get("/:item", (req, res) => {
  const {item} = req.params
  console.log(item);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
