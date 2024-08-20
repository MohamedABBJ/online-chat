"use client";
import { Box } from "@mui/material";
import MessageElement from "./components/message-element";
import { useEffect } from "react";
import getMesagesQuery from "@/db/get-messages-query";
import AllMessages from "./components/all-messages";
import NewMessages from "./components/new-messages";
import { io } from "socket.io-client";
const socket = io();

function MessagesContainer() {
  socket.on("hello", (arg) => {
    console.log(arg);
  });
  return (
    <Box>
      <NewMessages />
    </Box>
  );
}

export default MessagesContainer;
