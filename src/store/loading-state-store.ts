import LoadingStateStoreProps from "@/interfaces/loading-state-store-props";
import { create } from "zustand";

const loadingStateStore = create<LoadingStateStoreProps>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
}));

export default loadingStateStore;
