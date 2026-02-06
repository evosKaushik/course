import fs from "fs/promises";

const bufferContent = await fs.readFile("./text.txt");

function bufferToString(buffer) {
  let content = "";
  buffer.forEach((el) => {
    content += String.fromCharCode(el);
  });
  return content;
}

console.log(bufferToString(bufferContent));
