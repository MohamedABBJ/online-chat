import UserSessionProps from "@/interfaces/user-session-props";
import UploadImageDialog from "../upload-image-dialog/upload-image-dialog";
import InformationDialog from "./information-dialog";
import UserLoginDialog from "./user-login-dialog/user-login-dialog";

function Dialogs({ session }: { session: UserSessionProps }) {
  return (
    <>
      <UploadImageDialog session={session} />
      <InformationDialog session={session} />
      <UserLoginDialog />
    </>
  );
}

export default Dialogs;
