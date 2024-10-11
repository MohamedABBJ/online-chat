const updateProfilePicture = async (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const bucketName = process.env.AWS_BUCKET_REGION;
  const region = process.env.AWS_BUCKET_REGION;
  console.log(bucketName);
  /*  
  if (event.target.files) {
    const s3Client = new S3Client({
      region: region,
      credentials: {
        accessKeyId: process.env.AWS_ACESS_ID as string,
        secretAccessKey: process.env.AWS_SECRET as string,
      },
    });
    const fileName = event.target.files[0].name;
    const file = event.target.files[0];

    try {
      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: fileName,
          Body: file,
        }),
      );
      alert("file uploaded!");
    } catch (error) {
      console.log(error);
    }
  }
  */
};

export default updateProfilePicture;
