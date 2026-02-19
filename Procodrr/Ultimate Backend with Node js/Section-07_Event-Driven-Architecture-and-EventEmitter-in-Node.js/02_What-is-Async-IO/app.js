import fsPromises from "node:fs/promises";
import fs from "fs";

setTimeout(() => {
    console.log('hii')
}, 0);

//Async IO
// const fileContent = await fsPromises.readFile("file.txt", "utf-8");
fs.readFile("file.txt", 'utf-8', (_, data)=>{
    console.log(data)
});

//Sync IO
// const fileContent = fs.readFileSync("file.txt", 'utf-8');

// console.log(fileContent);
