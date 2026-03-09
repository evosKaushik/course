import dgram from "node:dgram"; //UDP
import { createReadStream, } from "node:fs";
import fs from "node:fs"
const socket = dgram.createSocket("udp4");

socket.on("message", (message, remoteAddress) => {
  console.log(message.toString());
  console.log(remoteAddress);
  socket.close();
});

const readStream = createReadStream("C:\\Users\\kaushikpatel\\Videos\\All React 19 Features Explained 2025.mp4", { highWaterMark: 1000 });


readStream.on("data", (chunk) => {
  socket.send(chunk, 4000, () => {
  });
});

readStream.on("end", () => {
  socket.send("EOF", 4000, () => {
    console.log("Message sent");
  });
});
