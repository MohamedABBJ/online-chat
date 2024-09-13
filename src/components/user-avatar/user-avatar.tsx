"use client";
import React, { useState } from "react";
import UserMenu from "./user-menu";
import UserMessageProps from "@/interfaces/user-messages-props";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

function UserAvatar() {
  return (
    <>
      <Avatar>
        <AvatarImage />
        <AvatarFallback>PF</AvatarFallback>
      </Avatar>
    </>
  );
}

export default UserAvatar;

/*
<UserMenu {...{ anchorEl, setAnchorEl, viewType, messageElement }} />
*/
