import { getDataForIntroductionLesson } from "./introduction";

export function getLessonForBasicsCourse(lessonId: string) {
  if (lessonId === "introduction") {
    return getDataForIntroductionLesson();
  }

  throw new Error(`Could not find lessons`);
}
