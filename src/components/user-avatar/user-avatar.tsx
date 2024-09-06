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
}: {
  viewType: "chat" | "profile";
  messageElement: UserMessageProps;
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
      <UserMenu {...{ anchorEl, setAnchorEl, viewType, messageElement }} />
    </>
  );
}

export default UserAvatar;
