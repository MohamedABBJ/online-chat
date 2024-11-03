"use client";
import { socket } from "@/app/socket";
import { Button } from "@/components/ui/button";
import sendMessageQuery from "@/db/send-message-query";
import UserSessionProps from "@/interfaces/user-session-props";
import currentChatIdStore from "@/store/current-chat-id-store";
import replyingStateStore from "@/store/replying-state-store";
import replyContainerStore from "@/store/upload-image-dialog-store";

import userDialogLoginStore from "@/store/user-login-dialog-store";
import uploadImageMessage from "@/utils/aws/upload-image.message";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import { Check, FileImage } from "lucide-react";

function ReplyContainer({
  session,
  imageMessage,
}: {
  session: UserSessionProps;
  imageMessage: {
    view: boolean;
    message?: string;
  };
}) {
  const { setOpen } = userDialogLoginStore();
  const { chatID } = currentChatIdStore();
  const { replyData, setReplyData } = replyingStateStore();
  const { setOpenImageDialog, setMessage, message, setImage, image } =
    replyContainerStore();

  const sendMessageHandler = async ({ image }: { image: string | null }) => {
    if (session) {
      if (chatID != "") {
        socket.emit(
          `newPrivateMessage`,
          await sendMessageQuery({
            chat_id: chatID,
            userID: session.user?.id as string,
            message: message,
            message_id: replyData.messageID,
          }),
        );
      } else {
        socket.emit(
          `newMessage`,
          await sendMessageQuery({
            chat_id: chatID,
            userID: session.user?.id as string,
            message: message,
            message_id: replyData.messageID,
            image: image,
          }),
        );

        socket.emit("newMessageScroller", session.user?.id);
      }
    } else {
      userDialogLoginHandler({ setOpen: setOpen }).handleOpen();
    }
    setOpenImageDialog(false);
  };
  return (
    <div className="mb-4 flex h-[20%] w-11/12">
      <div className="relative w-full rounded-xl border border-black">
        {replyData.replyState && (
          <div className="flex w-full justify-between px-6 outline outline-1 outline-black">
            <p>replying</p>
            <button
              onClick={() =>
                setReplyData({ replyState: false, messageID: null })
              }
            >
              x
            </button>
          </div>
        )}

        <input
          value={message}
          onChange={(event) => setMessage(event.currentTarget.value)}
          placeholder="Write a reply..."
          className="flex h-full w-full items-start bg-transparent"
        />
      </div>
      <div className="flex flex-col">
        <Button
          onClick={async () => {
            if (image) {
              const imageName = await uploadImageMessage(image);
              imageName && (await sendMessageHandler({ image: imageName }));
              return;
            }
            sendMessageHandler({ image: null });
          }}
        >
          <Check />
        </Button>
        {!imageMessage.view && (
          <Button className="relative">
            <label className="absolute flex h-full w-full items-center justify-center">
              <FileImage />
              <input
                onClick={(event) => (event.currentTarget.value = "")}
                onChange={(event) =>
                  event.target.files
                    ? (setOpenImageDialog(true), setImage(event))
                    : null
                }
                accept=".jpg, .png, .jpeg"
                hidden
                type="file"
              />
            </label>
          </Button>
        )}
      </div>
    </div>
  );
}

export default ReplyContainer;
