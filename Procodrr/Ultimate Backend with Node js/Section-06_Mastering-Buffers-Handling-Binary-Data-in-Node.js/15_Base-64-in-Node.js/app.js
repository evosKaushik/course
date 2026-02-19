import fs from "node:fs/promises";

//btoa()
// const a = await fs.readFile("file.txt", "base64")
// const bufferContent = await fs.readFile("favicon/favicon-16x16.png")

// const a = bufferContent.toString('base64')

// console.log(a)

//atob()
// fs.writeFile("new-file.txt",a);
// fs.writeFile("new-file.txt", "YWJj", "base64");

const imageBase64String = await fs.readFile("new-file.txt", "utf-8");

fs.writeFile("smile.png", imageBase64String, "base64");
