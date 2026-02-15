import http from "http";

const uint8Array = new Uint8Array(7);


uint8Array[0] = 0x6b;
uint8Array[1] = 0x61;
uint8Array[2] = 0x75;
uint8Array[3] = 0x73;
uint8Array[4] = 0x68;
uint8Array[5] = 0x69;
uint8Array[6] = 0x6b;

startServer(uint8Array); 

function startServer(responseData) {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/txt; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url === "/favicon.ico") {
      res.end();
      return;
    }
    res.end(Buffer.from(responseData.buffer));
  });

  server.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
  });
} 