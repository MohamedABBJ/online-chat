interface ChatCOntainerRefStoreProps {
  notBottom: boolean;
  setNotBottom: (value: boolean) => void;
  chatContainerRef: React.RefObject<HTMLDivElement>;
  newMessagesProps: {
    quantity: number;
    latestID: string;
  };
  setNewMessagesProps: (value: { quantity: number; latestID: string }) => void;
}

export default ChatCOntainerRefStoreProps;
