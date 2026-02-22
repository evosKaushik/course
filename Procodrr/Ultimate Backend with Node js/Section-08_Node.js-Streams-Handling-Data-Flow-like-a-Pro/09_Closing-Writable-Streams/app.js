import fs from "node:fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

writeStream.write("a");
writeStream.write("a");
writeStream.write("a");
writeStream.write("a");

console.log(writeStream.writableLength);
writeStream.end("b");
console.log(writeStream.writableLength);

writeStream.on("close", () => {
  console.log("Closed");
});

writeStream.on("finish", () => {
  console.log("Finished");
});
