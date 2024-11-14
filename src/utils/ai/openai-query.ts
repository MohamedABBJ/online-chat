"use server";
import OpenAI from "openai";

const openAIQuery = async ({ message }: { message: string }) => {
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });
  return completion.choices[0].message.content;
};

export default openAIQuery;
