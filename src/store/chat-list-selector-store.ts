import { create } from "zustand";

const chatListSelectorStore = create<ChatListSelectorStoreProps>((set) => ({
  chatListSelector: "chat",
  setChatListSelector: (chatListSelector: "chat" | "notification") =>
    set({ chatListSelector }),
}));

export default chatListSelectorStore;
