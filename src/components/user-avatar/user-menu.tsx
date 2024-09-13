"use client";
import UserMenuElements from "./user-menu-elements";
import UserMessageProps from "@/interfaces/user-messages-props";
import MessageElement from "../chat-messages/components/messages/components/message-element";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserAvatar from "./user-avatar";
import { Button } from "../ui/button";

function UserMenu({
  viewType,
  messageElement,
}: {
  viewType: "chat" | "profile";
  messageElement?: UserMessageProps;
}) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="p-0" variant={"ghost"}>
            <UserAvatar />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <UserMenuElements
            viewType={viewType}
            messageElement={messageElement}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default UserMenu;
