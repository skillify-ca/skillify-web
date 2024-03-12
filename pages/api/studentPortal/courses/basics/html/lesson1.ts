import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  
  const lessonComponents = getLessonComponentsForHTML1()
  const data: ResponseData = {
    lessonComponents,
    currentNode: 2,
    nextNode: 3,
    nextSlug: "html/quiz1",
  };
  res.status(200).json(data);
}

export function  getLessonComponentsForHTML1() {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "HTML Lesson",
    },
    {
      component: "description",
      text:
        "HTML is a basic language that all web pages are built on top of. HTML stands for Hyper Text Markup Language. Just like any other language, HTML is made up of a limited number of words that mean different things. You will gain experience with all the possible HTML elements over time.",
    },
    {
      component: "video",
      url: "https://www.loom.com/embed/ae31ff80dcc54633875fd648cfcf6cac",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "W3Schools HTML tutorial",
          description:
            "A good starting tutorial is the W3Schools website. Start at the beginning and stop after you complete the Lists section.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
          link: "https://www.w3schools.com/html/default.asp",
        },
      ],
    },
  ];

  return lessonComponents
}