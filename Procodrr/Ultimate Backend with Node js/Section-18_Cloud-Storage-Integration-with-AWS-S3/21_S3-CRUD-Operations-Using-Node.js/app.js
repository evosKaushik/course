import {
    DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { createWriteStream } from "node:fs";
import { readFile } from "node:fs/promises";
const s3Client = new S3Client();
import { pipeline } from "node:stream/promises";

const fileBuffer = await readFile("./numbers.txt");
const command = new DeleteObjectCommand({
  Bucket: "kaushik-nodejs-bucket",
  Key: "upload/num.txt",
});

const writableStream = createWriteStream("./avatar.png");

const res = await s3Client.send(command);

// pipeline(res.Body, WritableStream);
console.log(res);
