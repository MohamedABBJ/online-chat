"use client";

import { socket } from "@/app/socket";
import UserSessionProps from "@/interfaces/user-session-props";
import {
  UsersTypingProps,
  UserTypingProps,
} from "@/interfaces/users-typing-props";
import replyContainerStore from "@/store/dialog-stores/upload-image-dialog-store";
import { useEffect, useState } from "react";

function useUsersTyping({ session }: { session: UserSessionProps }) {
  const [currentUsersTyping, setCurrentUsersTyping] =
    useState<UsersTypingProps>([]);
  const { message } = replyContainerStore();

  useEffect(() => {
    socket.on("userTyping", (userData: UserTypingProps) => {
      setCurrentUsersTyping([...currentUsersTyping, userData]);
    });

    socket.on("userStopTyping", (userData) => {
      const currentUsersTypingUpdated = currentUsersTyping.filter(
        (element) => !element.name.includes(userData),
      );
      setCurrentUsersTyping(currentUsersTypingUpdated);
    });

    const typingTimeout = setTimeout(() => {
      socket.emit("userStopTyping", session.user.name);
    }, 1500);
    return () => {
      clearTimeout(typingTimeout);
      socket.off("userStopTyping");
    };
  }, [message, session, currentUsersTyping]);

  return currentUsersTyping;

  /* useEffect(() => {
    socket.on("userTyping", (name) => {
      setUserTyping([...userTyping, name]);
    });
    socket.on("userStopTyping", (name) => {
      setUserTyping(userTyping.splice(1, 1));
    });
    if (message != "") {
      const typingTimeout = setTimeout(() => {
        socket.emit("userStopTyping", session.user.name);
      }, 3000);
      return () => {
        clearTimeout(typingTimeout);
      };
    }
  }, [message]); */
}

export default useUsersTyping;
