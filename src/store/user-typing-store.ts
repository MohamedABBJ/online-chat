import UserTypingStoreProps from "@/interfaces/user-typing-store-props";
import { create } from "zustand";

const userTypingStore = create<UserTypingStoreProps>((set) => ({
  usersTyping: [],
  setUsersTyping: (usersTyping: string[]) => set({ usersTyping }),
}));

export default userTypingStore;
