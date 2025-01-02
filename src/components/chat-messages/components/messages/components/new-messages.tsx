"use client";

import { socket } from "@/app/socket";
import UserMessageProps from "@/interfaces/user-messages-props";
import UserSessionProps from "@/interfaces/user-session-props";
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

  socket.on(`newMessage`, (args) => {
    setNewMessage([...newMessage, args]);
    console.log(args);
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
