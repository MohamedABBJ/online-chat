import UserSessionProps from "@/interfaces/user-session-props";
import UploadImageDialog from "../upload-image-dialog/upload-image-dialog";
import ConfirmActionDialog from "./confirm-action-dialog";

function Dialogs({ session }: { session: UserSessionProps }) {
  return (
    <>
      <UploadImageDialog session={session} />
      <ConfirmActionDialog session={session} />
    </>
  );
}

export default Dialogs;
