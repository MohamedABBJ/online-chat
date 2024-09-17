import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar/user-avatar";

function FriendProfile({ friendDetails }: { friendDetails: UserFriends }) {
  return (
    <Button className="flex gap-3 text-start">
      <UserAvatar />
      <div>
        <p>{friendDetails.friendData?.name}</p>
      </div>
    </Button>
  );
}

export default FriendProfile;
