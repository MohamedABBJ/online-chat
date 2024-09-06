"use client";
import {
  Avatar,
  IconButton,
  IconButtonTypeMap,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import UserMenu from "./user-menu";
import { JWTPayload } from "jose";
import UserMessageProps from "@/interfaces/user-messages-props";

function UserAvatar({
  messageElement,
  viewType,
<<<<<<< HEAD
}: {
  viewType: "chat" | "profile";
  messageElement: UserMessageProps;
=======
  role,
  userMessageID,
}: {
  viewType: "chat" | "profile";
  role: "oAuthUser" | "Guest";
  userMessageID: string;
>>>>>>> 256325f2b812ad5479d986f75d8b9e60354c34a8
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenuHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  //TODO:Fix type
  return (
    <>
      <IconButton onClick={openMenuHandler}>
        <Avatar />
      </IconButton>
<<<<<<< HEAD
      <UserMenu {...{ anchorEl, setAnchorEl, viewType, messageElement }} />
=======
      <UserMenu {...{ anchorEl, setAnchorEl, viewType, role, userMessageID }} />
>>>>>>> 256325f2b812ad5479d986f75d8b9e60354c34a8
    </>
  );
}

export default UserAvatar;
