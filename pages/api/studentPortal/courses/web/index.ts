import { getLessonForReactCourse } from "./react";

export function getCourseForWebSection(courseId: string, lessonId: string) {
  console.log("courseId");
  console.log(courseId);
console.log(lessonId);

  if (courseId.toLowerCase() === "react") {
    return getLessonForReactCourse(lessonId);
  }
  throw new Error(`Could not find lessons for ${courseId} ${lessonId}`);
}
