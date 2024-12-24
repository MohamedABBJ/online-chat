import { create } from "zustand";

const userFriendsStore = create<UserFriendsStoreProps>((set) => ({
  friends: { friends: [] },
  setFriends: (value: { friends: UserFriends[] }) => set({ friends: value }),
}));

export default userFriendsStore;
