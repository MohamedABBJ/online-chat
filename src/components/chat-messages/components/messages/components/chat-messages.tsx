"use client";

import currentChatIdStore from "@/store/current-chat-id-store";
import AllMessages from "./all-messages";
import NewMessage from "./new-messages";

function ChatMessages({ user }: { user: any }) {
  const { chatID } = currentChatIdStore();

  return (
    <>
      <AllMessages user={user} chatID={chatID} />
      <NewMessage user={user} />
    </>
  );
}

export default ChatMessages;
