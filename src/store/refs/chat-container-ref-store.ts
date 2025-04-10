import ChatCOntainerRefStoreProps from "@/interfaces/chat-container-ref-store-props";
import { createRef } from "react";
import { create } from "zustand";

export const chatContainerRefStore = create<ChatCOntainerRefStoreProps>(
  (set) => ({
    notBottom: false,
    setNotBottom: (value: boolean) => set({ notBottom: value }),
    newMessagesProps: { quantity: 0, latestID: "" },
    setNewMessagesProps: (value: { quantity: number; latestID: string }) =>
      set({ newMessagesProps: value }),
    chatContainerRef: createRef<HTMLDivElement>(),
  }),
);
