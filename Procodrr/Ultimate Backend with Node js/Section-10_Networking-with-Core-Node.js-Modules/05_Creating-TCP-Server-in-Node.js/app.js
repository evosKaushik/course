import net from "node:net";

const PORT = 4000;
const server = net.createServer()

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});

server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    socket.end("HTTP\n\nGot your message");
    if (chunk.toString() === "end") socket.end();
  });
  socket.on("close", () => {
    console.log(socket.remoteAddress, " : Client discounted");
  });

  console.log(socket.remoteAddress, " : Client Connected");

  // console.log(socket.address())
  // console.log(socket.remoteAddress)
  // console.log(socket.remotePort)
  // console.log(socket.remoteFamily)
});
