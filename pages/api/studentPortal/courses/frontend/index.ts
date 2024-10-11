import { getTailwindAssignmentData } from "./assignment1Data";
import { getComponentsAssignmentData } from "./assignment2Data";
import { getDataForComponentsLesson } from "./components";
import { getGithubLessonData } from "./github";
import { getIntroToWebDevLessonData } from "./introduction";
import { getPropsLessonData } from "./props";
import { getTailwindColourStylingLessonData } from "./tailwindcss-colourstyling";
import { getTailwindGridFlexLessonData } from "./tailwindcss-gridflex";
import { getUseEffectLessonData } from "./useEffectLesson";
import { getUseStateLessonData } from "./useState";
import { getVercelLessonData } from "./vercel";

export function getLessonForReactCourse(lessonId: string) {
  if (lessonId === "introduction") {
    return getIntroToWebDevLessonData();
  } else if (lessonId === "components-lesson") {
    return getDataForComponentsLesson();
  } else if (lessonId === "github") {
    return getGithubLessonData();
  } else if (lessonId === "vercel") {
    return getVercelLessonData();
  } else if (lessonId === "tailwindAssignment") {
    return getTailwindAssignmentData();
  } else if (lessonId === "props-lesson") {
    return getPropsLessonData();
  } else if (lessonId === "tailwindcss-colourstyling") {
    return getTailwindColourStylingLessonData();
  } else if (lessonId === "tailwindcss-gridflex") {
    return getTailwindGridFlexLessonData();
  } else if (lessonId === "useState-lesson") {
    return getUseStateLessonData();
  } else if (lessonId === "useEffect-lesson") {
    return getUseEffectLessonData();
  } else if (lessonId === "componentsAssignment") {
    return getComponentsAssignmentData();
  }

  console.log("lessonId", lessonId);
  // throw new Error(`Could not find lessons for ${lessonId}`);
}
