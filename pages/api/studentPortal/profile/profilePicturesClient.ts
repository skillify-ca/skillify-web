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
  // fetch profile picture from aws s3 bucket
  const s3 = new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "",
    },
  });

  const params = {
    Bucket: "student-profile-pictures",
    Prefix: `${userId}/`,
  };
  return s3
    .send(new ListObjectsV2Command(params))
    .then(async (res) => {
      if (res.Contents && res.Contents.length > 0) {
        const bucketObjects = res.Contents.filter((x) => !x.Key?.endsWith("/"));

        // sort by last modified date
        bucketObjects.sort((a, b) => {
          if (a.LastModified && b.LastModified) {
            return b.LastModified.getTime() - a.LastModified.getTime();
          }
          return 0;
        });

        const firstImage = bucketObjects[0].Key;

        const imageUrl = await getSignedUrl(
          s3,
          new GetObjectCommand({
            Bucket: "student-profile-pictures",
            Key: firstImage,
          })
        );
        return imageUrl;
      }

      return null;
    })
    .catch((err) => {
      console.log("Error fetching image from bucket", err);
      return null;
    });
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
