"use client";
import Loading from "@/app/loading";
import { socket } from "@/app/socket";
import getMesagesQuery from "@/db/get-messages-query";
import UserSessionProps from "@/interfaces/user-session-props";
import chatMessagesLoadingStore from "@/store/chat-messages-loading-store";
import { chatContainerRefStore } from "@/store/refs/chat-container-ref-store";
import messagesContainerScrollHandler from "@/utils/messagesContainerScrollHandler";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";
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
  const { chatContainerRef, setNotBottom } = chatContainerRefStore();
  const [quantityOfMessagesView, setQuantityOfMessagesView] = useState(
    initialQuantityOfMessages,
  );
  const [loadingNewMessages, setLoadingNewMessages] = useState(false);
  const [quantityOfMessages, setQuantityOfMessages] = useState(0);
  const { loaded, setLoaded } = chatMessagesLoadingStore();
  const [messages, setMessages] = useState<Test>();
  const messagesLoaded: Test = use(getChatMessages);

  useEffect(() => {
    setMessages(messagesLoaded as Test);
    setQuantityOfMessages(messagesLoaded.maxIDMessages!);
    setLoaded(true);
  }, [messagesLoaded, setLoaded]);

  const scrollContentToBottom = () => {
    chatContainerRef.current?.scrollTo(
      0,
      chatContainerRef.current?.scrollHeight,
    );
  };

  useEffect(() => {
    const loadMoreMessages = async () => {
      setMessages(
        (await getMesagesQuery({
          chat_id: chatID,
          quantity: quantityOfMessagesView,
        })) as Test,
      );

      chatContainerRef.current?.scrollTop! > 0
        ? chatContainerRef.current?.scrollTo(
            0,
            chatContainerRef.current?.scrollTop,
          )
        : chatContainerRef.current?.scrollTo(0, 10);

      setLoadingNewMessages(false);
    };

    //DEBUG: This is timeout is for testing, won't be like this on production
    setTimeout(() => {
      quantityOfMessagesView != initialQuantityOfMessages && loadMoreMessages();
    }, 2000);

    quantityOfMessagesView != initialQuantityOfMessages &&
      setLoadingNewMessages(true);
  }, [quantityOfMessagesView]);

  socket.on(`newMessageScroller`, (user_id) => {
    session && session.user.id == user_id ? scrollContentToBottom() : null;
  });

  return (
    <div
      onLoad={() =>
        quantityOfMessagesView == initialQuantityOfMessages &&
        scrollContentToBottom()
      }
      onScroll={(event) =>
        messagesContainerScrollHandler({
          event: event,
          quantityOfMessages: quantityOfMessages,
          quantityOfMessagesView: quantityOfMessagesView,
          setQuantityOfMessagesView: setQuantityOfMessagesView,
          setNotBottom: setNotBottom,
        })
      }
      className="relative h-full overflow-y-auto border border-s pr-4 md:px-6"
      ref={chatContainerRef}
    >
      {loadingNewMessages && (
        <div className="h-48">
          <Loading />
        </div>
      )}
      <ChatMessages chatID={chatID} session={session} messages={messages!} />
    </div>
  );
}

export default MessagesContainer;
