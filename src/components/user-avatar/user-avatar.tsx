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
          <Image
            className="group-hover:bg-gray-400"
            src={DefaultUserAvatar}
            alt="default-user-avatar"
          />
        </AvatarFallback>
      </Avatar>
    </>
  );
}

export default UserAvatar;

/*
<UserMenu {...{ anchorEl, setAnchorEl, viewType, messageElement }} />
*/
