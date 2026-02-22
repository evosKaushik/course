import fs from "fs";

const HIGH_WATER_MARK = 4;
const readStream = fs.createReadStream("chars.txt", {
  highWaterMark: HIGH_WATER_MARK,
  encoding: "utf-8",
});



readStream.on("data", (chunk) => {
  console.log(chunk)
});

// readStream.on("close", () => {
//   console.log("Close");
// });

// readStream.on("end", () => {
//   console.log("End");
// });

// readStream.on("error", (err) => {
//   console.log("Error", err);
// });

readStream.on("open", (data) => {
  console.log("opened", data);
});
readStream.on("ready", (data) => {
  console.log("opened", data);
});
