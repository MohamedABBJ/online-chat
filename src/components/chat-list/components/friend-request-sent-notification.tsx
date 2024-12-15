import UserAvatar from "@/components/user-avatar/user-avatar";

function FriendNotificationSent({
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
          <p>Request Pending...</p>
        </div>
      </div>
    </div>
  );
}

export default FriendNotificationSent;
