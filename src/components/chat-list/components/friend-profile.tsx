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
  return (
    <Link
      href={
        friendDetails.requestState == "blocked"
          ? `/${friendDetails.chat_id}`
          : ""
      }
      onClick={() =>
        friendDetails.requestState == "blocked" &&
        setProps({ open: true, callingName: { prop: "blockedUser" } })
      }
      className={`relative flex w-full items-center justify-center gap-4 text-start`}
    >
      <UserAvatar userImage={friendDetails.friendData?.image as string} />
      <div>
        <p>{friendDetails.friendData?.name}</p>
      </div>
      <MoreFriendsOptions friendDetails={friendDetails} session={session} />
    </Link>
  );
}

export default FriendProfile;
