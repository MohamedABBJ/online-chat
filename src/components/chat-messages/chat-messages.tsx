import { Box } from "@mui/material";
import TopBar from "./components/top-bar";
import ReplyContainer from "./components/reply-container";

function ChatMessages() {
  return (
    <Box className="flex h-full flex-col justify-between">
      <TopBar />
      <ReplyContainer />
    </Box>
  );
}

export default ChatMessages;
