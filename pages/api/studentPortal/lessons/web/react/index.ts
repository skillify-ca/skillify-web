import { getDataForComponentsLesson } from "./components";
import { getGithubLessonData } from "./github";
import { getPropsLessonData } from "./props";

export function getLessonForReactCourse(lessonId: string) {
  if (lessonId === "components") {
    return getDataForComponentsLesson();
  } else if (lessonId === "github") {
    return getGithubLessonData();
  } else if (lessonId === "props") {
    return getPropsLessonData();
  }

  throw new Error(`Could not find lessons`);
}
