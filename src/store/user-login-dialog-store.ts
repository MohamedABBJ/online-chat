import UserLoginDialogStoreProps from "@/interfaces/user-login-dialog-store-props";
import { create } from "zustand";

const userDialogLoginStore = create<UserLoginDialogStoreProps>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));

export default userDialogLoginStore;
