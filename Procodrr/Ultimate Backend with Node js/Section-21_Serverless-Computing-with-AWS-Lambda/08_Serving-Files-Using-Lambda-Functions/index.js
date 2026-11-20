import fs from "node:fs";
import mime from "mime-types";

export async function handler(event) {
  if (!event.rawPath.startsWith("/assets")) {
    return {
      statusCode: 404,
      body: "File not found",
    };
  }
  const reqPath = `${import.meta.dirname}/${decodeURIComponent(event.rawPath)}`;

  if (!fs.existsSync(reqPath)) {
    return {
      statusCode: 404,
      body: "File not found",
    };
  }

  const fileContent = fs.readFileSync(reqPath);
  const contentType = mime.lookup(reqPath) || "application/octet-stream";

  return {
    statusCode: 200,
    headers: {
      "Content-Type": contentType,
    },
    body: fileContent.toString("utf-8"),
  };
}
