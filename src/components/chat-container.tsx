import { Box, Button } from "@mui/material";

function ChatContainer() {
  return (
    <Box className="border-black border h-[90%] w-[95%] rounded-xl flex gap-10">
     <Box className="border-r border-black w-1/4 h-full">

     </Box>
     <Box className="border-b border-l border-black w-full h-16 rounded-bl-xl">

    </Box>
    </Box>
  );
}

export default ChatContainer;
