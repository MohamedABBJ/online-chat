"use client";
import verifyUserSession from "@/app/lib/dal";
import updateProfileImage from "@/db/update-profile-image";
import UserMessageProps from "@/interfaces/user-messages-props";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import logoutHandler from "@/utils/logout-handler";
import { UploadButton } from "@/utils/uploadthing";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import UserAvatar from "./user-avatar";
import UserLoginDialog from "../user-login-dialog/user-login-dialog";
import addUserQuery from "@/db/add-user-query";
import { socket } from "@/app/socket";

function UserMenuElements({
  viewType,
  messageElement,
}: {
  viewType: "chat" | "profile";
  messageElement?: UserMessageProps;
}) {
  const [userData, setUserData] = useState<Session | null>();
  //TODO: Fix errors here

  useEffect(() => {
    const getUserData = async () => {
      setUserData(await verifyUserSession());
    };
    getUserData();
  }, []);

  return (
    <div className="flex w-48 flex-col items-center gap-2">
      {viewType == "profile" ? (
        <div className="flex w-full justify-end">
          <Button
            onClick={() => {
              logoutHandler({ logoutType: userData?.user?.type });
            }}
          >
            Log out
          </Button>
        </div>
      ) : null}

      <div className="relative flex flex-col items-center">
        <UploadButton
          className={`-800 absolute z-10 ut-button:w-full ut-button:bg-transparent ut-button:text-transparent ut-button:focus-within:hidden ut-button:focus:border ut-allowed-content:hidden ${viewType == "profile" ? "block" : "hidden"}`}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <div>
          <UserAvatar />
        </div>
      </div>

      <p>
        {viewType == "profile"
          ? userData?.user?.name
          : messageElement?.user_details?.name}
      </p>
      {userData && userData.user?.type == "Guest" && viewType == "profile" ? (
        <UserLoginDialog loginMode="oAuth" />
      ) : null}
      {viewType == "chat" &&
      messageElement?.user_details?.type == "oAuthUser" &&
      userData?.user?.id != messageElement.user_details.id ? (
        userData?.user?.type == "Guest" ? (
          <UserLoginDialog loginMode="addUser" />
        ) : userData?.user?.type == "oAuthUser" ? (
          <Button
            onClick={async () => {
              await addUserQuery({
                requiredData: {
                  user_id: userData?.user?.id as string,
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
