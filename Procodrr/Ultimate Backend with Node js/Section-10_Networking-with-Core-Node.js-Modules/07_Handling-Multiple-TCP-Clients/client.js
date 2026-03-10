import net from "node:net";

const PORT = 4000;

const socket = net.createConnection({ host: "0.0.0.0", port: PORT });

socket.on("error", () => {
  console.log("Server Lost");
  socket.end()
});

process.stdin.on("data", (input) => {
  socket.write(input)
});


socket.on("data", (chunk) => {
  console.log(chunk.toString());
});
