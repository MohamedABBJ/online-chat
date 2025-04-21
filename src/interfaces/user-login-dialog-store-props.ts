import LoginModesProps from "./login-mode-props";

interface UserLoginDialogStoreProps {
  openLoginDialogProps: {
    open: boolean;
    loginMode: LoginModesProps["loginMode"];
  };
  setOpenLoginDialogProps: (value: {
    open: boolean;
    loginMode: LoginModesProps["loginMode"];
  }) => void;
}
export default UserLoginDialogStoreProps;
