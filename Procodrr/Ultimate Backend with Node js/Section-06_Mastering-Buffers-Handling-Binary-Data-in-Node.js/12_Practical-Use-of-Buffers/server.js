import http from "http";
import fs from 'fs/promises'

const server = http.createServer((req, res) => {
  req.on("data", async(reqBody) => {
    const JSONData = JSON.parse(reqBody.toString())
    console.log(JSONData.FileBuffer)
    // await fs.writeFile('image.png', reqBody)
    // await fs.writeFile('text.txt', reqBody)
    console.log('End')
  });

  res.setHeader("Content-Type", "text/txt; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end("Hello from server");
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
