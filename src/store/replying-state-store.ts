import ReplyingStateStoreProps from "@/interfaces/replying-state-store-props";
import { create } from "zustand";

const replyingStateStore = create<ReplyingStateStoreProps>((set) => ({
  replyData: {
    replyState: false,
    messageID: 0,
  },
  setReplyData: (replyData: { messageID: number; replyState: boolean }) =>
    set({ replyData }),
}));

export default replyingStateStore;
