import fs from "fs/promises";

const bufferContent = await fs.readFile("./text.txt");


console.log(bufferContent.toString('utf-16le'));
