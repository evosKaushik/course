import fs from "fs";

const buffer = Buffer.alloc(64 * 1024);
const fd = fs.openSync("numbers.txt", "w");

console.time();

for (let i = 0; i <= 100000; i++) {
  fs.writeSync(fd, `${i}, `);
}

fs.closeSync(fd);

console.timeEnd();

console.log(buffer.buffer.byteLength)