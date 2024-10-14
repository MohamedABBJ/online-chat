import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import DefaultUserAvatar from "../../../public/default-user-avatar.svg";
import { Avatar, AvatarFallback } from "../ui/avatar";

function UserAvatar({ userImage }: { userImage: string }) {
  return (
    <>
      <Avatar>
        <AvatarImage src={process.env.NEXT_PUBLIC_AWS_IMAGE + userImage} />
        <AvatarFallback>
          <Image
            className="group-hover:bg-gray-400"
            src={DefaultUserAvatar}
            alt="default-user-avatar"
          />
        </AvatarFallback>
      </Avatar>
    </>
  );
}

export default UserAvatar;

/*
<UserMenu {...{ anchorEl, setAnchorEl, viewType, messageElement }} />
*/
