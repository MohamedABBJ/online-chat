"use client";
import { socket } from "@/app/socket";
import { Button } from "@/components/ui/button";
import sendMessageQuery from "@/db/send-message-query";
import UserSessionProps from "@/interfaces/user-session-props";
import currentChatIdStore from "@/store/current-chat-id-store";
import replyingStateStore from "@/store/replying-state-store";
import replyContainerStore from "@/store/upload-image-dialog-store";

import userDialogLoginStore from "@/store/user-login-dialog-store";
import openAIQuery from "@/utils/ai/openai-query";
import uploadImageMessage from "@/utils/aws/upload-image.message";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import { Check, FileImage } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [btnAIState, setBtnAIState] = useState<boolean>(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      socket.emit("userStopTyping", session.user.id);
    }, 3000);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [message]);

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
        const messageQuery = async ({
          messageData,
          replyID,
          userID,
        }: {
          messageData: string;
          replyID: string | null;
          userID: string;
        }) => {
          return await sendMessageQuery({
            chat_id: chatID,
            userID: userID,
            message: messageData,
            message_id: replyID,
            image: image,
          });
        };

        const messageQueryResult = await messageQuery({
          messageData: message,
          replyID: replyData.messageID,
          userID: session.user.id as string,
        });

        socket.emit("newMessage", messageQueryResult);
        socket.emit("newMessageScroller", session.user?.id);
        setBtnAIState(false);

        btnAIState &&
          socket.emit(
            "newMessage",
            await messageQuery({
              messageData: (await openAIQuery({ message: message })) as string,
              replyID: messageQueryResult?.id.toString() as string,
              userID: "1",
            }),
          );
        socket.emit("newMessageScroller", session.user?.id);
      }
    } else {
      userDialogLoginHandler({ setOpen: setOpen }).handleOpen();
    }
    setMessage("");
    setOpenImageDialog(false);
    setImage(null);
  };
  return (
    <div className="relative mb-4 flex h-[20%] w-11/12">
      <div className="absolute -top-6 flex w-full justify-between bg-white px-6 outline outline-1 outline-black">
        <p>{`USERNAMES ARE typing...`}</p>
        <p>{`USERNAME is typing...`}</p>
        <p>{`Many users are typing...`}</p>
      </div>
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
          onChange={(event) => {
            setMessage(event.currentTarget.value);
            socket.emit("userTyping", session.user.id);
          }}
          placeholder="Write a reply..."
          className="flex h-full w-full items-start bg-transparent"
        />
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <Button
            className="h-full"
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
            <Button className="relative h-full">
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
        {!imageMessage.view && (
          <Button
            onClick={() => setBtnAIState(!btnAIState)}
            variant={`${btnAIState ? "destructive" : "default"}`}
            className={`h-full w-full`}
          >
            AI
          </Button>
        )}
      </div>
    </div>
  );
}

export default ReplyContainer;
