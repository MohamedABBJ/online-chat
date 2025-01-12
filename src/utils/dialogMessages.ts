import DialogMessagesProps from "@/interfaces/dialog-message-props";

const dialogMessages: DialogMessagesProps[] = [
  {
    message: "Are you sure that you want to remove this user?",
    section: "chatList",
    category: "info",
    callingName: { prop: "removeUser" },
  },
  {
    message: "Are you sure that you want to unblock this user?",
    section: "chatList",
    category: "info",
    callingName: { prop: "unblockUser" },
  },
  {
    message: "Are you sure that you want to block this user?",
    section: "chatList",
    category: "info",
    callingName: { prop: "blockUser" },
  },
  {
    message: "You can't interact with this user because they're blocked",
    section: "chatList",
    category: "error",
    callingName: { prop: "blockedUser" },
  },
  {
    message: "You can't interact with this user because they're blocked",
    section: "chatList",
    category: "error",
    callingName: { prop: "blockedFriend" },
  },
  {
    message: "This image weights more than 5Mb",
    section: "chatContainer",
    category: "error",
    callingName: { prop: "image5MBError" },
  },
  {
    message: "An error happened sending the message, please try again",
    section: "chatContainer",
    category: "error",
    callingName: { prop: "sendingMessageError" },
  },
  {
    message: "An error happened setting your profile picture, please try again",
    section: "topChatContainer",
    category: "error",
    callingName: { prop: "pfpUploadError" },
  },
];

//Add ID for every element that gets added into the dialog messages
dialogMessages.map((element, index) => [
  ...dialogMessages,
  (element.id = index),
]);

export default dialogMessages;
