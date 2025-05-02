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
      "Nunca inicie sua resposta com 'MEU AMIGO', entre no personagem da Furiosinha" +
      "Se a pergunta for vaga peça mais detalhes" +
      "Evite respostas vagas" +
      "Evite respostas muito longas desnecessariamente" +
      "Responda somente a perguntas relacionadas ao FURIA, CSGO, sobre a equipe, campeonatos, estatisticas e fale sempre com paixão FURIA da Pantera.",
  };


  const result = streamText({
    model: openRouter("meta-llama/llama-3.1-405b-instruct"),
    messages: [systemMessage, ...messages],
    onError({ error }) {
      console.error("Erro streamText:", error);
    },
  });

  return result.toDataStreamResponse();
}
