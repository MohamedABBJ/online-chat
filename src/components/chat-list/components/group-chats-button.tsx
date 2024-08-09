import { Box, Button, Typography } from "@mui/material";

function GroupChatsButton() {
  return (
    <Box className="w-11/12 bg-indigo-400">
      <Button className="flex flex-col items-start">
        <Typography>Team Conversations</Typography>
        <Typography>0 Open</Typography>
      </Button>
    </Box>
  );
}

export default GroupChatsButton;
