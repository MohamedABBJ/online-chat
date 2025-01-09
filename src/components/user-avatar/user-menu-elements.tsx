"use client";
import UserMessageProps from "@/interfaces/user-messages-props";
import UserSessionProps from "@/interfaces/user-session-props";
import informationDialogStore from "@/store/dialog-stores/information-dialog-store";
import userFriendsStore from "@/store/user-friends-store";
import updateProfilePicture from "@/utils/aws/update-profile-picture";
import logoutHandler from "@/utils/logout-handler";
import { Button } from "../ui/button";
import UserLoginDialog from "../user-login-dialog/user-login-dialog";
import AddUserBtn from "./components/add-user-btn";
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
  const { friends } = userFriendsStore();
  const { props, setProps } = informationDialogStore();
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
        {viewType == "profile" ? (
          <label className="group cursor-pointer rounded-full">
            <input
              onChange={async (event) => {
                const updateProfileResponse = await updateProfilePicture(
                  event,
                  session?.user.id as string,
                );
                if (!updateProfileResponse) {
                  setProps({
                    open: true,
                    callingName: { prop: "pfpUploadError" },
                  });
                  return;
                }
              }}
              type="file"
              className="hidden"
            />
            <UserAvatar userImage={session?.user?.image as string} />
          </label>
        ) : (
          <UserAvatar
            userImage={messageElement?.user_details?.image as string}
          />
        )}
      </div>

      <p>
        {viewType == "profile"
          ? session?.user.name
          : messageElement?.user_details?.name}
      </p>

      {session?.user?.type == "Guest" && viewType == "profile" ? (
        <UserLoginDialog loginMode="oAuth" />
      ) : null}

      {viewType == "chat" && friends?.friends.length > 0 ? (
        friends?.friends.map(
          (element) =>
            element.friend_id.includes(messageElement?.user_id as string) ||
            (element.user_id.includes(session?.user.id as string) && (
              <AddUserBtn messageElement={messageElement} session={session} />
            )),
        )
      ) : (
        <AddUserBtn messageElement={messageElement} session={session} />
      )}
    </div>
  );
}

export default UserMenuElements;
