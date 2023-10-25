import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const token = process.env.NEXT_PUBLIC_SLACK_BOT_TOKEN;
    const apiUrl = "https://slack.com/api/chat.postMessage";
    const channel = "C03ATLKC831";
    const text = req.body.text; // Assuming you send the "text" in the request body

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const data = {
      channel: channel,
      text: text,
    };

    try {
      const response = await axios.post(apiUrl, data, { headers });
      // Check if the response is successful
      if (response.data.ok) {
        res.status(200).json(response.data);
      } else {
        res.status(400).json(response.data);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
