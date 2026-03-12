import { createReadStream } from "node:fs";
import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const readStream = createReadStream("./public/index.html");
    readStream.pipe(res);
  } else {
    const readStream = createReadStream(`./public${req.url}`);
    readStream.on("error", (err) => {
      res.end("Not Found! ");
    });
    readStream.pipe(res);
  }
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started");
});
