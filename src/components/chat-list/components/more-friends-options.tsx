import { socket } from "@/app/socket";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import removeOrBlockUserQuery from "@/db/remove-block-user-query";
import UserSessionProps from "@/interfaces/user-session-props";

function MoreFriendsOptions({
  friendDetails,
  session,
}: {
  friendDetails: UserFriendsChat;
  session: UserSessionProps;
}) {
  const removeOrBlockUserQueryData = {
    user_id: session?.user.id as string,
    friend_id: friendDetails?.friendData?.id as string,
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">{`...`}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col gap-2">
          <button
            onClick={async () => {
              await removeOrBlockUserQuery({
                requiredData: removeOrBlockUserQueryData,
                typeOfQuery: "removed",
              });
              socket.emit("updateFriendList");
            }}
          >
            Remove
          </button>
          <button
            onClick={async () => {
              await removeOrBlockUserQuery({
                requiredData: removeOrBlockUserQueryData,
                typeOfQuery: "blocked",
              });
              socket.emit("updateFriendList");
            }}
          >
            Block
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MoreFriendsOptions;
