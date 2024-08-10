import { Box } from "@mui/material";

import ReplyContainer from "./components/reply-container";
import TopBarContainer from "./components/top-bar/top-bar-container";
import MessageElement from "./components/messages/components/message-element";

function ChatMessages() {
  return (
    <Box className="flex h-full flex-col justify-between">
      <TopBarContainer />
      <MessageElement />
      <ReplyContainer />
    </Box>
  );
}

export default ChatMessages;
