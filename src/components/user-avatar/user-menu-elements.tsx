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

function UserMenuElements({
  viewType,
  messageElement,
  setAnchorEl,
}: {
  viewType: "chat" | "profile";
  messageElement?: UserMessageProps;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}) {
  const { setOpen } = userDialogLoginStore();
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
              setAnchorEl(null);
            }}
          >
            Log out
          </Button>
        </div>
      ) : null}

      <div className="relative flex flex-col items-center">
        <UploadButton
          className={`-800 ut-button:w-full ut-button:bg-transparent ut-button:text-transparent ut-button:focus-within:hidden ut-button:focus:border ut-allowed-content:hidden absolute z-10 ${viewType == "profile" ? "block" : "hidden"}`}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <div>
          <Avatar />
        </div>
      </div>

      <p>
        {viewType == "profile"
          ? userData?.user?.name
          : messageElement?.user_details?.name}
      </p>
      {userData && userData.user?.type == "Guest" && viewType == "profile" ? (
        <Button onClick={() => setOpen(true)}>Login with auth</Button>
      ) : null}
      {viewType == "chat" &&
      messageElement?.user_details?.type == "oAuthUser" &&
      userData?.user?.id != messageElement.user_details.id ? (
        <Button
          onClick={() =>
            userData?.user?.type == "Guest"
              ? setOpen(true)
              : userData?.user?.type == "oAuthUser"
                ? alert("Adding user... (implementation W.I.P)")
                : alert("An error happened, please contact admin")
          }
        >
          Add user
        </Button>
      ) : null}
    </div>
  );
}

export default UserMenuElements;
