"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import { messagesTable, usersTable } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

const addUserQuery = async () => {
  try {
    const db = drizzle(client);
    const messages = await db.select().from(messagesTable);
    const messagesWithRole = await Promise.all(
      messages.map(async (element) => ({
        ...element,
        user_details: (
          await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.id, element.user_id as string))
        )[0],
      })),
    );

    return await { messages: messagesWithRole, status: 200 };
  } catch (error) {
    console.log(error);
  }
};

export default addUserQuery;
