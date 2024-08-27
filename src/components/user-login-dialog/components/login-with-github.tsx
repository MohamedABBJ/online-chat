import { GitHub } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

function LoginWithGithub() {
  return (
    <Box className="flex">
      <Button>Login with Github</Button>
      <GitHub />
    </Box>
  );
}

export default LoginWithGithub;
