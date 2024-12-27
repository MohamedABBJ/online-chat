import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { currentJoinedChat } from "../../drizzle/schema";
import client from "./client";

function currentUserChat({
  user_id,
  chat_id,
  option,
}: {
  user_id: string;
  chat_id: string | "none";
  option: "create" | "update";
}) {
  const db = drizzle(client);

  const checkIfUserExists = async () => {
    return await db
      .select()
      .from(currentJoinedChat)
      .where(eq(currentJoinedChat.user_id, user_id));
  };

  if (option == "create") {
    db.insert(currentJoinedChat).values({
      user_id: user_id,
      last_chat_id: chat_id,
    });
    return "The user has beed added correctly";
  }
  if (option == "update") {
    db.update(currentJoinedChat)
      .set({ last_chat_id: chat_id })
      .where(eq(currentJoinedChat.user_id, user_id));
    return "The user has beed updated correctly";
  }

  return 'The option must be "create" or "update"';
}

export default currentUserChat;
