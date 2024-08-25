import { Box } from "@mui/material";
import AllMessages from "./components/all-messages";
import NewMessage from "./components/new-messages";
import verifyUserSession from "@/app/lib/dal";

async function MessagesContainer() {
  const user = await verifyUserSession();

  return (
    <Box className="h-full overflow-y-auto scroll-smooth">
      <AllMessages user={user} />
      <NewMessage user={user} />
    </Box>
  );
}

export default MessagesContainer;
