"use client";
import UserAvatar from "@/components/user-avatar/user-avatar";
import { Avatar, Box, Typography } from "@mui/material";

function MessageElement(props: { message: string; type: "message" | "reply" }) {
  const messageType =
    props.type == "message"
      ? "text-left"
      : props.type == "reply"
        ? "text-right"
        : "text-left";

  return (
    <Box className={`${messageType} my-4 ml-2 flex`}>
      <UserAvatar />
      <Typography
        className={"ml-2 flex items-center rounded-xl border border-black p-2"}
      >
        {props.message}
      </Typography>
    </Box>
  );
}

export default MessageElement;
