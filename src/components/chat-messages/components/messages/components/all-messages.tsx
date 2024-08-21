"use client";
import getMesagesQuery from "@/db/get-messages-query";
import MessageElement from "./message-element";
import { useEffect, useState } from "react";

function AllMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getAllMessages = async () => {
      const messagesResponse = await getMesagesQuery();
      const messages = messagesResponse?.messages;
      setMessages(messages);
    };
    getAllMessages();
  }, []);

  return <></>;
}
export default AllMessages;

/*
 {messages.map((element) => (
        <MessageElement message={element.message as string} key={element.id} />
      ))}
*/
