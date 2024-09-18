import { customType, pgTable, serial, text } from "drizzle-orm/pg-core";

const chatTableHandler = ({ chat_id }: { chat_id: string }) => {
  const customMessageStatusType = customType<{
    data: "sent" | "deleted";
  }>({
    dataType() {
      return "sent";
    },
  });

  const chatTable = pgTable(`chat-${chat_id}`, {
    id: serial("id").primaryKey(),
    user_message_id: text("user_message_id").notNull(),
    message: text("user_id").notNull(),
    status: customMessageStatusType("user_id").notNull().default("sent"),
  });

  return chatTable;
};

export default chatTableHandler;
