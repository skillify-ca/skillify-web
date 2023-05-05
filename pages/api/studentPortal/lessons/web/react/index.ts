import { getDataForComponentsLesson } from "./components";

export function getLessonForReactCourse(lessonId: string) {
  if (lessonId === "components") {
    return getDataForComponentsLesson();
  }

  throw new Error(`Could not find lessons`);
}
