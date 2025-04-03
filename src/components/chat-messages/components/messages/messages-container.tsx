"use client";
import { socket } from "@/app/socket";
import getMesagesQuery from "@/db/get-messages-query";
import UserSessionProps from "@/interfaces/user-session-props";
import chatMessagesLoadingStore from "@/store/chat-messages-loading-store";
import { usePathname } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";
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
  }[];
  maxIDMessages?: number;
}

function MessagesContainer({
  session,
  getChatMessages,
  initialQuantityOfMessages,
}: {
  session: UserSessionProps;
  getChatMessages: any;
  initialQuantityOfMessages: number;
}) {
  const chatID = usePathname().substring(1);
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const [quantityOfMessagesView, setQuantityOfMessagesView] = useState(
    initialQuantityOfMessages,
  );

  const [quantityOfMessages, setQuantityOfMessages] = useState(0);
  const { loaded, setLoaded } = chatMessagesLoadingStore();
  const [messages, setMessages] = useState<Test>();
  const messagesLoaded: Test = use(getChatMessages);

  useEffect(() => {
    setMessages(messagesLoaded as Test);
    setQuantityOfMessages(messagesLoaded.maxIDMessages!);
    setLoaded(true);
  }, [messagesLoaded, setLoaded]);

  useEffect(() => {
    quantityOfMessagesView == initialQuantityOfMessages &&
      scrollContentToBottom();
  }, [messages]);

  const scrollContentToBottom = () => {
    chatMessagesRef.current?.scrollTo(0, chatMessagesRef.current?.scrollHeight);
  };

  useEffect(() => {
    const loadMoreMessages = async () => {
      setMessages(
        (await getMesagesQuery({
          chat_id: chatID,
          quantity: quantityOfMessagesView,
        })) as Test,
      );
    };

    loadMoreMessages();
  }, [quantityOfMessagesView]);

  socket.on(`newMessageScroller`, (user_id) => {
    session && session.user.id == user_id ? scrollContentToBottom() : null;
  });
  //fix this here, the scroll doesn't load the messages correctly
  return (
    <div
      onScroll={(event) => {
        event.preventDefault();
        event.currentTarget.scrollTop <= 100 &&
          quantityOfMessages > quantityOfMessagesView &&
          setQuantityOfMessagesView(quantityOfMessagesView + 50);
      }}
      className="relative h-full overflow-y-auto border border-s pr-4 md:px-6"
      ref={chatMessagesRef}
    >
      <ChatMessages chatID={chatID} session={session} messages={messages!} />
    </div>
  );
}

export default MessagesContainer;
