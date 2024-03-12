import { NextApiRequest, NextApiResponse } from "next";
import { Resource } from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export function getDataForLesson1() {
  const resources: Resource[] = [
    {
      title: "Codecademy",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/courses/introduction-to-javascript/lessons/variables/exercises/intro-variables",
      description:
        "This is a deeper dive into what variables are in Javascript",
    },
    {
      title: "Coding Challenge: Greetings",
      link: "/coding/JavaScript/greetings.zip",
      image: "/images/greetings.png",
      description: "A practice problem using strings.",
    },
    {
      title: "Coding Challenge: Greetings Solution",
      link: "https://www.youtube.com/watch?v=W-kkyPEAWXc&t=32s",
      image: "/images/greetings.png",
      description:
        "Don't watch this video until you've attempted the challenge above.",
    },
  ];
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "Variables",
      },
      {
        component: "description",
        text: "Variables help us store values and perform operations on numbers and letters. There are lots of different types of variables but two important ones are numbers and strings (letters)",
      },
      {
        component: "resource-list",
        resources,
      },
    ],
    currentNode: 8,
    nextNode: 38,
    nextSlug: "javascript/lesson2",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForLesson1();

  res.status(200).json(data);
}
