import { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "../introduction";

export function getDataForAssignment() {
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "HTML Blog Assignment",
      },
      {
        component: "description",
        text: "You are now ready to complete your very first coding assignment!",
      },
    ],
    currentNode: 4,
    nextNode: 5,
    nextSlug: "css/lesson1",
  };

  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data: ResponseData = getDataForAssignment();

  res.status(200).json(data);
}
