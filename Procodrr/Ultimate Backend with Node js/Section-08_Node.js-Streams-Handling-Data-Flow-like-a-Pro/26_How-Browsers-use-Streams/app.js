import http from "http";
import fs from "node:fs/promises";

const readFileHandle = await fs.open(
  "C:\\Users\\kaushikpatel\\Desktop\\Next.js_E-Commerce_App_Admin_Panel_UI_Design_Tutorial_Shopping_App_Design_720P.mp4",
);
const readStream = readFileHandle.createReadStream({
  highWaterMark: 1 * 1024,
});

const { size } = await readFileHandle.stat();

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Content-Disposition", "attachment; filename=streams.mp4");
  res.setHeader("Content-Length", size)

  readStream.on("data", (chunk) => {
    res.write(chunk);
  });

  readStream.on("end", () => {
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});
