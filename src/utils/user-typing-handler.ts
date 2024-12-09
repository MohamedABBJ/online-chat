"use client";

import { socket } from "@/app/socket";
import UserSessionProps from "@/interfaces/user-session-props";
import { UsersTypingProps } from "@/interfaces/users-typing-props";

function userTypingHandler({
  currentUsersTyping,
  session,
}: {
  currentUsersTyping: UsersTypingProps;
  session: UserSessionProps;
}) {
  if (currentUsersTyping.length > 0) {
    const checkIfUserIsTyping = currentUsersTyping.filter(
      (element) => element.name == session.user.name,
    );
    checkIfUserIsTyping.length == 0 &&
      socket.emit("userTyping", {
        id: session.user.id,
        name: session.user.name,
      });

    return;
  }
  socket.emit("userTyping", {
    id: session.user.id,
    name: session.user.name,
  });
}

export default userTypingHandler;
