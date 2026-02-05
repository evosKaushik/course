import fs from "node:fs/promises";

const contentBuffer = await fs.readFile("text.txt");
let binaryStr = "";
contentBuffer.forEach((el) => {
  binaryStr += el.toString(2) + " ";
});

console.dir(contentBuffer);
console.log(contentBuffer);
