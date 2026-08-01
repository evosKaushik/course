import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client();

const command = new GetObjectCommand({
  Bucket: "kaushik-nodejs-bucket",
  Key: "books/sst.pdf",
});

const url = await getSignedUrl(s3Client, command);

console.log(url);
