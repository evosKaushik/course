import fs from "node:fs/promises";


//btoa()
// const a = await fs.readFile("file.txt", "base64")
const bufferContent = await fs.readFile("file.txt")

const a = bufferContent.toString('base64')

console.log(a)

//atob()
fs.writeFile("new-file.txt",a);
// fs.writeFile("new-file.txt", "YWJj", "base64");
