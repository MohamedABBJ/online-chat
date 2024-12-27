"use server";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { currentJoinedChat } from "../../drizzle/schema";
import client from "./client";

async function currentUserChat({
  user_id,
  chat_id,
  option,
}: {
  user_id: string;
  chat_id: string | "none";
  option: "create" | "update" | "check";
}) {
  const db = drizzle(client);

  const checkIfUserExists = async () => {
    return await db
      .select()
      .from(currentJoinedChat)
      .where(eq(currentJoinedChat.user_id, user_id));
  };

  switch (option) {
    case "create":
      (await checkIfUserExists()).length == 0 &&
        (await db.insert(currentJoinedChat).values({
          user_id: user_id,
          last_chat_id: chat_id,
        }));
      return "The user has beed added correctly";
    case "update":
      db.update(currentJoinedChat)
        .set({ last_chat_id: chat_id })
        .where(eq(currentJoinedChat.user_id, user_id));
      return "The user has beed updated correctly";
    case "check":
      const previousChatID = await db
        .select({ chat_id: currentJoinedChat.last_chat_id })
        .from(currentJoinedChat)
        .where(eq(currentJoinedChat.user_id, user_id));
      return previousChatID[0].chat_id;
    default:
      throw new Error("The option is not valid");
  }
}

export default currentUserChat;
