interface ReplyingStateStoreProps {
  replyData: {
    replyState: boolean;
    messageID: string | null;
  };
  setReplyData: (value: {
    replyState: boolean;
    messageID: string | null;
  }) => void;
}
export default ReplyingStateStoreProps;
