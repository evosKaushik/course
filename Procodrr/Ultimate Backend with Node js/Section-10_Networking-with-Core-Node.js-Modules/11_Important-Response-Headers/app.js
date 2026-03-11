import { createReadStream, createWriteStream } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";
import path from "node:path";
const PATH = "C:\\Users\\kaushikpatel\\Videos\\video.mp4"
const server = net.createServer(async (socket) => {
  const fileHandle = await open(PATH);
  const readStream = fileHandle.createReadStream();
  const { size } = await fileHandle.stat();
  const basename = path.basename(PATH)
  //   socket.write(
  //     `HTTP/1.1 200 Okay
  // Access-Control-Allow-Origin:*
  // Access-Control-Expose-Headers:*\n\n`,
  //   );
  socket.write("HTTP/1.1 200 Okay\n");
  // socket.write('Access-Control-Allow-Origin: *\n')
  // socket.write('Access-Control-Expose-Headers: *\n')
  // socket.write("Content-Type: text/txt; charset=utf-8\n");
  // socket.write("Content-Type: application/json\n");
  socket.write("Content-Type: video/mp4\n");
  socket.write(`Content-Disposition: attachment; filename=${basename}\n`);
  socket.write(`Content-Length: ${size}`);
  socket.write("\n\n");

  // socket.end()
  // const readStream = createReadStream("video.mp4");
  // const readStream = createReadStream("river.webp");
  // const readStream = createReadStream("num.txt");
  // const readStream = createReadStream("numbers.txt");
  readStream.pipe(socket);

  // socket.write("{name:kaushik patel}");
  // socket.end()
  // socket.write("abcdefghi");

  readStream.on("end", () => {
    console.log("File ended");
  });

  socket.on("data", (chunk) => {
    console.log(chunk.toString());
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
