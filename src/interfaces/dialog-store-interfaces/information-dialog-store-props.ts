interface InformationDialogStoreProps {
  props: {
    typeOfInformation: "error" | "info";
    open: boolean;
  };
  setProps: (props: {
    typeOfInformation: "error" | "info";
    open: boolean;
  }) => void;
}
export default InformationDialogStoreProps;
