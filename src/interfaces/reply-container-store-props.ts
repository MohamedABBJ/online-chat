import { ChangeEvent } from "react";

interface ReplyContainerStoreProps {
  message: string;
  setMessage: (value: string) => void;
  image: null | ChangeEvent<HTMLInputElement>;
  setImage: (value: null | ChangeEvent<HTMLInputElement>) => void;
  openImageDialog?: boolean;
  setOpenImageDialog: (value: boolean) => void;
}
export default ReplyContainerStoreProps;
