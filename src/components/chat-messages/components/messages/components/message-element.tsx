"use client";
import UserAvatar from "@/components/user-avatar/user-avatar";
import MessageTypeProps from "@/interfaces/message-type-props";
import UserMessageProps from "@/interfaces/user-messages-props";
import { Avatar, Box, Typography } from "@mui/material";

function MessageElement({
  messageElement,
}: {
  messageElement: UserMessageProps;
}) {
  const messageStyle = "bg-indigo-600 text-white";
  const replyStyle = "bg-transparent text-black";

  const messageType =
    messageElement.messageType == "message"
      ? messageStyle
      : messageElement.messageType == "reply"
        ? replyStyle
        : "";

  return (
    <Box className={`my-4 ml-2 flex`}>
      <UserAvatar messageElement={messageElement} />
      <Typography
        className={`ml-2 flex items-center rounded-xl border border-black p-2 ${messageType}`}
      >
        {messageElement.message}
      </Typography>
    </Box>
  );
}

export default MessageElement;
