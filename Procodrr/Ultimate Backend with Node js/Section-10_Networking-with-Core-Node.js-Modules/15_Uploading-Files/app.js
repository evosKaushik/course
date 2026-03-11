import { createWriteStream } from "node:fs";
import net from "node:net";

const server = net.createServer(async (socket) => {
  socket.write("HTTP/1.1 200 OK\n");
  socket.write("Access-Control-Allow-Origin: *\n\n");

  const writeStream = createWriteStream("uploaded-file.txt");

  socket.on("data", (chunk) => {
    writeStream.write(chunk);
    if (/WebKitFormBoundary.+--/.test(chunk.toString())) {
      socket.end('Got the Data')
    }
  }); 

  socket.on("close", () => {
    console.log(socket.remoteAddress, ": Client disconnected");
  });

  socket.on("error", () => {
    console.log("Client Lost");
  });
  console.log("Client Connected", socket.remoteAddress);
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});
