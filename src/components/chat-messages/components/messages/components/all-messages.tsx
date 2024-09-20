"use client";

import getMesagesQuery from "@/db/get-messages-query";
import MessageElement from "./message-element";
import { useEffect, useState } from "react";
import UserMessageProps from "@/interfaces/user-messages-props";

function AllMessages({ user }: { user: object }) {
  const [messages, setMessages] = useState<UserMessageProps>();

  const getMessages = async () => {
    setMessages(await getMesagesQuery());
  };

  useEffect(() => {
    getMessages();
  }, []);

  //TODO: Fix problem with type on element.message

  return (
    <>
      {messagesResponse?.messages.map((element) => (
        <MessageElement
          messageElement={{
            ...element,
            messageType: element.user_id == user?.userID ? "message" : "reply",
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
