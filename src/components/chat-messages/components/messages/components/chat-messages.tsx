"use client";
import UserSessionProps from "@/interfaces/user-session-props";
import { usePathname } from "next/navigation";
import AllMessages from "./all-messages";
import NewMessage from "./new-messages";

function ChatMessages({ session }: { session: UserSessionProps }) {
  const chatID = usePathname().substring(1);

  return (
    <>
      <AllMessages session={session} chatID={chatID} />
      <NewMessage session={session} chatID={chatID} />
    </>
  );
}

export default ChatMessages;
