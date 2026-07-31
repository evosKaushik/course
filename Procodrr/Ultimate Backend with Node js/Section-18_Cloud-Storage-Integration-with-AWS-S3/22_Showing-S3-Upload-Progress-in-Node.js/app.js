import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { createReadStream } from "fs";

const s3Client = new S3Client();

const fileReadStream = createReadStream(
  "/home/kaushik/Downloads/Telegram Desktop/sst.pdf",
);

const upload = new Upload({
  client: s3Client,
  params: {
    Bucket: "kaushik-nodejs-bucket",
    Key: "books/sst.pdf",
    Body: fileReadStream,
    ContentType: "application/pdf",
  },
});

upload.on("httpUploadProgress", ({ loaded, total }) => {
  if (total) {
    process.stdout.write(
      `\r${((loaded / total) * 100).toFixed(2)}% | ${Math.round(loaded / (1024 * 1024))} Uploaded`,
    );
  } else {
    process.stdout.write(`\rUploaded ${loaded} bytes`);
  }
});

const res = await upload.done();

console.log(res);
