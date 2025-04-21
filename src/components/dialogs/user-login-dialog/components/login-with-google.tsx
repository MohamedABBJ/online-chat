"use client";

import { Button } from "@/components/ui/button";
import oAuthLoginHandler from "@/utils/oauth-login-handler";

function LoginWithGoogle() {
  return (
    <div className="flex">
      <form
        action={async () => {
          await oAuthLoginHandler({ method: "google" });
        }}
      >
        <Button type="submit">Login with Google</Button>
      </form>
    </div>
  );
}

export default LoginWithGoogle;
