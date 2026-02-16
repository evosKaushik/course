import { Buffer, constants } from "buffer";
import fs from "node:fs/promises";

// const nodeBuffer = Buffer.from("Hello World!", "utf-16le");
// const nodeBuffer2 = Buffer.alloc(8);

// nodeBuffer2[0] = 98;
// nodeBuffer2[7] = 104;

// console.log(nodeBuffer2);
// console.log(nodeBuffer2.toString());

// const decoder = new TextDecoder('utf-8')
// console.log(decoder.decode(nodeBuffer2))

// fs.writeFile('file.txt', nodeBuffer)
// console.log(nodeBuffer.toString('utf-8'));

// const nodeBuffer = Buffer.alloc(8);
const nodeBuffer = Buffer.from("Hello World!");
// nodeBuffer.write("abc");
// console.log(nodeBuffer.toString());
// console.log(nodeBuffer.toJSON());
console.log(nodeBuffer.includes("He", 5))

// console.log(nodeBuffer.slice(5,8).toString())