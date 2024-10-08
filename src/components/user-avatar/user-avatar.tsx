"use client";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import DefaultUserAvatar from "../../../public/default-user-avatar.svg";
import { Avatar, AvatarFallback } from "../ui/avatar";

function UserAvatar() {
  return (
    <>
      <Avatar>
        <AvatarImage />
        <AvatarFallback>
          <Image src={DefaultUserAvatar} alt="default-user-avatar" />
        </AvatarFallback>
      </Avatar>
    </>
  );
}

export default UserAvatar;

/*
<UserMenu {...{ anchorEl, setAnchorEl, viewType, messageElement }} />
*/
