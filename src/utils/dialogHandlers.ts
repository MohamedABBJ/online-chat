import { socket } from "@/app/socket";
import removeOrBlockUserQuery from "@/db/remove-block-user-query";
import unblockUserQuery from "@/db/unblock-user-query";
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
      socket.emit("updateFriendList");
      break;
    case "removeUser":
      await removeOrBlockUserQuery({
        requiredData: requiredData,
        typeOfQuery: "removed",
      });
      socket.emit("updateFriendList");
      break;
    case "unblockUser":
      await unblockUserQuery({
        requiredData: requiredData,
      });
      socket.emit("updateFriendList");
      break;
    default:
      throw Error("The calling name is not valid");
  }
};

export default dialogHandler;
