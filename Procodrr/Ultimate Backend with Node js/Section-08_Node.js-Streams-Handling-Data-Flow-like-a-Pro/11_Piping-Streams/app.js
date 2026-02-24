import fs from "node:fs";

const PATH = "C:\\Users\\kaushikpatel\\Desktop\\03_Readable Streams.mkv";
const HIGH_WATER_MARK = 1 * 1024 * 1024;

console.time();

const readableStream = fs.createReadStream(PATH, {
  highWaterMark: HIGH_WATER_MARK,
});

const writableStream = fs.createWriteStream("streams.mp4", {
  highWaterMark: HIGH_WATER_MARK,
});


readableStream.pipe(writableStream);

readableStream.unpipe(writableStream);

// readableStream.on("data", (data) => {
//   const isEmpty = writableStream.write(data);
//   if (!isEmpty) {
//     readableStream.pause();
//   }
// });

// writableStream.on("drain", () => {
//   readableStream.resume();
// });

readableStream.on("end", () => {
  console.timeEnd();
});
