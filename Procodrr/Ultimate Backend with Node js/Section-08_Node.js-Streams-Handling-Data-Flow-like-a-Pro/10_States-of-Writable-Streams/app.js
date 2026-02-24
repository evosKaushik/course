import fs from "node:fs";

const writableStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

// writableStream.write('Hi')
// console.log(writableStream.writable) //true
// writableStream.end()
// console.log(writableStream.writable) //false

writableStream.cork();
writableStream.write("Hi");
writableStream.write("Hi");
writableStream.write("Hi");
writableStream.write("Hi");
writableStream.write("Hi");

writableStream.end();

console.log(writableStream.writableEnded);
console.log(writableStream.writableFinished);
console.log(writableStream.writableLength);
// console.log(writableStream.destroy());

setTimeout(() => {
    console.log(writableStream.writableFinished);
    console.log(writableStream.writableLength);
}, 1000);
