interface ChatListSelectorStoreProps {
  chatListSelector: "chat" | "notification";
  setChatListSelector: (value: "chat" | "notification") => void;
}
