interface DialogMessageCallerProps {
  prop:
    | "removeUser"
    | "blockUser"
    | "unblockUser"
    | "unblockFriend"
    | "image5MBError"
    | "sendingMessageError"
    | "pfpUploadError"
    | "blockedUser"
    | "blockedFriend"
    | "none";
}

export default DialogMessageCallerProps;
