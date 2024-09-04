"use client";
import UserAvatar from "@/components/user-avatar/user-avatar";
import { Avatar, Box, Typography } from "@mui/material";

function MessageElement(props: {
  message: string;
  type: "message" | "reply";
  role: "oAuthUser" | "Guest";
  userMessageID: string;
}) {
  const messageStyle = "bg-indigo-600 text-white";
  const replyStyle = "bg-transparent text-black";

  const messageType =
    props.type == "message"
      ? messageStyle
      : props.type == "reply"
        ? replyStyle
        : "";

  return (
    <Box className={`my-4 ml-2 flex`}>
      <UserAvatar
        viewType="chat"
        role={props.role}
        userMessageID={props.userMessageID}
      />
      <Typography
        className={`ml-2 flex items-center rounded-xl border border-black p-2 ${messageType}`}
      >
        {props.message}
      </Typography>
    </Box>
  );
}

export default MessageElement;
