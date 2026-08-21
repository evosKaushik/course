import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { contentType } from "mime-types";
import s3Client from "../config/aws.js";

export const BUCKET = process.env.S3_BUCKET_NAME;

export const generatePresignedUploadUrl = async (filename) => {
  if (!filename) {
    throw new Error("Filename is required to generate upload URL");
  }
  const ContentType = contentType(filename);

  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: filename,
    ContentType,
  });

  return getSignedUrl(s3Client, command, {
    expiresIn: 3600,
    signableHeaders: new Set(["content-type"]),
  });
};

export const generatePresignedDownloadUrl = async (fileName, originalName) => {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: fileName,
    ResponseContentDisposition: `attachment; filename="${originalName}"`,
  });

  return getSignedUrl(s3Client, command, { expiresIn: 3600 });
};

export const generatePresignedViewUrl = async (fileName) => {
  const command = new GetObjectCommand({ Bucket: BUCKET, Key: fileName });
  return getSignedUrl(s3Client, command, { expiresIn: 3600 });
};

export const deleteFileFromS3 = async (key) => {
  const command = new DeleteObjectCommand({ Bucket: BUCKET, Key: key });
  return s3Client.send(command);
};

export const deleteMultipleFilesFromS3 = async (keys) => {
  if (keys.length === 0) return;
  const commands = keys.map(
    (key) => new DeleteObjectCommand({ Bucket: BUCKET, Key: key }),
  );
  return Promise.all(commands.map((cmd) => s3Client.send(cmd)));
};

export const isFileUploadedToS3 = async (key) => {
  try {
    await s3Client.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }));
    return true;
  } catch (err) {
    if (err.name === "NotFound") return false;
    throw err;
  }
};
