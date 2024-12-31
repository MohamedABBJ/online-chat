"use client";
import { socket } from "@/app/socket";
import currentUserChat from "@/db/current-user-chat";
import currentChatIdStore from "@/store/current-chat-id-store";
import { useEffect } from "react";

function ChatIDStore({
  chat_id,
  user_id,
}: {
  chat_id: string;
  user_id: string;
}) {
  const { setChatID } = currentChatIdStore();
  const public_chat_id = "public_chat";

  useEffect(() => {
    const updateChatID = async () => {
      return await currentUserChat({
        user_id: user_id,
        chat_id: chat_id,
      });
    };
    console.log(updateChatID);

    setChatID(typeof chat_id == "undefined" ? public_chat_id : chat_id);

    typeof chat_id == "undefined"
      ? (socket.emit("joinPublicChat", public_chat_id),
        socket.emit("leaveChat", updateChatID()))
      : (socket.emit("joinPrivateChat", chat_id),
        socket.emit("leaveChat", public_chat_id));
  }, [setChatID, chat_id]);

  return <></>;
}

export default ChatIDStore;
