"use client";

import MessageElement from "./message-element";
import { useEffect, useState } from "react";
import { socket } from "@/app/socket";

function NewMessage() {
  const [newMessage, setNewMessage] = useState<string[]>([]);

  socket.on("newMessage", (args: string) => {
    setNewMessage([...newMessage, args]);
  });

  //TODO: Fix this, key can't be the index of the map, only used this for testing.
  return (
    <>
      {newMessage.map((element, index) => (
        <MessageElement message={element} key={index} />
      ))}
    </>
  );
}

export default NewMessage;
