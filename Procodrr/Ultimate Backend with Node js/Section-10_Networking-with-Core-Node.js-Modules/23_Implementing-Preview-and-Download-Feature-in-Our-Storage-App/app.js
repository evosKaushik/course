import { open, readdir, readFile } from "node:fs/promises";
import http from "node:http";
import mime from "mime-types";

const server = http.createServer(async (req, res) => {
  if (req.url === "/favicon.ico") return res.end("No favicon.");

  if (req.url === "/") {
    serveDirectory(req, res, req.url);
  } else {
    const [filePath, queryParams] = req.url.split("?");
    const param = getQueryParams(queryParams);

    switch (param.action) {
      case "open":
        const fileHandle = await open(
          `./storage${decodeURIComponent(filePath)}`,
        );
        const stats = await fileHandle.stat();
        if (stats.isDirectory()) {
          serveDirectory(req, res, filePath);
        } else {
          const splitValue = filePath.slice(1).split("/");
          const fileName = splitValue[splitValue.length - 1];
          res.setHeader("Content-Type", mime.contentType(fileName));
          const readStream = fileHandle.createReadStream();
          readStream.pipe(res);
        }
        break;
      case "download":
        try {
          const fileHandle = await open(decodeURIComponent(filePath));
          const { size } = await fileHandle.stat();
          const readStream = fileHandle.createReadStream();

          res.setHeader("Content-Length", size);
          res.setHeader("Content-Disposition", "attachment");

          readStream.pipe(res);
        } catch (error) {
          console.log(error.message);
          res.end("Not Found!");
        }

        break;
      default:
        res.end("Not Found!");
        break;
    }
  }
});

const serveDirectory = async (req, res, filePath) => {
  const htmlBoilerPlate = await readFile("./boilerplate.html", "utf-8");
  const itemsList = await readdir(`./storage${decodeURIComponent(filePath)}`, {
    withFileTypes: true,
  });
  let dynamicHTML = "";
  itemsList.forEach((item) => {
    const fileName = item.name;
    dynamicHTML += `
    <li><span>${fileName}</span>
    <button><a href=".${filePath === "/" ? "" : filePath}/${fileName}?action=open">Open</a></button>
    ${item.isDirectory() ? "" : `<button><a href=".${filePath === "/" ? "" : filePath}/${fileName}?action=download">Download</a></button>`}
    </li>`;
  });
  res.end(htmlBoilerPlate.replace("${dynamicHTML}", dynamicHTML));
};

const getQueryParams = (queryParams) => {
  const queryParam = {};
  queryParams?.split("&").forEach((pair) => {
    const [key, value] = pair.split("=");
    queryParam[key] = value;
  });
  return queryParam;
};

server.listen(80, "0.0.0.0", () => {
  console.log(`Server is running on port 80`);
});
