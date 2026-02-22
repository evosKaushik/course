import fs from "node:fs";

console.time();

const readStream = fs.createReadStream(
  "C:\\Users\\kaushikpatel\\Desktop\\03_Readable Streams.mkv",
  { highWaterMark: 100 * 1024 * 1024 },
);

const writeStream = fs.createWriteStream("streams.mp4");

readStream.on("data", (chunkBuffer) => {
  // Time 10s
  // Memory 200MB
  // CPU 9%
  //   fs.appendFileSync("video.mp4", chunkBuffer);
  
  // Time 5s
  // Memory 1.3 GB
  // CPU 12%
  writeStream.write(chunkBuffer);
});

readStream.on("end", () => {
  console.timeEnd();
});

// writeStream.write('abc')
// writeStream.write('123')
// writeStream.write('ABC')
