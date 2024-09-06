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
          viewType={props.viewType}
          messageElement={props.messageElement}
        />
      </Menu>
    </>
  );
}

export default UserMenu;
