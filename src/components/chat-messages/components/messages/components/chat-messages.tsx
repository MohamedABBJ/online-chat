"use client";

import UserSessionProps from "@/interfaces/user-session-props";
import currentChatIdStore from "@/store/current-chat-id-store";
import AllMessages from "./all-messages";
import NewMessage from "./new-messages";

function ChatMessages({ session }: { session: UserSessionProps }) {
  const { chatID } = currentChatIdStore();

  return (
    <>
      <AllMessages session={session} chatID={chatID} />
      <NewMessage session={session} chatID={chatID} />
    </>
  );
}

export default ChatMessages;
