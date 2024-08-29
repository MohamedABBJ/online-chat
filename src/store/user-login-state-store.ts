import UserLoginDialogStoreProps from "@/interfaces/user-login-dialog-store-props";
import UserLoginStateStoreProps from "@/interfaces/user-login-state-store-props";
import { create } from "zustand";

const userDialogLoginStore = create<UserLoginStateStoreProps>((set) => ({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),
  userData: {
    user_id: 0,
    user_name: "",
  },
  setUserData: (userData: { user_id: number; user_name: string }) =>
    set({ userData }),
}));

export default userDialogLoginStore;
