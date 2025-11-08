import { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "../types";
import { getDataForCSSAssignment } from "./assignment1";
import { getDataForCSSLesson1 } from "./lesson1";
import { getDataForLesson2Flexbox } from "./lesson2-Flexbox";
import { getDataForLesson2Grid } from "./lesson2-Grid";
import { getLessonComponentsForCSSQuizData } from "./quiz1";

export function getLessonForCSSCourse(lessonId: string) {
  if (lessonId.toLocaleLowerCase() === "css-introduction") {
    return getDataForCSSLesson1();
  } else if (lessonId.toLocaleLowerCase() === "css-grid") {
    return getDataForLesson2Grid();
  } else if (lessonId.toLocaleLowerCase() === "css-flexbox") {
    return getDataForLesson2Flexbox();
  } else if (lessonId.toLocaleLowerCase() === "css-quiz") {
    return getLessonComponentsForCSSQuizData();
  } else if (lessonId.toLocaleLowerCase() === "css-assignment") {
    return getDataForCSSAssignment();
  }
  
  throw new Error(`Could not find lessons for ${lessonId}`);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const slug = (req.query.slug as string) || "introduction";
  const data = getLessonForCSSCourse(slug);

  res.status(200).json(data);
}
