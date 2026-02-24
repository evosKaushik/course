import { createReadStream } from "node:fs";

const PATH = "C:\\Users\\kaushikpatel\\Desktop\\03_Readable Streams.mkv"

const readStream = createReadStream(PATH)

readStream.pipe(process.stdout)
