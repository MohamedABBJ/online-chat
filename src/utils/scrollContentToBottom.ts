import { RefObject } from "react";

const scrollContentToBottom = ({
  type,
  chatMessagesRef,
  messageQuantityHandler,
}: {
  type: "initialLoad" | "newMessageScroller";
  chatMessagesRef: RefObject<HTMLDivElement>;
  messageQuantityHandler: {
    quantityOfMessages: number;
    initialQuantityOfMessages: number;
  };
}) => {
  const scrollToBottom = chatMessagesRef.current?.scrollTo(
    0,
    chatMessagesRef.current?.scrollHeight,
  );

  switch (type) {
    case "initialLoad":
      messageQuantityHandler.quantityOfMessages ==
        messageQuantityHandler.initialQuantityOfMessages && scrollToBottom;
      break;
    case "newMessageScroller":
      scrollToBottom;
    default:
      break;
  }
};

export default scrollContentToBottom;
