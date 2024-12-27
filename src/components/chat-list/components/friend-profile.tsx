"use client";
import UserAvatar from "@/components/user-avatar/user-avatar";
import currentUserChat from "@/db/current-user-chat";
import UserSessionProps from "@/interfaces/user-session-props";
import Link from "next/link";
import { useRouter } from "next/navigation";

function FriendProfile({
  friendDetails,
  session,
}: {
  friendDetails: UserFriends;
  session: UserSessionProps;
}) {
  const router = useRouter();
  return (
    <Link
      href={`/${friendDetails.chat_id}`}
      onClick={async () =>
        await currentUserChat({
          chat_id: friendDetails.chat_id,
          user_id: session.user.id!,
          option: "update",
        })
      }
      className="flex gap-3 text-start"
    >
      <UserAvatar userImage={friendDetails.friendData?.image as string} />
      <div>
        <p>{friendDetails.friendData?.name}</p>
      </div>
    </Link>
  );
}

export default FriendProfile;
