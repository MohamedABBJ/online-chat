"use client";

import { socket } from "@/app/socket";
import UserSessionProps from "@/interfaces/user-session-props";

function userTypingHandler({
  session,
  chat_id,
}: {
  session: UserSessionProps;
  chat_id: string;
}) {
  socket.emit("userTyping", {
    id: session.user.id,
    name: session.user.name,
    chat_id: chat_id,
  });
}

export default userTypingHandler;
