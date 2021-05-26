import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const SLACK_WEBHOOK_URL =
    "https://hooks.slack.com/services/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";

  const email = req.body.email;
  const product = req.query["product"];

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      text: `Hello, ${email} signed up for ${product}!`,
    }),
  };

  fetch(SLACK_WEBHOOK_URL, options).then((response) => {
    console.log(response.status);
  });

  res.status(200).json({ email });
}
