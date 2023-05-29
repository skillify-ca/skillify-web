import { getLessonForReactCourse } from "./react";

export function getCourseForWebSection(courseId: string, lessonId: string) {
  if (courseId === "react") {
    return getLessonForReactCourse(lessonId);
  } else if (courseId === "graphql") {
    // return getLessonForGraphQLCourse(lessonId) function once complete
    return null;
  }

  throw new Error(`Could not find lessons`);
}
