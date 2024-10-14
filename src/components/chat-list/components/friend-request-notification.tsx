import UserAvatar from "@/components/user-avatar/user-avatar";

function FriendRequestNotification({
  notificationDetails,
}: {
  notificationDetails: UserFriends;
}) {
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
        {/*  <div className="flex gap-2">
          <Button
            onClick={async () =>
              await friendRequestHandlerQuery({
                friend_id: notificationDetails.friend_id,
                user_id: notificationDetails.user_id,
                requestState: "accepted",
              })
            }
            className="min-w-0 rounded-full p-1"
          >
            <Check />
          </Button>
          <Button
            onClick={async () =>
              await friendRequestHandlerQuery({
                friend_id: notificationDetails.friend_id,
                user_id: notificationDetails.user_id,
                requestState: "denied",
              })
            }
            color="error"
            className="min-w-0 rounded-full p-1"
          >
            <X />
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default FriendRequestNotification;
