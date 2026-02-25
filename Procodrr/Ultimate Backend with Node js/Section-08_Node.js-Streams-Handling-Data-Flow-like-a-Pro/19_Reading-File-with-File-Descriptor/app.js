import fs from "fs";

const fd = fs.openSync("text.txt");

const readBuffer = Buffer.alloc(4);

fs.read(
  fd,
  {
    buffer: readBuffer,
    position: 2
  },
  (err, bytesRead, bufferData) => {
    console.log(bytesRead);
    console.log(bufferData.toString());
    console.log(bufferData);
  },
);
