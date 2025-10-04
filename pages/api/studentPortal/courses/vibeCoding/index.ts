import { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "../codingBasics/introduction";
import { getDataForDeployToVercelLesson } from "./deploy-to-vercel";
import { getDataForSetupToolsLesson } from "./setup-tools";

export function getLessonForVibeCodingCourse(lessonId: string) {
  console.log("lessonId", lessonId);
  if (lessonId.toLocaleLowerCase() === "setup-tools") {
    return getDataForSetupToolsLesson();
  }
  if (lessonId.toLocaleLowerCase() === "deploy-to-vercel") {
    return getDataForDeployToVercelLesson();
  }

  throw new Error(`Could not find lessons for ${lessonId}`);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const slug = (req.query.slug as string) || "setup-tools";
  const data = getLessonForVibeCodingCourse(slug);

  res.status(200).json(data);
}
