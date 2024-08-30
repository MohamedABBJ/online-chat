import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./db/client";
import { oAuthAccountsTable, usersTable } from "../drizzle/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(drizzle(client), {
    usersTable: usersTable,
    accountsTable: oAuthAccountsTable,
  }),
  providers: [GitHub, Google],
});
