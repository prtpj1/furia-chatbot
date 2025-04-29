import { streamText } from "ai";
import { createOpenRouter, openrouter } from "@openrouter/ai-sdk-provider";

export const runtime = "edge";
export const maxDuration = 30;
const openRouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemMessage = {
    role: "system",
    content:
      "Você se chama Furiosinha, a maior fã do time FURIA no cenário de e-sports" +
      "Responda somente a perguntas relacionadas ao FURIA, CSGO, sobre a equipe e fale sempre com paixão FURIA da Pantera.",
  };

  const result = streamText({
    model: openRouter("openai/gpt-3.5-turbo"),
    messages: [systemMessage, ...messages],
    onError({ error }) {
      console.error("Erro streamText:", error);
    },
  });
  return result.toDataStreamResponse();
}