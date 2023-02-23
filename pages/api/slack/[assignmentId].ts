import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_SUBMIT_ASSIGNMENT;

  const { assignmentId } = req.query;

  axios
    .post(url, {
      text: `New submission for assignment ${assignmentId}`,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  try {
    return res.status(200).json({
      status: "OK",
    });
  } catch (err) {
    return res.status(400).json({
      status: err,
    });
  }
};
