const messagesContainerScrollHandler = ({
  event,
  quantityOfMessages,
  quantityOfMessagesView,
  setQuantityOfMessagesView,
}: {
  event: React.UIEvent<HTMLDivElement>;
  quantityOfMessages: number;
  quantityOfMessagesView: number;
  setQuantityOfMessagesView: React.Dispatch<React.SetStateAction<number>>;
}) => {
  event.preventDefault();
  const moreMessagesAction = 200;
  const contentNotBottom = 0;

  const moreMessagesLoader =
    event.currentTarget.scrollTop <= moreMessagesAction &&
    quantityOfMessages > quantityOfMessagesView;

  if (moreMessagesLoader) {
    setQuantityOfMessagesView(quantityOfMessagesView + 50);
  }
  console.log(event.currentTarget.offsetHeight);
  console.log(event.currentTarget.scrollTop);
};

export default messagesContainerScrollHandler;
