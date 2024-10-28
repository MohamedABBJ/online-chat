import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { nanoid } from "nanoid";

const uploadImageMessage = async (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
  const region = process.env.NEXT_PUBLIC_AWS_BUCKET_REGION;

  if (event.target.files) {
    const s3Client = new S3Client({
      region: region,
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACESS_ID as string,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET as string,
      },
    });
    const fileExtension = event.target.files[0].name
      .split(".")
      .pop()
      ?.toLowerCase();
    const fileID = nanoid();
    const fileName = `${fileID}.${fileExtension}`;
    const file = event.target.files[0];

    try {
      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: fileName,
          Body: file,
        }),
      );
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
};

export default uploadImageMessage;
