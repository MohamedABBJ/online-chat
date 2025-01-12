interface DialogMessageCallerProps {
  prop:
    | "removeUser"
    | "blockUser"
    | "unblockUser"
    | "image5MBError"
    | "sendingMessageError"
    | "pfpUploadError"
    | "blockedUser"
    | "blockedFriend"
    | "none";
}

export default DialogMessageCallerProps;
