import UserSessionProps from "@/interfaces/user-session-props";
import UploadImageDialog from "../upload-image-dialog/upload-image-dialog";
import InformationDialog from "./information-dialog";
import LoadingDialog from "./loading-dialog";

function Dialogs({ session }: { session: UserSessionProps }) {
  return (
    <>
      <UploadImageDialog session={session} />
      <InformationDialog session={session} />
      <LoadingDialog />
    </>
  );
}

export default Dialogs;
