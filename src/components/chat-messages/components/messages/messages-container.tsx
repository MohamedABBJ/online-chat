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
    messageReplyData: {
      id: number;
      message: string | null;
      user_id: string | null;
      status: "sent" | "deleted";
      reply: string | null;
    } | null;
    id: number;
    user_id: string | null;
    message: string | null;
    status: "sent" | "deleted";
    reply: string | null;
    maxIDMessages?: undefined;
  }[];
}

function MessagesContainer({ session }: { session: UserSessionProps }) {
  const chatID = usePathname().substring(1);
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const [quantityOfMessagesView, setQuantityOfMessagesView] = useState(50);
  const [quantityOfMessages, setQuantityOfMessages] = useState(0);
  const [loadMoreMessages, setLoadMoreMessages] = useState(false);
  const [messages, setMessages] = useState<Test>();

  useEffect(() => {
    const getChatMessages = async () => {
      const messagesQuery = await getMesagesQuery({
        chat_id: chatID,
        quantity: quantityOfMessagesView,
      });
      quantityOfMessagesView <= 50 &&
        setQuantityOfMessages(messagesQuery?.maxIDMessages as number);
      setMessages(messagesQuery);
      setLoadMoreMessages(false);
    };
    getChatMessages();
  }, [chatID, session, quantityOfMessagesView]);

  useEffect(() => {
    quantityOfMessagesView == 50 && scrollContentToBottom();
  }, [messages]);

  const scrollContentToBottom = () => {
    chatMessagesRef.current?.scrollTo(0, chatMessagesRef.current?.scrollHeight);
  };

  socket.on(`newMessageScroller`, (user_id) => {
    session && session.user.id == user_id ? scrollContentToBottom() : null;
  });
  //fix this here, the scroll doesn't load the messages correctly
  return (
    <div
      onScroll={(event) => {
        event.preventDefault();
        event.currentTarget.scrollTop <= 200 &&
          quantityOfMessages > quantityOfMessagesView &&
          !loadMoreMessages &&
          (setQuantityOfMessagesView(quantityOfMessagesView + 50),
          setLoadMoreMessages(true));
      }}
      className="h-full overflow-y-auto border border-s"
      ref={chatMessagesRef}
    >
      <ChatMessages chatID={chatID} session={session} messages={messages} />
    </div>
  );
}

export default MessagesContainer;
