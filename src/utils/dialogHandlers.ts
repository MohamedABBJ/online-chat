import removeOrBlockUserQuery from "@/db/remove-block-user-query";
import DialogMessageCallerProps from "@/interfaces/dialog-message-caller-props";

const dialogHandler = async ({
  callingName,
  requiredData,
}: {
  requiredData: { user_id: string; friend_id: string };
  callingName: DialogMessageCallerProps;
}) => {
  switch (callingName.prop) {
    case "blockUser":
      await removeOrBlockUserQuery({
        requiredData: requiredData,
        typeOfQuery: "blocked",
      });
      break;
    case "removeUser":
      await removeOrBlockUserQuery({
        requiredData: requiredData,
        typeOfQuery: "removed",
      });
      break;
    default:
      throw Error("The calling name is not valid");
  }
};

export default dialogHandler;
