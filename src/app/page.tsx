import ChatContainer from "@/components/chat-container";
import ChatIDStore from "@/components/chat-id-store";
import UploadImageDialog from "@/components/upload-image-dialog/upload-image-dialog";

export default async function Home({ chat_id }: { chat_id: string }) {
  return (
    <div className="flex h-svh w-full items-center justify-center border-2 border-red-700">
      <ChatContainer />
      <ChatIDStore chat_id={chat_id} />
      <UploadImageDialog />
    </div>
  );
}

/*
 */
