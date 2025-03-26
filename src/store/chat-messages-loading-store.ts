import ChatMessagesLoadingStoreProps from "@/interfaces/chat-messages-loading-store-props";
import { create } from "zustand";

const chatMessagesLoadingStore = create<ChatMessagesLoadingStoreProps>(
  (set) => ({
    loaded: false,
    setLoaded: (loaded: boolean) => set({ loaded }),
  }),
);

export default chatMessagesLoadingStore;
