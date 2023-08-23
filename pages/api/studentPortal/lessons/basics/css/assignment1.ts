import { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "../introduction";

export function getDataForLesson1() {
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "CSS Blog Assignment",
      },
      {
        component: "description",
        text: "Previously you made a blog using HTML but it may look very boring.",
      },
      {
        component: "description",
        text: "We are going to change that using CSS styling! You will now use CSS styling to bring your page to life!",
      },
      { component: "loom-video", videoId: "ed935cc53123419695e9f6b97f5589e9" },
    ],
    currentNode: 52,
    nextNode: 7,
    nextSlug: "javascript/lesson1",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForLesson1();

  res.status(200).json(data);
}
