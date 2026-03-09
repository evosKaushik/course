import net from "node:net";

const PORT = 4000;

const socket = net.createConnection({ host: "10.219.35.130", port: PORT });

socket.on("error",()=>{
    console.log("Server Lost")
})

setTimeout(() => {
    socket.write("Hii");
    socket.end()
}, 2000);

socket.on("data", (chunk)=>{
    console.log(chunk.toString())
})
