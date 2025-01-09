import DialogMessageCallerProps from "./dialog-message-caller-props";

interface DialogMessagesProps {
  message: string;
  section: "chatList" | "chatContainer" | "topChatContainer";
  category: "error" | "info";
  id?: number;
  callingName: DialogMessageCallerProps;
}

export default DialogMessagesProps;
