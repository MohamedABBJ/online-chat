"use client";
import { socket } from "@/app/socket";
import currentChatIdStore from "@/store/current-chat-id-store";
import { useEffect } from "react";

function ChatIDStore({ chat_id }: { chat_id: string }) {
  const { setChatID } = currentChatIdStore();
  const public_chat_id = "public_chat";

  useEffect(() => {
    setChatID(typeof chat_id == "undefined" ? public_chat_id : chat_id);
    typeof chat_id == "undefined"
      ? socket.emit("joinPublicChat", public_chat_id)
      : socket.emit("joinPrivateChat", chat_id);
  }, [setChatID, chat_id]);

  return <></>;
}

export default ChatIDStore;
