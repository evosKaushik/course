import express from "express";
import https from "https";
import fs from "fs";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Secure World 🔒");
});

const PORT = 4000;

const sslOptions = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`🚀 HTTPS server running at https://localhost:${PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`🚀 HTTP server running at http://localhost:${PORT}`);
// });
