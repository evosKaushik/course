import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net";

const PORT = 4000;

const socket = net.createConnection({ host: "0.0.0.0", port: PORT });

// const writeStream = createWriteStream("video.mp4");




socket.on("end", () => {
  console.log("File Ended", socket.remoteAddress);
});

socket.on("error", () => {
  console.log("Server Lost");
  socket.end();
});

process.stdin.on("data", (input) => {
  const inputStr = input.toString().trim();
  const [firstArgv, secondArgv] = inputStr.split(" ");
  if (firstArgv === "send") {
    const readStream = createReadStream("C:\\Users\\kaushikpatel\\Videos\\video.mp4");
    readStream.pipe(socket)
  }
});
