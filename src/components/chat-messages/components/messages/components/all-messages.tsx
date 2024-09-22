"use client";

import getMesagesQuery from "@/db/get-messages-query";
import MessageElement from "./message-element";
import { useEffect, useState } from "react";
import { User } from "next-auth";
import UserSessionProps from "@/interfaces/user-session-props";

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

function AllMessages({
  user,
  chatID,
}: {
  user: UserSessionProps;
  chatID: string;
}) {
  const [messages, setMessages] = useState<Test>();

  useEffect(() => {
    const getChatMessages = async () => {
      setMessages(
        await getMesagesQuery({
          chat_id: chatID,
          user_id: user.data?.id as string,
        }),
      );
    };
    if (user) {
      getChatMessages();
    }
  }, [chatID, user]);

  //TODO: Fix problem with type on element.message

  return (
    <>
      {messages?.messages.map((element) => (
        <MessageElement
          messageElement={{
            ...element,
            messageType: element.user_id == user.data?.id ? "message" : "reply",
          }}
          key={element.id}
        />
      ))}
    </>
  );
}
export default AllMessages;

/*
 {messages.map((element) => (
        <MessageElement message={element.message as string} key={element.id} />
      ))}
*/
