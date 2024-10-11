import { getDataForCSSAssignment } from "./css/assignment1";
import { getDataForCSSLesson1 } from "./css/lesson1";
import { getDataForLesson2Flexbox } from "./css/lesson2-Flexbox";
import { getDataForLesson2Grid } from "./css/lesson2-Grid";
import { getLessonComponentsForCSSQuizData } from "./css/quiz1";
import { getDataForHTMLAssignment } from "./html/assignment1";
import { getLessonComponentsForHTML1Data } from "./html/lesson1";
import { getLessonComponentsForHTMLQuizData } from "./html/quiz1";
import { getDataForIntroductionLesson } from "./introduction";
import { getDataForJSIntroduction } from "./javascript/introduction";
import { getDataForJSLesson1 } from "./javascript/lesson1";
import { getDataForJSLesson2 } from "./javascript/lesson2";
import { getDataForJSLesson3 } from "./javascript/lesson3";
import { getDataForJSLesson4 } from "./javascript/lesson4";
import { getDataForJSLesson5 } from "./javascript/lesson5";
import { getDataForJSLesson6 } from "./javascript/lesson6";
import { getDataForJSLesson7 } from "./javascript/lesson7";
import { getJSNBAAssignment } from "./javascript/nba-assignment";
import { getJSPokemonAssignment } from "./javascript/pokemon-assignment";
import { getPortfolioAssignment } from "./javascript/portfolio";
import { getLessonComponentsForJSQuiz1Data } from "./javascript/quiz1";
import { getDataForJSQuiz2 } from "./javascript/quiz2";
import { getJavaScriptSummary } from "./javascript/summary";

export function getLessonForBasicsCourse(lessonId: string) {
  if (lessonId.toLocaleLowerCase() === "introduction") {
    return getDataForIntroductionLesson();
  } else if (lessonId.toLocaleLowerCase() === "html-1") {
    return getLessonComponentsForHTML1Data();
  } else if (lessonId.toLocaleLowerCase() === "html-quiz-1") {
    return getLessonComponentsForHTMLQuizData();
  } else if (lessonId.toLocaleLowerCase() === "html-assignment-1") {
    return getDataForHTMLAssignment();
  } else if (lessonId.toLocaleLowerCase() === "css-introduction") {
    return getDataForCSSLesson1();
  } else if (lessonId.toLocaleLowerCase() === "css-grid") {
    return getDataForLesson2Grid();
  } else if (lessonId.toLocaleLowerCase() === "css-flexbox") {
    return getDataForLesson2Flexbox();
  } else if (lessonId.toLocaleLowerCase() === "css-quiz") {
    return getLessonComponentsForCSSQuizData();
  } else if (lessonId.toLocaleLowerCase() === "css-assignment") {
    return getDataForCSSAssignment();
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

  console.log("lessonId", lessonId);
  throw new Error(`Could not find lessons for ${lessonId}`);
}
