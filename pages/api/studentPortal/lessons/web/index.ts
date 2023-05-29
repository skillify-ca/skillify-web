import { getLessonForReactCourse } from "./react";

export function getCourseForWebSection(courseId: string, lessonId: string) {
  if (courseId === "react") {
    return getLessonForReactCourse(lessonId);
  }
  throw new Error(`Could not find lessons`);
}
