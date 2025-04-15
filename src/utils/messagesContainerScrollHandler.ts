"use client";

const messagesContainerScrollHandler = ({
  event,
  quantityOfMessages,
  quantityOfMessagesView,
  setQuantityOfMessagesView,
  setNotBottom,
  notBottom,
  setNewMessagesProps,
  newMessagesProps,
}: {
  event: React.UIEvent<HTMLDivElement>;
  quantityOfMessages: number;
  quantityOfMessagesView: number;
  setQuantityOfMessagesView: React.Dispatch<React.SetStateAction<number>>;
  setNotBottom: (value: boolean) => void;
  notBottom: boolean;
  setNewMessagesProps: (value: { quantity: number; latestID: string }) => void;
  newMessagesProps: {
    quantity: number;
    latestID: string;
  };
}) => {
  const actions = {
    moreMessages: 200,
    bottomScroll: 500,
  };
  const contentBottomHeight =
    event.currentTarget.scrollHeight - event.currentTarget.offsetHeight;
  console.log(document.getElementById("139")?.getBoundingClientRect());

  const currentScrollHeight =
    event.currentTarget.scrollTop + actions.bottomScroll;

  const moreMessagesLoader =
    event.currentTarget.scrollTop <= actions.moreMessages &&
    quantityOfMessages > quantityOfMessagesView;

  if (moreMessagesLoader) {
    setQuantityOfMessagesView(quantityOfMessagesView + 50);
  }

  if (!notBottom && currentScrollHeight < contentBottomHeight) {
    setNotBottom(true);
  }

  if (notBottom && currentScrollHeight >= contentBottomHeight) {
    setNotBottom(false);
  }

  if (newMessagesProps.quantity > 0) {
    const latestNewMessageYPosition = document
      .getElementById(newMessagesProps.latestID)
      ?.getBoundingClientRect().y!;
    if (latestNewMessageYPosition < 400) {
      setNewMessagesProps({ quantity: 0, latestID: "" });
    }
  }
};

export default messagesContainerScrollHandler;
