CREATE TABLE IF NOT EXISTS "current_joined_chat" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"last_chat_id" text,
	"current_chat_id" text
);
