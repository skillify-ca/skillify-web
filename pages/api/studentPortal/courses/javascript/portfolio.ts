import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../types";

export function getPortfolioAssignment(): ResponseData {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Portfolio Assignment",
    },
    {
      component: "description",
      text: "Objective: Create a portfolio website using HTML, CSS, and JavaScript. This website will be a showcase of your projects, skills, and contact information.",
    },
  ];
  return { lessonComponents, currentNode: 0, nextNode: 0, nextSlug: "" };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = getPortfolioAssignment();

  res.status(200).json(data);
}
