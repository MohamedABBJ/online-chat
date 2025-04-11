"use client";

import { socket } from "@/app/socket";
import UserMessageProps from "@/interfaces/user-messages-props";
import UserSessionProps from "@/interfaces/user-session-props";
import { chatContainerRefStore } from "@/store/refs/chat-container-ref-store";
import { useState } from "react";
import MessageElement from "./message-element";

function NewMessage({
  chatID,
  session,
}: {
  session: UserSessionProps;
  chatID: string;
}) {
  const [newMessage, setNewMessage] = useState<UserMessageProps[]>([]);
  const { setNewMessagesProps, newMessagesProps, chatContainerRef } =
    chatContainerRefStore();

  socket.on(`newMessage`, (args: UserMessageProps) => {
    setNewMessage([...newMessage, args]);
    const newMessagesScrollTopAction =
      chatContainerRef.current?.scrollHeight! - 200;

    console.log(newMessagesProps);

    if (newMessagesScrollTopAction < chatContainerRef.current?.scrollHeight!) {
      const lastNewMessageID =
        newMessagesProps.latestID == ""
          ? args.id.toString()
          : newMessagesProps.latestID;

      setNewMessagesProps({
        latestID: lastNewMessageID,
        quantity: newMessagesProps.quantity + 1,
      });
      //there's an error here, maybe it's the condition that's not boing met correctly?
    }
  });

  return (
    <>
      {newMessage.map((element) => (
        <MessageElement
          messageElement={{
            ...element,
            messageType:
              element.user_id == session?.user?.id ? "message" : "reply",
          }}
          key={element.id}
          session={session}
        />
      ))}
    </>
  );
}

export default NewMessage;
