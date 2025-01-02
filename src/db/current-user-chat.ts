"use server";
import { eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { joinedChatID } from "../../drizzle/schema";
import client from "./client";

async function currentUserChat({
  user_id,
  chat_id,
}: {
  user_id: string;
  chat_id: string | "none";
}) {
  const db = drizzle(client);
  const checkIfUserExists = async () => {
    return await db
      .select()
      .from(joinedChatID)
      .where(eq(joinedChatID.user_id, user_id));
  };
  const checkSameChatID = async () => {
    const checkSameChatIDQuery = await db
      .select()
      .from(joinedChatID)
      .where(
        sql`${joinedChatID.current_chat_id} = ${chat_id} and ${joinedChatID.user_id} = ${user_id}`,
      );
    return checkSameChatIDQuery;
  };

  if ((await checkIfUserExists()).length == 0) {
    await db.insert(joinedChatID).values({
      user_id: user_id,
      current_chat_id: chat_id,
    });
    console.log("The user has beed added correctly");
    return;
  }
  if (
    (await checkIfUserExists()).length == 1 &&
    (await checkSameChatID()).length == 0
  ) {
    const previousChatID = (
      await db
        .select({ previousChatID: joinedChatID.current_chat_id })
        .from(joinedChatID)
        .where(eq(joinedChatID.user_id, user_id))
    )[0].previousChatID;
    await db
      .update(joinedChatID)
      .set({ current_chat_id: chat_id, last_chat_id: previousChatID })
      .where(eq(joinedChatID.user_id, user_id));
    console.log("The chatID has beed updated correctly");
    return;
  }
  if ((await checkSameChatID()).length == 1) {
    return;
  }

  console.log("The user has more than one chatID, please check the database");
  throw new Error("An error occurred while updating the chatID");
}

export default currentUserChat;
