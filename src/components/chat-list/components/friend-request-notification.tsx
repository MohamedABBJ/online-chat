import { socket } from "@/app/socket";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar/user-avatar";
import friendRequestHandlerQuery from "@/db/friend-request-handler-query";
import chatListSelectorStore from "@/store/chat-list-selector-store";
import { Check, X } from "lucide-react";

function FriendRequestNotification({
  userNotifications,
  notificationDetails,
}: {
  userNotifications: UserFriendsArrayProps;
  notificationDetails: UserFriends;
}) {
  const { setChatListSelector } = chatListSelectorStore();

  return (
    <div>
      <div className="flex items-center gap-3">
        <UserAvatar
          userImage={notificationDetails.friendData?.image as string}
        />
        <div>
          <p>{notificationDetails.friendData?.name}</p>
          <p>sent you a friend request</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={async () => {
              await friendRequestHandlerQuery({
                friend_id: notificationDetails.friend_id,
                user_id: notificationDetails.user_id,
                requestState: "accepted",
              });
              socket.emit("updateFriendList");
              return;
            }}
            className="min-w-0 rounded-full p-1"
          >
            <Check />
          </Button>
          <Button
            onClick={async () => {
              await friendRequestHandlerQuery({
                friend_id: notificationDetails.friend_id,
                user_id: notificationDetails.user_id,
                requestState: "denied",
              });
              socket.emit("updateFriendList");
              return;
            }}
            color="error"
            className="min-w-0 rounded-full p-1"
          >
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FriendRequestNotification;
