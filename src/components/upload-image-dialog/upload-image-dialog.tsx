"use client";

import UserSessionProps from "@/interfaces/user-session-props";
import uploadImageDialogStore from "@/store/upload-image-dialog-store";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReplyContainer from "../chat-messages/components/reply-container";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

function UploadImageDialog({ session }: { session: UserSessionProps }) {
  const { openImageDialog, setOpenImageDialog, image, setImage } =
    uploadImageDialogStore();

  const [imagePreview, setImagePreview] = useState("#");

  useEffect(() => {
    const imageURL =
      image?.target.files &&
      setImagePreview(URL.createObjectURL(image?.target?.files[0]));
    return () => {
      URL.revokeObjectURL(imageURL!);
    };
  }, [image]);

  return (
    <Dialog open={openImageDialog} onOpenChange={setOpenImageDialog}>
      <DialogTrigger asChild>
        <Button className="p-0" variant={"ghost"}></Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center">
        <DialogTitle />
        <Image
          width={250}
          height={200}
          src={imagePreview}
          alt="image-message"
        />
        <ReplyContainer imageMessage={{ view: true }} session={session} />
        <DialogDescription />
      </DialogContent>
    </Dialog>
  );
}

export default UploadImageDialog;
