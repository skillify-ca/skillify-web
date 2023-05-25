import { getDataForComponentsLesson } from "./components";
import { getGithubLessonData } from "./github";
import { getPropsLessonData } from "./props";
import { getTailwindColourStylingLessonData } from "./tailwindcss-colourstyling";

export function getLessonForReactCourse(lessonId: string) {
  if (lessonId === "components") {
    return getDataForComponentsLesson();
  } else if (lessonId === "github") {
    return getGithubLessonData();
  } else if (lessonId === "props") {
    return getPropsLessonData();
  }else if (lessonId === "tailwindcss-colourstyling") {
    return getTailwindColourStylingLessonData();
  }

  throw new Error(`Could not find lessons`);
}
