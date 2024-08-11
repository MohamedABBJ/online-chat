import UserLoginDialogStoreProps from "@/interfaces/user-login-dialog-store-props";

function userDialogLoginHandler(props: UserLoginDialogStoreProps) {
  const handleOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return { handleOpen, handleClose };
}

export default userDialogLoginHandler;
