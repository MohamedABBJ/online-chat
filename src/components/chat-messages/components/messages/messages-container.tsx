"use client";
import getMesagesQuery from "@/db/get-messages-query";
import UserSessionProps from "@/interfaces/user-session-props";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ChatMessages from "./components/chat-messages";
interface Test {
  messages: {
    user_details: {
      id: string;
      name: string | null;
      type: "oAuthUser" | "Guest" | null;
      email: string | null;
      image: string | null;
    };
    id: number;
    user_id: string | null;
    message: string | null;
    status: "sent" | "deleted";
  }[];
}

function MessagesContainer({ session }: { session: UserSessionProps }) {
  const chatID = usePathname().substring(1);
  const [messages, setMessages] = useState<Test>();

  useEffect(() => {
    const getChatMessages = async () => {
      setMessages(
        await getMesagesQuery({
          chat_id: chatID,
        }),
      );
    };
    getChatMessages();
  }, [chatID, session]);

  return (
    <div className="h-full overflow-y-auto border border-s">
      <ChatMessages chatID={chatID} session={session} messages={messages} />
    </div>
  );
}

export default MessagesContainer;
