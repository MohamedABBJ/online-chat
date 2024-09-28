"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import { userFriendsTable } from "../../drizzle/schema";
import client from "./client";

const addUserQuery = async ({
  requiredData,
}: {
  requiredData: { user_id: string; friend_id: string };
}) => {
  try {
    const db = drizzle(client);
    await db.insert(userFriendsTable).values({
      user_id: requiredData.user_id,
      friend_id: requiredData.friend_id,
      requestState: "pending",
    });

    return await { response: "The user has beed added correctly", status: 200 };
  } catch (error) {
    console.log(error);
  }
};

export default addUserQuery;
