interface UserFriendsStoreProps {
  friends: { friends: UserFriends[] };
  setFriends: (value: { friends: UserFriends[] }) => void;
}
