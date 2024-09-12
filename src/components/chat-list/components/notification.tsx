import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import UserAvatar from "@/components/user-avatar/user-avatar";
import { Check, X } from "lucide-react";

function Notification() {
  const test = Icons.apple;
  return (
    <div>
      <div className="flex items-center gap-3">
        <UserAvatar viewType="chat" />
        <div>
          <p>username</p>
          <p>sent you a friend request</p>
        </div>
        <div className="flex gap-2">
          <Button className="min-w-0 rounded-full p-1">
            <Check />
          </Button>
          <Button color="error" className="min-w-0 rounded-full p-1">
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
