import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const SLACK_WEBHOOK_URL =
    "https://hooks.slack.com/services/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";

  const email = req.body.email;
  const product = req.query["product"];

  await axios.post(SLACK_WEBHOOK_URL, {
    text: `Hello, ${email} signed up for ${product}!`,
  });
  res.status(200).json({ name: "John Doe" });
}
