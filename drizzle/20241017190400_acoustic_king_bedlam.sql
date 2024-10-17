CREATE SCHEMA "online_chat";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "oAuthAccounts" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "private_chat" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text,
	"message" text,
	"chat_id" text,
	"status" text DEFAULT 'sent' NOT NULL,
	"reply" text DEFAULT 'none'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "public_chat" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text,
	"message" text,
	"status" text DEFAULT 'sent' NOT NULL,
	"reply" text DEFAULT 'none'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_friends" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"friend_id" text NOT NULL,
	"chat_id" text,
	"request_state" text DEFAULT 'pending' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text DEFAULT 'undefined',
	"image" text DEFAULT 'undefined',
	"type" text DEFAULT 'oAuthUser'
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "oAuthAccounts" ADD CONSTRAINT "oAuthAccounts_userId_users_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_userId_users_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_friend_id_users_user_id_fk" FOREIGN KEY ("friend_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
