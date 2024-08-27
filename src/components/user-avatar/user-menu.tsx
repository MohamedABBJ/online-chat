import { Avatar, Badge, Box, Menu, MenuItem, Typography } from "@mui/material";

function UserMenu(props: {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
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
        <Box className="flex flex-col items-center gap-5 p-12">
          <Badge
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            overlap="circular"
            badgeContent=" "
            variant="dot"
            className="[&_.MuiBadge-badge]:bg-green-600"
          >
            <Avatar />
          </Badge>
          <Typography>UserName</Typography>
        </Box>
      </Menu>
    </>
  );
}

export default UserMenu;
