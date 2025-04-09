interface ChatCOntainerRefStoreProps {
  notBottom: boolean;
  setNotBottom: (value: boolean) => void;
  chatContainerRef: React.RefObject<HTMLDivElement>;
}

export default ChatCOntainerRefStoreProps;
