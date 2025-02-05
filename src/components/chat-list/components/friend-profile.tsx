"use client";
import UserAvatar from "@/components/user-avatar/user-avatar";
import UserSessionProps from "@/interfaces/user-session-props";
import informationDialogStore from "@/store/dialog-stores/information-dialog-store";
import Link from "next/link";
import MoreFriendsOptions from "./more-friends-options";

function FriendProfile({
  friendDetails,
  session,
}: {
  friendDetails: UserFriendsChat;
  session: UserSessionProps;
}) {
  const { setProps } = informationDialogStore();

  const checkFriendOrUserSession =
    session.user.id == friendDetails.user_id ||
    session.user.id == friendDetails.friend_id;

  const requestStateHandler =
    (friendDetails.requestState == "blockedUser" &&
      session.user.id == friendDetails.user_id) ||
    (friendDetails.requestState == "blockedFriend" &&
      session.user.id == friendDetails.friend_id) ||
    friendDetails.requestState == "blocked";

  return (
    <div
      className={`relative flex w-full items-center justify-center gap-4 text-start ${requestStateHandler && "bg-gray-500"}`}
    >
      <Link
        className="flex items-center gap-4"
        href={
          !friendDetails.requestState.startsWith("blocked")
            ? `/${friendDetails.chat_id}`
            : ""
        }
        onClick={() =>
          requestStateHandler &&
          checkFriendOrUserSession &&
          setProps({ open: true, callingName: { prop: "blockedUser" } })
        }
      >
        <UserAvatar userImage={friendDetails.friendData?.image as string} />
        <div>
          <p>{friendDetails.friendData?.name}</p>
        </div>
      </Link>
      <MoreFriendsOptions friendDetails={friendDetails} session={session} />
    </div>
  );
}

export default FriendProfile;
