import { Box } from "@mui/material";
import MessageElement from "./components/message-element";
import { useEffect } from "react";
import getMesagesQuery from "@/db/get-messages-query";
import AllMessages from "./components/all-messages";
import NewMessage from "./components/new-messages";

function MessagesContainer() {
  return (
    <Box>
      <NewMessage />
    </Box>
  );
}

export default MessagesContainer;
