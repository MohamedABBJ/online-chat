import UserSessionProps from "@/interfaces/user-session-props";

const userBlockedHandler = ({
  friendDetails,
  session,
}: {
  friendDetails: UserFriendsChat;
  session: UserSessionProps;
}) => {
  /* This handles when the user block the other one  */
  const blockedUser = {
    userBlocked:
      friendDetails.requestState == "blockedUser" &&
      session.user.id == friendDetails.user_id,
    friendBlocked:
      friendDetails.requestState == "blockedFriend" &&
      session.user.id == friendDetails.friend_id,
  };

  const checkIfUserBlocked =
    blockedUser.friendBlocked && blockedUser.userBlocked;

  /* This handles when the friend blocks the user */
  const blockedFriend = {
    userBlocked:
      friendDetails.requestState == "blockedFriend" &&
      session.user.id == friendDetails.user_id,
    friendBlocked:
      friendDetails.requestState == "blockedUser" &&
      session.user.id == friendDetails.friend_id,
  };

  const checkIfFriendBlocked =
    blockedFriend.friendBlocked && blockedFriend.userBlocked;

  return { checkIfUserBlocked, checkIfFriendBlocked };
};

export default userBlockedHandler;
