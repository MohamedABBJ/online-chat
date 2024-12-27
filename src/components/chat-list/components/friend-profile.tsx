"use client";
import UserAvatar from "@/components/user-avatar/user-avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

function FriendProfile({ friendDetails }: { friendDetails: UserFriends }) {
  const router = useRouter();
  return (
    <Link href={`/${friendDetails.chat_id}`} className="flex gap-3 text-start">
      <UserAvatar userImage={friendDetails.friendData?.image as string} />
      <div>
        <p>{friendDetails.friendData?.name}</p>
      </div>
    </Link>
  );
}

export default FriendProfile;
