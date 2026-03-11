import http from "node:http";

const server = http.createServer((request, response) => {
  console.log("Got the request");
  console.log(request.url)
  console.log(request.method)

  // request.on("data", (chunk)=>{
  //     console.log(chunk.toString())
  // })
  response.setHeader("Content-Length", "29");
  response.write("Hello from http module server");
  // response.end()
});

// server.on('request', (request, response)=>{
//     console.log("Got the request")
//     // request.on("data", (chunk)=>{
//     //     console.log(chunk.toString())
//     // })
//     response.setHeader("Content-Length", "29")
//     response.write("Hello from http module server")
//     // response.end()
// })

// server.on("connection", (socket) => {
//   console.log(socket);
//   socket.end("HTTP/1.1 \n\nHii from http server")
// });

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});
