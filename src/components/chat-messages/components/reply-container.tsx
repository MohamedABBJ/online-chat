"use client";
import { socket } from "@/app/socket";
import { Button } from "@/components/ui/button";
import useUsersTyping from "@/hooks/use-users-typing";
import UserSessionProps from "@/interfaces/user-session-props";
import currentChatIdStore from "@/store/current-chat-id-store";
import replyingStateStore from "@/store/replying-state-store";
import replyContainerStore from "@/store/upload-image-dialog-store";

import userDialogLoginStore from "@/store/user-login-dialog-store";
import openAIQuery from "@/utils/ai/openai-query";
import uploadImageMessage from "@/utils/aws/upload-image.message";
import messageQuery from "@/utils/message-query";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import userTypingHandler from "@/utils/user-typing-handler";
import { Check, FileImage } from "lucide-react";
import { useState } from "react";

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
  const currentUsersTyping = useUsersTyping({ session: session });

  const sendMessageHandler = async ({ image }: { image: string | null }) => {
    if (session) {
      if (chatID != "public_chat") {
        const privateMessageQueryResult = await messageQuery({
          messageData: message,
          replyID: replyData.messageID,
          userID: session.user.id as string,
          image: image,
          chatID: chatID,
        });

        socket.emit(`newPrivateMessage`, privateMessageQueryResult);
        socket.emit("newMessageScroller", session.user?.id);
        setBtnAIState(false);

        btnAIState &&
          socket.emit(
            "newPrivateMessage",
            await messageQuery({
              messageData: (await openAIQuery({ message: message })) as string,
              replyID: privateMessageQueryResult?.id.toString() as string,
              userID: "1",
              image: image,
              chatID: chatID,
            }),
          );
      } else {
        const messageQueryResult = await messageQuery({
          messageData: message,
          replyID: replyData.messageID,
          userID: session.user.id as string,
          image: image,
          chatID: chatID,
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
              image: image,
              chatID: chatID,
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
      {currentUsersTyping.length > 0 && (
        <div className="absolute -top-6 flex w-full justify-between bg-white px-6 outline outline-1 outline-black">
          {currentUsersTyping.length > 5 ? (
            <p>{`Many users are typing...`}</p>
          ) : (
            <p>{`${currentUsersTyping.map((element) => element.name)}  ${currentUsersTyping.length == 1 ? "is typing..." : "are typing"}`}</p>
          )}
        </div>
      )}
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
            userTypingHandler({
              currentUsersTyping: currentUsersTyping,
              session: session,
            });
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
                setReplyData({ replyState: false, messageID: null });
                return;
              }
              sendMessageHandler({ image: null });
              setReplyData({ replyState: false, messageID: null });
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
