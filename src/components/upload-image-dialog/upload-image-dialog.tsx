"use client";

import UserSessionProps from "@/interfaces/user-session-props";
import uploadImageDialogStore from "@/store/upload-image-dialog-store";
import { useState } from "react";
import ReplyContainer from "../chat-messages/components/reply-container";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
function UploadImageDialog({ session }: { session: UserSessionProps }) {
  const [open, setOpen] = useState(true);
  const { openImageDialog, setOpenImageDialog } = uploadImageDialogStore();
  return (
    <Dialog open={openImageDialog} onOpenChange={setOpenImageDialog}>
      <DialogTrigger asChild>
        <Button className="p-0" variant={"ghost"}></Button>
      </DialogTrigger>
      <DialogContent
        onClick={() => console.log("test")}
        className="flex flex-col items-center"
      >
        <img
          src={
            "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="image-message"
        />
        <ReplyContainer imageMessage={{ view: true }} session={session} />
      </DialogContent>
    </Dialog>
  );
}

export default UploadImageDialog;
