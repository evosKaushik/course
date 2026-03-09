import net from "node:net";

const PORT = 4000;
const server = net.createServer((socket) => {
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    socket.write("HTTP\n\nGot your message");
    socket.end();
  });

  socket.on("close", () => {
    console.log(socket.remoteAddress, " : Client discounted");
  });

  socket.on("error", (err) => {
    console.log(socket.remoteAddress, " : Client Lost \n", err);
  });

  console.log(socket.remoteAddress, " : Client Connected");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});
