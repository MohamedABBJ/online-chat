import ConfirmActionDialogStoreProps from "@/interfaces/dialog-store-interfaces/confirm-action-dialog-store-props";
import { create } from "zustand";

const confirmActionDialogStore = create<ConfirmActionDialogStoreProps>(
  (set) => ({
    friendDetails: null,
    setFriendDetails: (friendDetails: UserFriendsChat | null) =>
      set({ friendDetails }),
    open: false,
    setOpen: (open: boolean) => set({ open }),
    typeOfAction: "remove",
    setTypeOfAction: (typeOfAction: "remove" | "block") =>
      set({ typeOfAction }),
  }),
);

export default confirmActionDialogStore;
