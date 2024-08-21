"use client";
import { Box, Typography } from "@mui/material";

function MessageElement(props: { message: string }) {
  return (
    <Box className="h-full overflow-y-scroll border border-b">
      <Typography>{props.message}</Typography>
    </Box>
  );
}

export default MessageElement;
