"use client";
import { socket } from "@/app/socket";
import { Button } from "@/components/ui/button";
import sendMessageQuery from "@/db/send-message-query";
import UserSessionProps from "@/interfaces/user-session-props";
import currentChatIdStore from "@/store/current-chat-id-store";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import { Check } from "lucide-react";
import { useState } from "react";

function ReplyContainer({ session }: { session: UserSessionProps }) {
  const { setOpen } = userDialogLoginStore();
  const { chatID } = currentChatIdStore();
  const [message, setMessage] = useState("");

  const sendMessageHandler = async () => {
    if (session) {
      if (chatID != "") {
        socket.emit(
          `newPrivateMessage`,
          await sendMessageQuery({
            chat_id: chatID,
            userID: session.user?.id as string,
            message: message,
          }),
        );
      } else {
        socket.emit(
          `newMessage`,
          await sendMessageQuery({
            chat_id: chatID,
            userID: session.user?.id as string,
            message: message,
          }),
        );
      }
    } else {
      userDialogLoginHandler({ setOpen: setOpen }).handleOpen();
    }
  };
  return (
    <div className="mb-4 flex h-[20%] w-11/12">
      <div className="w-full rounded-xl border border-black">
        <input
          onChange={(event) => setMessage(event.currentTarget.value)}
          placeholder="Write a reply..."
          className="flex h-full w-full items-start"
        />
      </div>
      <div>
        <Button onClick={sendMessageHandler}>
          <Check />
        </Button>
      </div>
    </div>
  );
}

export default ReplyContainer;
