import fs from "fs";

const fd = fs.openSync("text.txt", "w");

// const buff = Buffer.from("123")

// fs.write(fd, "😊", (err, bytesWritten, writtenData) => {
//   console.log(bytesWritten);
//   console.log(writtenData);
// });

console.time();
for (let i = 0; i <= 100000; i++) {
  fs.write(fd, `${i}, `, (err, bytesWritten, writtenData) => {});
  if (i === 100000) {
    console.timeEnd();
  }
}
