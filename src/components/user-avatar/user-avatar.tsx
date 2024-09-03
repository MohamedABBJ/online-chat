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
}: {
  viewType: "chat" | "profile";
  role: "oAuthUser" | "Guest";
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
      <UserMenu {...{ anchorEl, setAnchorEl, viewType, role }} />
    </>
  );
}

export default UserAvatar;
