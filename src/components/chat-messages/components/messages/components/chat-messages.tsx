"use client";

import currentChatIdStore from "@/store/current-chat-id-store";
import AllMessages from "./all-messages";
import NewMessage from "./new-messages";
import { User } from "next-auth";
import UserSessionProps from "@/interfaces/user-session-props";

function ChatMessages({ user }: { user: UserSessionProps }) {
  const { chatID } = currentChatIdStore();

  return (
    <>
      <AllMessages user={user} chatID={chatID} />
      <NewMessage user={user} />
    </>
  );
}

export default ChatMessages;
