"use client";

const messagesContainerScrollHandler = ({
  event,
  quantityOfMessages,
  quantityOfMessagesView,
  setQuantityOfMessagesView,
  setNotBottom,
}: {
  event: React.UIEvent<HTMLDivElement>;
  quantityOfMessages: number;
  quantityOfMessagesView: number;
  setQuantityOfMessagesView: React.Dispatch<React.SetStateAction<number>>;
  setNotBottom: (value: boolean) => void;
}) => {
  event.preventDefault();

  const actions = {
    moreMessages: 200,
    bottomScroll: 500,
  };

  const contentBottomHeight =
    event.currentTarget.scrollHeight - event.currentTarget.offsetHeight;

  const currentScrollHeight =
    event.currentTarget.scrollTop + actions.bottomScroll;

  const moreMessagesLoader =
    event.currentTarget.scrollTop <= actions.moreMessages &&
    quantityOfMessages > quantityOfMessagesView;

  if (moreMessagesLoader) {
    setQuantityOfMessagesView(quantityOfMessagesView + 50);
  }

  if (currentScrollHeight < contentBottomHeight) {
    setNotBottom(true);
  }

  if (currentScrollHeight >= contentBottomHeight) {
    setNotBottom(false);
  }
};

export default messagesContainerScrollHandler;
