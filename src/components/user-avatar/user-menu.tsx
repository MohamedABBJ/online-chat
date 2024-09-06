import {
  Avatar,
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import UserMenuElements from "./user-menu-elements";
import UserMessageProps from "@/interfaces/user-messages-props";

function UserMenu(props: {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  userMessageID: string;
  viewType: "chat" | "profile";
  messageElement: UserMessageProps;
}) {
  const open = Boolean(props.anchorEl);

  const closeMenuHandler = () => {
    props.setAnchorEl(null);
  };

  return (
    <>
      <Menu
        anchorEl={props.anchorEl}
        onClose={closeMenuHandler}
        id="basic-menu"
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <UserMenuElements
<<<<<<< HEAD
          viewType={props.viewType}
          messageElement={props.messageElement}
=======
          userMessageID={props.userMessageID}
          viewType={props.viewType}
          role={props.role}
          setAnchorEl={props.setAnchorEl}
>>>>>>> 256325f2b812ad5479d986f75d8b9e60354c34a8
        />
      </Menu>
    </>
  );
}

export default UserMenu;
