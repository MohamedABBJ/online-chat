"use client";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar/user-avatar";
import { useRouter } from "next/navigation";

function FriendProfile({ friendDetails }: { friendDetails: UserFriends }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(friendDetails.chat_id)}
      className="flex gap-3 text-start"
    >
      <UserAvatar />
      <div>
        <p>{friendDetails.friendData?.name}</p>
      </div>
    </Button>
  );
}

export default FriendProfile;
