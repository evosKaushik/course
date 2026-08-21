import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({ });

const command = new PutObjectCommand({
  Bucket: "kaushik-labs-storage-app",
  Key: "hello-world.png",
  ContentType: "image/png",
}); 

const url = await getSignedUrl(s3Client, command, {
  expiresIn: 3600,
  signableHeaders: new Set(["content-type"]),
});


