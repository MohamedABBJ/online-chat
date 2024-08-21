import { io } from "socket.io-client";
import MessageElement from "./message-element";
import { useEffect } from "react";
import { socket } from "@/app/socket";

function NewMessage() {
  return (
    <>
      <MessageElement message={"a"} />
    </>
  );
}

export default NewMessage;
