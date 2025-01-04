import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserSessionProps from "@/interfaces/user-session-props";
import confirmActionDialogStore from "@/store/dialog-stores/confirm-action-dialog-store";

function MoreFriendsOptions({
  friendDetails,
  session,
}: {
  friendDetails: UserFriendsChat;
  session: UserSessionProps;
}) {
  const { setOpen, setTypeOfAction, setFriendDetails } =
    confirmActionDialogStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">{`...`}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col gap-2">
          <button
            onClick={async () => {
              setOpen(true);
              setTypeOfAction("remove");
              setFriendDetails(friendDetails);
            }}
          >
            Remove
          </button>
          <button
            onClick={async () => {
              setOpen(true);
              setTypeOfAction("block");
              setFriendDetails(friendDetails);
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
