import { getDataForComponentsLesson } from "./react/components";

export function getLessonForWebCourse(lessonId: string) {
  if (lessonId === "components") {
    return getDataForComponentsLesson();
  }

  throw new Error(`Could not find lessons`);
}
