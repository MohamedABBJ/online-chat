import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserSessionProps from "@/interfaces/user-session-props";
import informationDialogStore from "@/store/dialog-stores/information-dialog-store";

function MoreFriendsOptions({
  friendDetails,
  session,
}: {
  friendDetails: UserFriendsChat;
  session: UserSessionProps;
}) {
  const { setProps } = informationDialogStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">{`...`}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col gap-2">
          <button
            onClick={async () => {
              setProps({
                open: true,
                callingName: { prop: "removeUser" },
                friendDetails: friendDetails,
              });
            }}
          >
            Remove
          </button>
          <button
            onClick={async () => {
              setProps({
                open: true,
                callingName: { prop: "blockUser" },
                friendDetails: friendDetails,
              });
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
