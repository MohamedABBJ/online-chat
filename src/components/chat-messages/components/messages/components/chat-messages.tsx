"use client";
import UserSessionProps from "@/interfaces/user-session-props";
import AllMessages from "./all-messages";
import NewMessage from "./new-messages";

interface Test {
  messages: {
    user_details: {
      id: string;
      name: string | null;
      type: "oAuthUser" | "Guest" | null;
      email: string | null;
      image: string | null;
    };
    messageReplyData: {
      id: number;
      user_id: string | null;
      message: string | null;
      status: "sent" | "deleted";
      reply: string | null;
    } | null;
    id: number;
    user_id: string | null;
    message: string | null;
    status: "sent" | "deleted";
    reply: string | null;
  }[];
}

function ChatMessages({
  session,
  chatID,
  messages,
}: {
  session: UserSessionProps;
  chatID: string;
  messages: Test;
}) {
  return (
    <>
      <AllMessages messages={messages} session={session} chatID={chatID} />
      <NewMessage session={session} chatID={chatID} />
    </>
  );
}

export default ChatMessages;
