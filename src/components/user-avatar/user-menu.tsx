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

function UserMenu(props: {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  userMessageID: string;
  viewType: "chat" | "profile";
  role: "oAuthUser" | "Guest";
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
          userMessageID={props.userMessageID}
          viewType={props.viewType}
          role={props.role}
          setAnchorEl={props.setAnchorEl}
        />
      </Menu>
    </>
  );
}

export default UserMenu;
