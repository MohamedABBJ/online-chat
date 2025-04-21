interface UserLoginDialogStoreProps {
  openLoginDialogProps: {
    open: boolean;
    loginMode: "allOptions" | "oAuthOptions";
  };
  setOpenLoginDialogProps: (value: {
    open: boolean;
    loginMode: "allOptions" | "oAuthOptions";
  }) => void;
}
export default UserLoginDialogStoreProps;
