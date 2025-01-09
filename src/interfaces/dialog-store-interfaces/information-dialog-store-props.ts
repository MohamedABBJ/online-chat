import DialogMessageCallerProps from "../dialog-message-caller-props";

interface InformationDialogStoreProps {
  props: {
    callingName: DialogMessageCallerProps;
    open: boolean;
    friendDetails?: UserFriendsChat | null;
  };
  setProps: (props: {
    callingName: DialogMessageCallerProps;
    open: boolean;
    friendDetails?: UserFriendsChat | null;
  }) => void;
}
export default InformationDialogStoreProps;
