import { ChangeEvent } from "react";

interface ReplyContainerStoreProps {
  message: string;
  setMessage: (value: string) => void;
  image: undefined | ChangeEvent<HTMLInputElement>;
  setImage: (value: undefined | ChangeEvent<HTMLInputElement>) => void;
  openImageDialog?: boolean;
  setOpenImageDialog: (value: boolean) => void;
}
export default ReplyContainerStoreProps;
