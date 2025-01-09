import DialogMessageCallerProps from "@/interfaces/dialog-message-caller-props";
import InformationDialogStoreProps from "@/interfaces/dialog-store-interfaces/information-dialog-store-props";
import { create } from "zustand";

const informationDialogStore = create<InformationDialogStoreProps>((set) => ({
  props: {
    open: false,
    callingName: { prop: "none" },
    friendDetails: null,
  },
  setProps: (props: { open: boolean; callingName: DialogMessageCallerProps }) =>
    set({ props }),
}));

export default informationDialogStore;
