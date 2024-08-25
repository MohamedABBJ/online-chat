"use client";

import MessageElement from "./message-element";
import { useEffect, useState } from "react";
import { socket } from "@/app/socket";

function NewMessage({ user }: { user: object }) {
  const [newMessage, setNewMessage] = useState<string[]>([]);

  socket.on("newMessage", (args) => {
    setNewMessage([...newMessage, args]);
  });

  //TODO: Fix this, key can't be the index of the map, only used this for testing.
  return (
    <>
      {newMessage.map((element, index) => (
        <MessageElement
          type={element.userID == user.userID ? "message" : "reply"}
          message={element.message}
          key={index}
        />
      ))}
    </>
  );
}

export default NewMessage;
