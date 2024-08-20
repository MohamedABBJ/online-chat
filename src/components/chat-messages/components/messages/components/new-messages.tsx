"use client";

import { io } from "socket.io-client";
import MessageElement from "./message-element";
import { useEffect } from "react";

function NewMessages() {
  return (
    <>
      <MessageElement message={"a"} />
    </>
  );
}

export default NewMessages;
