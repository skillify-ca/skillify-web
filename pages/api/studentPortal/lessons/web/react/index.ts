import { getDataForComponentsLesson } from "./components";
import { getGithubLessonData } from "./github";

export function getLessonForReactCourse(lessonId: string) {
  if (lessonId === "components") {
    return getDataForComponentsLesson();
  } else if (lessonId === "github") {
    return getGithubLessonData();
  }

  throw new Error(`Could not find lessons`);
}
