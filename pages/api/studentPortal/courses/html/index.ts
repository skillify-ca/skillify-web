import { NextApiRequest, NextApiResponse } from "next";
import { getDataForHTMLAssignment } from "../html/assignment1";
import { getLessonComponentsForHTML1Data } from "../html/lesson1";
import { getLessonComponentsForHTMLQuizData } from "../html/quiz1";
import { ResponseData } from "../types";

export function getLessonForHTMLCourse(lessonId: string) {
  if (lessonId.toLocaleLowerCase() === "html-introduction") {
    return getLessonComponentsForHTML1Data();
  } else if (lessonId.toLocaleLowerCase() === "html-quiz-1") {
    return getLessonComponentsForHTMLQuizData();
  } else if (lessonId.toLocaleLowerCase() === "html-assignment-1") {
    return getDataForHTMLAssignment();
  }
  
  throw new Error(`Could not find lessons for ${lessonId}`);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const slug = (req.query.slug as string) || "introduction";
  const data = getLessonForHTMLCourse(slug);

  res.status(200).json(data);
}
