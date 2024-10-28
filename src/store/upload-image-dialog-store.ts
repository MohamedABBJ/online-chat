import ReplyContainerStoreProps from "@/interfaces/reply-container-store-props";
import { ChangeEvent } from "react";
import { create } from "zustand";

const replyContainerStore = create<ReplyContainerStoreProps>((set) => ({
  image: undefined,
  setImage: (image: undefined | ChangeEvent<HTMLInputElement>) =>
    set({ image }),
  message: "",
  setMessage: (message: string) => set({ message }),
  openImageDialog: false,
  setOpenImageDialog: (openImageDialog: boolean) => set({ openImageDialog }),
}));

export default replyContainerStore;
