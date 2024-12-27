CREATE TABLE "current_joined_chat" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"chat_id" text
);

ALTER TABLE "current_joined_chat" ADD CONSTRAINT "current_joined_chat_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;