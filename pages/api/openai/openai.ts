import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const openai = new OpenAI(process.env.OPENAI_KEY);

  try {
    const response = await openai.createCompletion({
      engine: "text-davinci-002",
      prompt: req.body.prompt,
      max_tokens: 60,
    });

    res.status(200).json({ text: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
