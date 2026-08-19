import {
  DeleteObjectCommand,
  ExpressionType,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { contentType } from "mime-types";
import s3Client from "../config/aws.js";

const BUCKET = process.env.S3_BUCKET_NAME;

export const generateUploadUrl = async (filename) => {
  if (!filename) {
    return;
  }
  const ContentType = contentType(filename);

  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: filename,
    ContentType,
  });

  const url = await getSignedUrl(s3Client, command, {
    expiresIn: 3600,
    signableHeaders: new Set(["content-type"]),
  });

  return url;
};

export const getViewURL = async (res, filename) => {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: filename,
  });
  const s3Response = await s3Client.send(command);
  res.setHeader(
    "Content-Type",
    s3Response.ContentType || "application/octet-stream",
  );

  if (s3Response.ContentLength) {
    res.setHeader("Content-Length", s3Response.ContentLength);
  }
  s3Response.Body.pipe(res);

  // const url = await getSignedUrl(s3Client, command, {
  //   expiresIn: 3600,
  // });

  // return url;
};

export const deleteFileFromServer = async (fileName) => {

  const command = new DeleteObjectCommand({
    Bucket: BUCKET,
    Key: fileName,
  });


  const result = await s3Client.send(command);


  return result;
};
