import { watch } from "node:fs";
import {
  appendFile,
  copyFile,
  mkdir,
  rename,
  rm,
  stat,
  unlink,
} from "node:fs/promises";

// await fsPromises.rename("oldFile.txt", "newFile.txt");
// await fsPromises.rename("newFile.txt", "oldFile.txt");

// await unlink('./src/textRenamed.txt');
// await appendFile("newFile.txt", "\ndata to append");
// await rm("./newFile", {recursive: true});
// const stats = await stat("app.js");

// console.log(stats);

watch("text.txt", (eventType, fileName) => {
  console.log(eventType);
  console.log(fileName);
})
console.log("successfully");
