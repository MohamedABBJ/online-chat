import ReplyingStateStoreProps from "@/interfaces/replying-state-store-props";
import { create } from "zustand";

const replyingStateStore = create<ReplyingStateStoreProps>((set) => ({
  replyData: {
    replyState: false,
    messageID: null,
  },
  setReplyData: (replyData: {
    messageID: string | null;
    replyState: boolean;
  }) => set({ replyData }),
}));

export default replyingStateStore;
