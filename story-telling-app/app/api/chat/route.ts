import { streamText } from "ai";
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const model = createOpenAICompatible({
    baseURL: "http://127.0.0.1:5000/v1",
    name: "local-model"
})

export const runtime = "edge";

export async function POST(req: Request) {
    const {messages} = await req.json();

    console.log(messages);

    const response = streamText({
        model: model("placeholder-model-llm-name"),
        messages: [
            {
                role: "system",
                content: `You are a professional storyteller who has been hired to write a series of short stories for a new anthology. The stories should be captivating, imaginative, and thought-provoking. They should explore a variety of themes and genres, from science fiction and fantasy to mystery and romance. Each story should be unique and memorable, with compelling characters and unexpected plot twists.`,
            },
            ...messages,
        ],
    });

    return response.toDataStreamResponse();
}
