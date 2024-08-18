"use client";

import { loginAsGuestQuery } from "@/db/login-as-guest-query";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import { useState } from "react";

function LoginAsGuest() {
  const { setOpen } = userDialogLoginStore();
  return (
    <form
      action={async () => {
        const response = await loginAsGuestQuery();
        if (response.status == "200") {
          setOpen(false);
        }
        if (response.status == "500") {
          alert("a server error happened, please contact administrator");
        }
      }}
    >
      <button type="submit">Login as Guest</button>
    </form>
  );
}

export default LoginAsGuest;
