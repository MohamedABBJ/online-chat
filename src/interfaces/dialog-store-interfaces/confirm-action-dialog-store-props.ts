interface ConfirmActionDialogStoreProps {
  typeOfAction: "remove" | "block";
  setTypeOfAction: (value: "remove" | "block") => void;
  friendDetails: UserFriendsChat | null;
  setFriendDetails: (value: UserFriendsChat | null) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}
export default ConfirmActionDialogStoreProps;
