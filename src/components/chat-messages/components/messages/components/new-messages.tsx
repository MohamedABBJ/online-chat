"use client";
import { io } from "socket.io-client";
import MessageElement from "./message-element";
import { useEffect, useState } from "react";
import { socket } from "@/app/socket";

function NewMessage() {
  const [first, setfirst] = useState<string[]>([]);

  socket.on("newMessage", (args: string) => {
    setfirst([...first, args]);
  });

  return (
    <>
      {first.map((element, index) => (
        <MessageElement message={element} key={index} />
      ))}
    </>
  );
}

export default NewMessage;
