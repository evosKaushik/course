import { createWriteStream } from "fs";
import { open, readdir, readFile, rename, rm } from "fs/promises";
import http from "http";
import mime from "mime-types";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");

  if (req.method === "GET") {
    if (req.url === "/favicon.ico") return res.end("No favicon.");
    if (req.url === "/") {
      serveDirectory(req, res);
    } else {
      try {
        const [url, queryString] = req.url.split("?");
        const queryParam = {};
        queryString?.split("&").forEach((pair) => {
          const [key, value] = pair.split("=");
          queryParam[key] = value;
        });
        console.log(queryParam);

        const fileHandle = await open(`./storage${decodeURIComponent(url)}`);
        const stats = await fileHandle.stat();
        if (stats.isDirectory()) {
          serveDirectory(req, res);
        } else {
          if (queryParam.action === "delete") {
            await rm(`./storage${decodeURIComponent(url)}`);
            res.end("Delete Successfully");
            return;
          }
          const readStream = fileHandle.createReadStream();
          res.setHeader("Content-Type", mime.contentType(url.slice(1)));
          res.setHeader("Content-Length", stats.size);
          if (queryParam.action === "download") {
            res.setHeader(
              "Content-Disposition",
              `attachment; filename="${url.slice(1)}"`,
            );
          }
          readStream.pipe(res);
        }
      } catch (err) {
        console.log(err.message);
        res.end("Not Found!");
      }
    }
  } else if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
  } else if (req.method === "POST" && req.url === "/upload") {
    const writeStream = createWriteStream(`./storage/${req.headers.filename}`);
    req.pipe(writeStream);
    req.on("end", () => {
      res.end("Fle uploaded on the server");
    });
  } else if (req.method === "PUT") {
    req.on("data", async (chunk) => {
      const fileContent = chunk.toString();
      const { prevFilename, renameFilename } = JSON.parse(fileContent);
      await rename(`./storage/${decodeURIComponent(prevFilename)}`, `./storage/${decodeURIComponent(renameFilename)}`);
    });
  }
});

async function serveDirectory(req, res) {
  const [url] = req.url.split("?");
  const itemsList = await readdir(`./storage${url}`);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(itemsList));
}

server.listen(80, "0.0.0.0", () => {
  console.log("Server started");
});
