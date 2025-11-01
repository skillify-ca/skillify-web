import {
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  PutObjectCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const fetchProfilePicture = async (
  userId: string
): Promise<string | null> => {
  return new Promise((res, rej) => null)
};

export const uploadProfilePicture = async (
  userId: string,
  file: File
): Promise<PutObjectCommandOutput> => {
  const s3 = new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "",
    },
  });

  const uploadParams = {
    Bucket: "student-profile-pictures",
    Key: `${userId}/${file.name}`,
    Body: file,
  };

  return s3.send(new PutObjectCommand(uploadParams)).then(async (res) => {
    return res;
  });
};
