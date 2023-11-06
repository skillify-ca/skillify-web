import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { ChatCompletion, ChatCompletionMessageParam } from "openai/resources";

const openai = new OpenAI({
  apiKey: process.env["NEXT_PUBLIC_OPENAI_API_KEY"],
});

export default async function generateQuestionAnswerPairs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt: userPrompt } = req.query;

  // generate from open ai api
  const data = await runConversation(userPrompt as string);
  res.status(200).json({ data });
}

async function runConversation(userPrompt: string) {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "user",
      content:
        "Generate a list of 10 question and answer pairs. The questions should be simple definitions.\n" +
        "The answers should be the term that matches to its definition.\n" +
        `The questions should be about ${userPrompt}.\n` +
        "Do not use the term itself inside of the definition.\n",
    },
  ];

  const functions = [
    {
      name: "generate_question_answer_pairs",
      description:
        "Generate question and answer pairs for an educational matching game.",
      parameters: {
        type: "object",
        properties: {
          data: {
            type: "array",
            items: {
              type: "object",
              properties: {
                question: {
                  type: "string",
                },
                answer: {
                  type: "string",
                },
              },
              required: ["question", "answer"],
            },
          },
        },
      },
    },
  ];

  const response: ChatCompletion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: messages,
    functions: functions,
  });

  const responseMessage = response.choices[0].message;
  if (responseMessage.function_call) {
    const result = JSON.parse(responseMessage.function_call.arguments).data;
    console.log(result);
    return result;
  } else {
    return null;
  }
}
