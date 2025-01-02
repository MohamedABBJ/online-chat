"use client";
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
  const chat_id_handler =
    typeof chat_id == "undefined" ? public_chat_id : chat_id;

  useEffect(() => {
    const updateChatID = async () => {
      return await currentUserChat({
        user_id: user_id,
        chat_id: chat_id_handler,
      });
    };

    setChatID(chat_id_handler);

    updateChatID();
  }, [setChatID, chat_id]);

  return <></>;
}

export default ChatIDStore;

/*
    typeof chat_id == "undefined"
      ? (socket.emit("joinPublicChat", public_chat_id),
        socket.emit("leaveChat", updateChatID()))
      : (socket.emit("joinPrivateChat", chat_id),
        socket.emit("leaveChat", public_chat_id));
*/
