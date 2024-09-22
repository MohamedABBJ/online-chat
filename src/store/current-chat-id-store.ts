import CurrentChatIDStoreProps from "@/interfaces/current-chat-id-store-props";
import { create } from "zustand";

const currentChatIdStore = create<CurrentChatIDStoreProps>((set) => ({
  chatID: "",
  setChatID: (chatID: string) => set({ chatID }),
}));

export default currentChatIdStore;
