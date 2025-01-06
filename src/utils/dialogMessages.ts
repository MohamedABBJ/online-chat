interface DialogMessagesProps {
  message: string;
  section: "chatList" | "chatContainer" | "topChatContainer";
  id?: number;
}

const dialogMessages: DialogMessagesProps[] = [
  {
    message: "message",
    section: "chatList",
  },
];

//Add ID for every element that gets added into the dialog messages
dialogMessages.map((element, index) => [
  ...dialogMessages,
  (element.id = index),
]);

export default dialogMessages;
