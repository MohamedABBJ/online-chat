import UploadImageDialogStoreProps from "@/interfaces/upload-image-dialog-store-props";

import { create } from "zustand";

const uploadImageDialogStore = create<UploadImageDialogStoreProps>((set) => ({
  openImageDialog: false,
  setOpenImageDialog: (openImageDialog: boolean) => set({ openImageDialog }),
}));

export default uploadImageDialogStore;
