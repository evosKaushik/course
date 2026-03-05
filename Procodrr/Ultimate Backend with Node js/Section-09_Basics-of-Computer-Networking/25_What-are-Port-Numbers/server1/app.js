const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end('{"message": "Hello, Server 1 PORT=1000"}');
});

server.listen(1000, () => {
  console.log("HTTP server is running on http://localhost:1000");
});
