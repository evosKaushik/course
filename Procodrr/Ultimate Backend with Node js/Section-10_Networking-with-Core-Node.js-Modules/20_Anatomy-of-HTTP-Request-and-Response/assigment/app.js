import { createReadStream } from "node:fs";
import http from "node:http";



const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const readStream = createReadStream("index.html");
    readStream.pipe(res);
  } else if (req.url === "/style") {
    const readStream = createReadStream("style.css");
    readStream.pipe(res);
  } else {
    res.end("Not Found");
  }
});

server.listen(4000, "0.0.0.0", () => {
  console.log(`Server is running on port 4000`);
});
