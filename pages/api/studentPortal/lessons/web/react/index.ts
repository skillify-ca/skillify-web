import { getDataForComponentsLesson } from "./components";
import { getGithubLessonData } from "./github";
import { getPropsLessonData } from "./props";
import { getTailwindColourStylingLessonData } from "./tailwindcss-colourstyling";
import { getTailwindGridFlexLessonData } from "./tailwindcss-gridflex";
import { getUseStateLessonData } from "./useState";

export function getLessonForReactCourse(lessonId: string) {
  if (lessonId === "React/components") {
    return getDataForComponentsLesson();
  } else if (lessonId === "React/github") {
    return getGithubLessonData();
  } else if (lessonId === "React/props") {
    return getPropsLessonData();
  } else if (lessonId === "React/tailwindcss-colourstyling") {
    return getTailwindColourStylingLessonData();
  } else if (lessonId === "React/tailwindcss-gridflex") {
    return getTailwindGridFlexLessonData();
  } else if (lessonId === "React/useState") {
    return getUseStateLessonData();
  }
  
  console.log("lessonId", lessonId);
  // throw new Error(`Could not find lessons for ${lessonId}`);
}
