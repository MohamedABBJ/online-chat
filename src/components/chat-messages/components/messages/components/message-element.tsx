"use client";
import { Box, Typography } from "@mui/material";

function MessageElement(props: { message: string; type: "message" | "reply" }) {
  const textAlignment = props.type == 'message' ? 'text-right' : props.type == 'reply' ? 'text-left' : null

  return (
    <Box className={`${textAlignment}`}>
      <Typography>{props.message}</Typography>
    </Box>
  );
}

export default MessageElement;
