import updateProfileImage from "@/db/update-profile-image";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { nanoid } from "nanoid";

const updateProfilePicture = async (
  event: React.ChangeEvent<HTMLInputElement>,
  user_id: string,
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
      await updateProfileImage({ newImage: fileName, user_id: user_id });
      alert("The image has been uploaded!");
    } catch (error) {
      console.log(error);
      return false;
    }
  }
};

export default updateProfilePicture;
