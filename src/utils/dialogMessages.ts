interface DialogMessagesProps {
  message: string;
  section: "chatList" | "chatContainer" | "topChatContainer";
  category: "error" | "warning";
  id?: number;
}

const dialogMessages: DialogMessagesProps[] = [
  {
    message: "Are you sure that you want to remove this user?",
    section: "chatList",
    category: "warning",
  },
  {
    message: "Are you sure that you want to block this user?",
    section: "chatList",
    category: "warning",
  },
  {
    message: "This image weights more than 5Mb",
    section: "chatContainer",
    category: "error",
  },
  {
    message: "An error happened sending the message, please try again",
    section: "chatContainer",
    category: "error",
  },
  {
    message: "An error happened setting your profile picture, please try again",
    section: "topChatContainer",
    category: "error",
  },
];

//Add ID for every element that gets added into the dialog messages
dialogMessages.map((element, index) => [
  ...dialogMessages,
  (element.id = index),
]);

export default dialogMessages;
