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

function UserAvatar({
  viewType,
  role,
  userMessageID,
}: {
  viewType: "chat" | "profile";
  role: "oAuthUser" | "Guest";
  userMessageID: string;
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
      <UserMenu {...{ anchorEl, setAnchorEl, viewType, role, userMessageID }} />
    </>
  );
}

export default UserAvatar;
