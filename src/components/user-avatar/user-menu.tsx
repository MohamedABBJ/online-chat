"use client";
import UserMessageProps from "@/interfaces/user-messages-props";
import UserSessionProps from "@/interfaces/user-session-props";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserAvatar from "./user-avatar";
import UserMenuElements from "./user-menu-elements";

function UserMenu({
  viewType,
  messageElement,
  session,
}: {
  viewType: "chat" | "profile";
  messageElement?: UserMessageProps;
  session?: UserSessionProps;
}) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="p-0" variant={"ghost"}>
            {viewType == "chat" ? (
              <UserAvatar
                userImage={messageElement?.user_details?.image as string}
              />
            ) : (
              <UserAvatar userImage={session?.user?.image as string} />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <UserMenuElements
            viewType={viewType}
            messageElement={messageElement}
            session={session}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default UserMenu;
