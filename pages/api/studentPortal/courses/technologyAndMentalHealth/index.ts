import { NextApiRequest, NextApiResponse } from "next";
import { LessonPageData } from "../types";

function getDataForIntroductionLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Introduction",
      },
    ],
    lessonId: 1,
    lessonCount: 6,
  };
}

function getDataForModesOfTechnologyLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Modes of Technology",
      },
    ],
    lessonId: 2,
    lessonCount: 6,
  };
}

function getDataForReflectionTaskLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Reflection Task",
      },
    ],
    lessonId: 3,
    lessonCount: 6,
  };
}

function getDataForYourMentalDietLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Your Mental Diet",
      },
    ],
    lessonId: 4,
    lessonCount: 6,
  };
}

function getDataForWhenDoesTechnologyBecomeAProblemLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "When does Technology Become a Problem",
      },
    ],
    lessonId: 5,
    lessonCount: 6,
  };
}

function getDataForWhatCanYouDoLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "What Can You Do?",
      },
    ],
    lessonId: 6,
    lessonCount: 6,
  };
}

export function getLessonForTechnologyAndMentalHealthCourse(lessonId: string) {
  if (lessonId.toLocaleLowerCase() === "introduction") {
    return getDataForIntroductionLesson();
  }
  if (lessonId.toLocaleLowerCase() === "modes-of-technology") {
    return getDataForModesOfTechnologyLesson();
  }
  if (lessonId.toLocaleLowerCase() === "reflection-task") {
    return getDataForReflectionTaskLesson();
  }
  if (lessonId.toLocaleLowerCase() === "your-mental-diet") {
    return getDataForYourMentalDietLesson();
  }
  if (lessonId.toLocaleLowerCase() === "when-does-technology-become-a-problem") {
    return getDataForWhenDoesTechnologyBecomeAProblemLesson();
  }
  if (lessonId.toLocaleLowerCase() === "what-can-you-do") {
    return getDataForWhatCanYouDoLesson();
  }

  throw new Error(`Could not find lessons for ${lessonId}`);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LessonPageData>
) {
  const slug = (req.query.slug as string) || "introduction";
  const data = getLessonForTechnologyAndMentalHealthCourse(slug);

  res.status(200).json(data);
}
