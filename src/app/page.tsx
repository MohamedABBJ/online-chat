import ChatContainer from "@/components/chat-container";
import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import verifyUserSession from "./lib/dal";
import { Box } from "@mui/material";

export default async function Home() {
  const user = await verifyUserSession();

  return (
    <Box className="flex h-svh w-full items-center justify-center border-2 border-red-700">
      <ChatContainer />
      <UserLoginDialog userData={user} />
    </Box>
  );
}
