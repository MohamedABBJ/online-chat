import UserSessionProps from "@/interfaces/user-session-props";
import userDialogLoginStore from "@/store/user-login-dialog-store";

function useLoggedInDialog({ session }: { session: UserSessionProps }) {
  const { setOpenLoginDialogProps } = userDialogLoginStore();

  const handler = ({ restrictedForGuest }: { restrictedForGuest: boolean }) => {
    if (!session) {
      setOpenLoginDialogProps({
        loginMode: "allOptions",
        open: true,
      });
      return false;
    }
    if (restrictedForGuest && session.user.type == "Guest") {
      setOpenLoginDialogProps({
        loginMode: "oAuthOptions",
        open: true,
      });
      return false;
    }
    return true;
  };

  return { handler };
}

export default useLoggedInDialog;
