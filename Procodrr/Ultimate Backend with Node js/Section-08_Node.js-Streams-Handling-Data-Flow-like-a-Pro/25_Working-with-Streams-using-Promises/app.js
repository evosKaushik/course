import fs from "node:fs/promises";

const readFileHandle = await fs.open(
  "C:\\Users\\kaushikpatel\\Desktop\\23_Implementing Internal Buffer in our Custom Stream.mkv"
);

const writeFileHandle = await fs.open("video.mkv", "w");

const readStream = readFileHandle.createReadStream();
const writeStream = writeFileHandle.createWriteStream();

readStream.pipe(writeStream);
