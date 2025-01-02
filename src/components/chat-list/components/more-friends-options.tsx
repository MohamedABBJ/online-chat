import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function MoreFriendsOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="absolute right-2 top-2 focus:outline-none">{`↓`}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>
          <button>Remove from friendlist</button>
          <button>Block</button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MoreFriendsOptions;
