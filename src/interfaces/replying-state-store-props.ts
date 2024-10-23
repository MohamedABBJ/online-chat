interface ReplyingStateStoreProps {
  replyData: {
    replyState: boolean;
    messageID: number;
  };
  setReplyData: (value: { replyState: boolean; messageID: number }) => void;
}
export default ReplyingStateStoreProps;
