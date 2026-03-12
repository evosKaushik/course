import http from "node:http";

const clientRequest = http.request({
  method: "POST",
  hostname: "localhost",
  port: 4000,
});

clientRequest.write("Hello from http client");

clientRequest.on("response", (res) => {
  console.log("Got the response");
  res.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  console.log(res.statusCode);
});
