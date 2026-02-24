import fs from "node:fs";

import {
  Readable,
  Writable,
  Duplex,
  Transform,
  PassThrough,
} from "node:stream";

const PATH = "C:\\Users\\kaushikpatel\\Desktop\\03_Readable Streams.mkv";
const HIGH_WATER_MARK = 1 * 1024 * 1024;

const readStream = fs.createReadStream(PATH, {
  highWaterMark: HIGH_WATER_MARK,
});

const writeStream = fs.createWriteStream("streams.mp4", {
  highWaterMark: HIGH_WATER_MARK,
});

readStream.pipe(writeStream);
