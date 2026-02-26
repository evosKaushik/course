import http from "http";
import fs from "node:fs/promises";

const readFileHandle = await fs.open("abc.txt");
const readStream = readFileHandle.createReadStream({
  highWaterMark: 2,
});

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "text/plain");

  readStream.on("data", (chunk) => {
    res.write(chunk);
  });

  readStream.on("end", () => {
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
}); 
