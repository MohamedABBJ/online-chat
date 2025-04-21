import UserLoginDialogStoreProps from "@/interfaces/user-login-dialog-store-props";
import { create } from "zustand";

const userDialogLoginStore = create<UserLoginDialogStoreProps>((set) => ({
  openLoginDialogProps: {
    open: false,
    loginMode: "allOptions",
  },
  setOpenLoginDialogProps: (openLoginDialogProps: {
    open: boolean;
    loginMode: "allOptions" | "oAuthOptions";
  }) => set({ openLoginDialogProps }),
}));

export default userDialogLoginStore;
