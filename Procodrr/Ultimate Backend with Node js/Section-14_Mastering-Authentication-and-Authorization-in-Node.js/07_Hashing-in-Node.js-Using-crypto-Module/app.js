import crypto from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

const parentDir = import.meta.dirname
const filePath = "/avatar.png"
const fileData = readFileSync(path.join(parentDir, filePath));

const hash = crypto
  .createHash("sha256")
  .update(Buffer.from(fileData))
  .digest("hex");
console.log(hash);
