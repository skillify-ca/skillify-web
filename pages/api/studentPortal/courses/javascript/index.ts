import { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "../types";
import { getDataForJSIntroduction } from "./introduction";
import { getDataForIntroductionLesson } from "./introduction-coding-basics";
import { getDataForJSLesson1 } from "./lesson1";
import { getDataForJSLesson2 } from "./lesson2";
import { getDataForJSLesson3 } from "./lesson3";
import { getDataForJSLesson4 } from "./lesson4";
import { getDataForJSLesson5 } from "./lesson5";
import { getDataForJSLesson6 } from "./lesson6";
import { getDataForJSLesson7 } from "./lesson7";
import { getJSNBAAssignment } from "./nba-assignment";
import { getJSPokemonAssignment } from "./pokemon-assignment";
import { getPortfolioAssignment } from "./portfolio";
import { getLessonComponentsForJSQuiz1Data } from "./quiz1";
import { getDataForJSQuiz2 } from "./quiz2";
import { getJavaScriptSummary } from "./summary";

export function getLessonForJavaScriptCourse(lessonId: string) {
  if (lessonId.toLocaleLowerCase() === "introduction") {
    return getDataForIntroductionLesson();
  } else if (lessonId.toLocaleLowerCase() === "js-introduction") {
    return getDataForJSIntroduction();
  } else if (lessonId.toLocaleLowerCase() === "js-variables") {
    return getDataForJSLesson1();
  } else if (lessonId.toLocaleLowerCase() === "js-functions") {
    return getDataForJSLesson2();
  } else if (lessonId.toLocaleLowerCase() === "js-conditionals") {
    return getDataForJSLesson3();
  } else if (lessonId.toLocaleLowerCase() === "js-quiz-1") {
    return getLessonComponentsForJSQuiz1Data();
  } else if (lessonId.toLocaleLowerCase() === "js-arrays") {
    return getDataForJSLesson4();
  } else if (lessonId.toLocaleLowerCase() === "js-loops") {
    return getDataForJSLesson5();
  } else if (lessonId.toLocaleLowerCase() === "js-objects") {
    return getDataForJSLesson6();
  } else if (lessonId.toLocaleLowerCase() === "js-iterators") {
    return getDataForJSLesson7();
  } else if (lessonId.toLocaleLowerCase() === "js-quiz-2") {
    return getDataForJSQuiz2();
  } else if (lessonId.toLocaleLowerCase() === "js-pokemon-assignment") {
    return getJSPokemonAssignment();
  } else if (lessonId.toLocaleLowerCase() === "js-nba-assignment") {
    return getJSNBAAssignment();
  } else if (lessonId.toLocaleLowerCase() === "js-summary") {
    return getJavaScriptSummary();
  } else if (lessonId.toLocaleLowerCase() === "js-portfolio-assignment") {
    return getPortfolioAssignment();
  }

  throw new Error(`Could not find lessons for ${lessonId}`);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const slug = (req.query.slug as string) || "introduction";
  const data = getLessonForJavaScriptCourse(slug);

  res.status(200).json(data);
}
