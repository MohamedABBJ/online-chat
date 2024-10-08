"use client";
import { socket } from "@/app/socket";
import getMesagesQuery from "@/db/get-messages-query";
import UserSessionProps from "@/interfaces/user-session-props";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const chatMessagesRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    scrollContentToBottom();
  }, [messages]);

  const scrollContentToBottom = () => {
    chatMessagesRef.current?.scrollTo(0, chatMessagesRef.current?.scrollHeight);
  };
  socket.on(`newMessageScroller`, (user_id) => {
    session && session.user.id == user_id ? scrollContentToBottom() : null;
  });

  return (
    <div
      className="h-full overflow-y-auto border border-s"
      ref={chatMessagesRef}
    >
      <ChatMessages chatID={chatID} session={session} messages={messages} />
    </div>
  );
}

export default MessagesContainer;
