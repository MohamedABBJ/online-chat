"use server";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "../../drizzle/schema";
import client from "./client";

const checkAIUserQuery = async () => {
  const db = drizzle(client);

  const checkAIUserQueryHandler = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, "1"));

  if ((await checkAIUserQueryHandler.length) == 0) {
    await db
      .insert(usersTable)
      .values({ id: "1", name: "Online Chat Bot", type: "AI" });
    return;
  }

  return;
};

export default checkAIUserQuery;
