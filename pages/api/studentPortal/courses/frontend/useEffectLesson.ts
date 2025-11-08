import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../javascript/introduction-coding-basics";

export const getUseEffectLessonData = (): ResponseData => {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "useEffect Hook Lesson",
    },
    {
      component: "description",
      text: "Coming Soon!",
    },
  ];

  const nextSlug = "react/useeffect";
  return { lessonComponents, nextSlug, currentNode: 0, nextNode: 0 };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const lessonData = getUseEffectLessonData();
  return res.status(200).json(lessonData);
};
