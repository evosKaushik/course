const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end('{"message": "Hello, Server 2 PORT=2000"}');
});

server.listen(2000, () => {
  console.log("HTTP server is running on http://localhost:2000");
});
