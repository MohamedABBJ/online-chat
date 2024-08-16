import loginAsGuestQuery from "@/db/login-as-guest-query";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import userDialogLoginAsGuest from "@/utils/user-dialog-login-as-guest-handler";
import { Button } from "@mui/material";

function LoginAsGuest() {
  return <Button onClick={loginAsGuestQuery}>Login as Guest</Button>;
}

export default LoginAsGuest;
