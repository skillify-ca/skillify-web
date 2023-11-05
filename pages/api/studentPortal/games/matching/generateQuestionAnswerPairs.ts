import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { ChatCompletion, ChatCompletionMessageParam } from "openai/resources";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

export default async function generateQuestionAnswerPairs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt: userPrompt } = req.query;

  // generate from open ai api
  const data = await runConversation(userPrompt as string);
  res.status(200).json({ data: JSON.parse(data) });
}

async function runConversation(userPrompt: string) {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "user",
      content:
        "Generate a list of 10 question and answer pairs. The questions should be simple definitions.\n" +
        "The answers should be the term that matches to its definition.\n" +
        `The questions should be about ${userPrompt}.\n` +
        "Do not use the term itself inside of the definition.\n" +
        "Output the list as a JSON array.",
    },
  ];

  const response: ChatCompletion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: messages,
  });

  return response.choices[0].message.content;
}
