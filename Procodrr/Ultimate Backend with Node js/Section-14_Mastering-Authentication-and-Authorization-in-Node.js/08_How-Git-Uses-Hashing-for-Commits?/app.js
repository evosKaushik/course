import crypto from "node:crypto";
import { readFile } from "node:fs/promises";

const fileBuf = await readFile("./hi.txt");

const newBuffer = `blob ${fileBuf.length}\0${fileBuf}`

const hash = crypto.createHash("sha1").update(newBuffer).digest("hex");

console.log(hash)