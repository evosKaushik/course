import fs from "fs";

const HIGH_WATER_MARK = 4;
const readStream = fs.createReadStream("chars.txt", {
  highWaterMark: HIGH_WATER_MARK,
});

readStream.on("data", (chunk) => {
  console.log(chunk.toString());

  if (readStream.bytesRead / HIGH_WATER_MARK === 1) {
    fs.writeFileSync("text.txt", chunk);
  } else {
    fs.appendFileSync("text.txt", chunk);
  }

  readStream.pause();

  setTimeout(() => {
    readStream.resume();
  }, 100);
});

readStream.on('pause', ()=>{
  console.log('Rukaal raha raju')
})
readStream.on('end', ()=>{
  console.log('Hogal raju')
})