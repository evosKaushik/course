import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net";

const PORT = 4000;

const clientsList = [];

const server = net.createServer((socket) => {
  clientsList.push(socket);
  console.log(clientsList.length);

  const filteredClients = clientsList.filter(
    (clientSocket) => socket.remotePort === clientSocket.remotePort,
  );
  console.log(filteredClients);
  console.log(filteredClients.length);
  socket.on("data", (chunk) => {
    filteredClients.forEach((socket) => {
      socket.write(chunk);
    });
    console.log("Chunk received");
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
