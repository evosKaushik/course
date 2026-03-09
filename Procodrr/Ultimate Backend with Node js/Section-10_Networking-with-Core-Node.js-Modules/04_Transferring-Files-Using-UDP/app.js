import dgram from "node:dgram"; //UDP
import { createWriteStream } from "node:fs";

const socket = dgram.createSocket("udp4");

const writeStream = createWriteStream("./uploads/video.mp4");
socket.on("message", async (message, remoteAddress) => {
  if (message.toString() === "EOF") {
    socket.send(
      "File Uploaded Successfully",
      remoteAddress.port,
      remoteAddress.address,
    );
  } else {
    writeStream.write(message);
  }
});

socket.bind({ port: 4000 }, () => {
  console.log(socket.address());
  const address = socket.address();
  console.log(`Listening on port ${address.port}`);
});
