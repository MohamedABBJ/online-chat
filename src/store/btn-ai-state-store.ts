import BtnAIStateStoreProps from "@/interfaces/btn-ai-state-store-props";
import { create } from "zustand";

const btnAIStateStore = create<BtnAIStateStoreProps>((set) => ({
  active: false,
  setActive: (active: boolean) => set({ active }),
}));

export default btnAIStateStore;
