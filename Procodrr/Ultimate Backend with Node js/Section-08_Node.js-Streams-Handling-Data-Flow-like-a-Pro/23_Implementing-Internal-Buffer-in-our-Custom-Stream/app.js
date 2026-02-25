import fs from "fs";

console.time();

// Without internal Buffer Time 2s
const buff = Buffer.allocUnsafe(16*1024);
const fd = fs.openSync("numbers.txt", "w");
let totalBytesWritten = 0;
let remainingStr = "";
for (let i = 1; i <= 100000; i++) {
  let str = `${i}, `;
  str = remainingStr + str;
  const bytesWritten = buff.write(str, totalBytesWritten);
  remainingStr = "";
  const writtenBytesDiff = str.length - bytesWritten;
  if (writtenBytesDiff !== 0) {
    remainingStr += str.slice(bytesWritten);
  }
  totalBytesWritten += bytesWritten;
  if (totalBytesWritten === buff.byteLength) {
    fs.writeSync(fd, buff);
    totalBytesWritten = 0;
  }
}

fs.writeSync(fd, buff.subarray(0, totalBytesWritten).toString() + remainingStr);

fs.closeSync(fd);
console.timeEnd();
