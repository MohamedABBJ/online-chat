"use client";
import currentChatIdStore from "@/store/current-chat-id-store";
import { useEffect } from "react";

function ChatIDStore({ chat_id }: { chat_id: string }) {
  const { setChatID } = currentChatIdStore();

  useEffect(() => {
    setChatID(typeof chat_id == "undefined" ? "" : chat_id);
  }, [setChatID, chat_id]);

  return <></>;
}

export default ChatIDStore;
