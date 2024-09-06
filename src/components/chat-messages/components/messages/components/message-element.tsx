"use client";
import UserAvatar from "@/components/user-avatar/user-avatar";
import MessageTypeProps from "@/interfaces/message-type-props";
import UserMessageProps from "@/interfaces/user-messages-props";
import { Avatar, Box, Typography } from "@mui/material";

<<<<<<< HEAD
function MessageElement({
  messageElement,
}: {
  messageElement: UserMessageProps;
=======
function MessageElement(props: {
  message: string;
  type: "message" | "reply";
  role: "oAuthUser" | "Guest";
  userMessageID: string;
>>>>>>> 256325f2b812ad5479d986f75d8b9e60354c34a8
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
<<<<<<< HEAD
      <UserAvatar messageElement={messageElement} />
=======
      <UserAvatar
        viewType="chat"
        role={props.role}
        userMessageID={props.userMessageID}
      />
>>>>>>> 256325f2b812ad5479d986f75d8b9e60354c34a8
      <Typography
        className={`ml-2 flex items-center rounded-xl border border-black p-2 ${messageType}`}
      >
        {messageElement.message}
      </Typography>
    </Box>
  );
}

export default MessageElement;
