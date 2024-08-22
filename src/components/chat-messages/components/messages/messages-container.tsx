import { Box } from "@mui/material";
import MessageElement from "./components/message-element";
import { useEffect } from "react";
import getMesagesQuery from "@/db/get-messages-query";
import AllMessages from "./components/all-messages";
import NewMessage from "./components/new-messages";
import { socket } from "@/app/socket";

function MessagesContainer() {
  socket.on("newMessage", (arg) => {
    
  });
  return (
    <Box className="h-full overflow-y-auto scroll-smooth">
      <AllMessages />
      <NewMessage />
    </Box>
  );
}

export default MessagesContainer;
