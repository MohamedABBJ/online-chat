import { Google } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

function LoginWithGoogle() {
  return (
    <Box className="flex">
      <Button>Login with Google</Button>
      <Google />
    </Box>
  );
}

export default LoginWithGoogle;
