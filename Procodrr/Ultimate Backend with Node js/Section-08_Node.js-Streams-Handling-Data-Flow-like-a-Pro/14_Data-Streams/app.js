import fs from "node:fs";

import { spawn } from "child_process";

// ? Readable Stream
// console.log(process.stdin)

// const writeStream = fs.createWriteStream("output.txt")

// process.stdin.pipe(writeStream)

// ? Writable Stream
// console.log(process.stdout)

// process.stdout.write("hii");

// console.log(process.stderr)

// process.stderr.write('hii')

// console.log(process.stdin.fd)
// console.log(process.stdout.fd)
// console.log(process.stderr.fd)

// # Process
const childProcess = spawn("node", ["childApp.js"]);

const writeStream = fs.createWriteStream("Streams.mkv")

childProcess.stdout.pipe(writeStream)

