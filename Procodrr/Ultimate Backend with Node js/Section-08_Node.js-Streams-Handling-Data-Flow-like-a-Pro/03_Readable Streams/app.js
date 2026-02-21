// import fs from "fs/promises";
import fs from "fs";

console.time();

// Time 8-15s
// Memory 1.3GB
// CPU 15%
// const bufferContent = await fs.readFile(
//   "C:\\Users\\kaushikpatel\\Desktop\\03_Readable Streams.mkv",
// );

// await fs.writeFile("video.mp4", bufferContent);

// const readStream = fs.createReadStream(
//   "C:\\Users\\kaushikpatel\\Desktop\\03_Readable Streams.mkv",
//   { highWaterMark: 100 * 1024 * 1024 },
// );

// let totalPercent = 0;

// readStream.on("data", (chunkBuffer) => {
//   fs.appendFileSync("video.mp4", chunkBuffer);
// });

// console.log(bufferContent.byteLength);
// console.log(bufferContent.toString())

const PATH = "C:\\Users\\kaushikpatel\\Desktop\\03_Readable Streams.mkv";
const readStream = fs.createReadStream(PATH, {
  highWaterMark: 100 * 1024 * 1024,
});
const fileSize = fs.statSync(PATH).size;
let bufferLength = 0;


readStream.on("data", (chunkBuffer) => {
  fs.appendFileSync("video.mp4", chunkBuffer);
  bufferLength += chunkBuffer.byteLength
  console.log(`${((bufferLength/fileSize) * 100).toFixed(2)}%`)
});
