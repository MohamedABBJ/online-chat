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

function UserAvatar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenuHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton onClick={openMenuHandler}>
        <Avatar />
      </IconButton>
      <UserMenu {...{ anchorEl, setAnchorEl }} />
    </>
  );
}

export default UserAvatar;
