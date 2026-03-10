import net from "node:net";

const PORT = 4000;

const clientsList = [];

const server = net.createServer((socket) => {
  clientsList.push(socket);
  // clientsList.push({socket});
  console.log(clientsList);
  console.log(clientsList.length);
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    socket.write("Server: Got your message");

    clientsList.forEach((socket) => {
      socket.write(`Client ${socket.remoteAddress}: ${chunk}`);
    });
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

process.stdin.on("data", (input) => {
  process.stdout.write(`You typed: ${input}`);
  const str = input.toString();
  if (str.split(" ").length > 1) {
    const [clientNo, message] = str.split(" ");
    if (
      typeof parseInt(clientNo) !== "number" ||
      clientNo >= clientsList.length
    )
      return;
    clientsList[clientNo].write(message);
    return;
  }
  clientsList.forEach((socket) => {
    socket.write(`Server: ${input}`);
  });
});
