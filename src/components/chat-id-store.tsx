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
  const chat_id_handler =
    typeof chat_id == "undefined" ? public_chat_id : chat_id;

  useEffect(() => {
    const updateChatID = async () => {
      const ID = await currentUserChat({
        user_id: user_id,
        chat_id: chat_id_handler,
      });
      socket.emit("leaveChat", ID?.previousChatID);
      socket.emit("joinChat", ID?.joinedChatID);
    };

    setChatID(chat_id_handler);
    updateChatID();
  }, [setChatID, chat_id_handler, chat_id, user_id]);

  return <></>;
}

export default ChatIDStore;
