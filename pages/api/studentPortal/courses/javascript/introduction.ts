import { NextApiRequest, NextApiResponse } from "next";
import { Resource } from "../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../types";

export function getDataForJSIntroduction() {
  const resources: Resource[] = [
    {
      title: "Grasshopper",
      link: "https://grasshopper.app/",
      image:
        "https://grasshopper.app/assets/static/images/home-touts/adventure__journey.svg",
      description: "A mobile application with Javascript challenges",
    },
    {
      title: "Code HS",
      link: "https://codehs.com/textbook/introjs_textbook/",
      image: "https://codehs.com/static/img/logo.png",
      description:
        "Intro to Javascript Textbook. Skip anything to do with graphics or animations.",
    },
    {
      title: "Codecademy JS Course",
      link: "https://www.codecademy.com/learn/introduction-to-javascript",
      image:
        "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?crop=edges&fit=crop&h=630&rect=375%2C0%2C2256%2C1412&w=1200",
      description: "An online course introducing you to Javascript",
    },
  ];
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "JavaScript Introduction",
      },
      {
        component: "description",
        text: "JavaScript is yet another language that you need to learn. This lesson will teach you the main concepts of JavaScript.",
      },
      {
        component: "resource-list",
        resources,
      },
    ],
    currentNode: 7,
    nextNode: 8,
    nextSlug: "js-variables",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForJSIntroduction();

  res.status(200).json(data);
}
