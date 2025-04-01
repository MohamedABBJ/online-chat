import ShowFriendsListStoreProps from "@/interfaces/chat-messages-loading-store-props";
import { create } from "zustand";

const showFriendsListStore = create<ShowFriendsListStoreProps>((set) => ({
  show: false,
  setShow: (show: boolean) => set({ show }),
}));

export default showFriendsListStore;
