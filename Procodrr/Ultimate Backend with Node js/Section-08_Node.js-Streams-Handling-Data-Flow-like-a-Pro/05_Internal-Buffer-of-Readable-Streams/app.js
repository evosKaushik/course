import fs from "fs";

const HIGH_WATER_MARK = 4;
const readStream = fs.createReadStream("chars.txt", {
  highWaterMark: HIGH_WATER_MARK,
});

// readStream.on("data", (chunk) => {
//     console.log(chunk)
// });

readStream.on("readable", (chunk) => {
    console.log(readStream.readableLength)
    console.log(readStream.read(3))
    console.log(readStream.readableLength)
});



