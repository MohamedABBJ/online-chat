import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

function LoginWithGithub() {
  return (
    <div className="flex">
      <Button>Login with Github</Button>
      <Github />
    </div>
  );
}

export default LoginWithGithub;
