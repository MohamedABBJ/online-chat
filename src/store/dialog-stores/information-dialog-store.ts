import InformationDialogStoreProps from "@/interfaces/dialog-store-interfaces/information-dialog-store-props";
import { create } from "zustand";

const confirmActionDialogStore = create<InformationDialogStoreProps>((set) => ({
  props: { open: false, typeOfInformation: "info" },
  setProps: (props: { open: boolean; typeOfInformation: "info" | "error" }) =>
    set({ props }),
}));

export default confirmActionDialogStore;
