"use client";

import MessageElement from "./message-element";
import { useEffect, useState } from "react";
import { socket } from "@/app/socket";
import UserMessageProps from "@/interfaces/user-messages-props";

function NewMessage({ user }: { user: object }) {
  const [newMessage, setNewMessage] = useState<UserMessageProps[]>([]);

  socket.on("newMessage", (args) => {
    setNewMessage([...newMessage, args.messages]);
  });

  //TODO: Fix this, key can't be the index of the map, only used this for testing.
  //see here:

  return (
    <>
      {newMessage.map((element) => (
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

export default NewMessage;
