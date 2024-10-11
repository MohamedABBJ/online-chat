"use client";
import { socket } from "@/app/socket";
import addUserQuery from "@/db/add-user-query";
import UserMessageProps from "@/interfaces/user-messages-props";
import UserSessionProps from "@/interfaces/user-session-props";
import updateProfilePicture from "@/utils/aws/update-profile-picture";
import logoutHandler from "@/utils/logout-handler";
import { Button } from "../ui/button";
import UserLoginDialog from "../user-login-dialog/user-login-dialog";
import UserAvatar from "./user-avatar";

function UserMenuElements({
  viewType,
  messageElement,
  session,
}: {
  viewType: "chat" | "profile";
  messageElement?: UserMessageProps;
  session?: UserSessionProps;
}) {
  return (
    <div className="flex w-48 flex-col items-center gap-2">
      {viewType == "profile" ? (
        <div className="flex w-full justify-end">
          <Button
            onClick={() => {
              logoutHandler({ logoutType: session?.user.type });
            }}
          >
            Log out
          </Button>
        </div>
      ) : null}

      <div className="relative flex flex-col items-center">
        <label className="group cursor-pointer rounded-full">
          <input
            onChange={async (event) => await updateProfilePicture(event)}
            type="file"
            className="hidden"
          />
          <UserAvatar />
        </label>
      </div>

      <p>
        {viewType == "profile"
          ? session?.user.name
          : messageElement?.user_details?.name}
      </p>
      {session?.user?.type == "Guest" && viewType == "profile" ? (
        <UserLoginDialog loginMode="oAuth" />
      ) : null}
      {viewType == "chat" &&
      messageElement?.user_details?.type == "oAuthUser" &&
      session?.user?.id != messageElement.user_details.id ? (
        session?.user?.type == "Guest" ? (
          <UserLoginDialog loginMode="addUser" />
        ) : session?.user?.type == "oAuthUser" ? (
          <Button
            onClick={async () => {
              await addUserQuery({
                requiredData: {
                  user_id: session?.user?.id as string,
                  friend_id: messageElement.user_id as string,
                },
              });
              socket.emit("addUser");
            }}
          >
            Add user
          </Button>
        ) : null
      ) : null}
    </div>
  );
}

export default UserMenuElements;
