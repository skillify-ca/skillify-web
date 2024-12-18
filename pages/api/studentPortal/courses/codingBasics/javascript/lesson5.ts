import { NextApiRequest, NextApiResponse } from "next";
import { Resource } from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export function getDataForJSLesson5() {
  const resources: Resource[] = [
    {
      title: "Codecademy",
      image:
        "https://yt3.ggpht.com/a/AATXAJykVH9taajY7C7frBCb-_BCVV5HYcmstwBAyA=s900-c-k-c0xffffffff-no-rj-mo",
      link: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops",
      description: "This is a deeper dive into what loops are in Javascript",
    },
    {
      title: "Star Patterns",
      link: "/coding/JavaScript/starPatterns.zip",
      image: "/images/gold-star.png",
      description:
        "ASCII art is pretty fun to play around with. Let's get started with some star patterns!",
    },
  ];
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "Loops",
      },
      {
        component: "description",
        text: "Loops is way to allow programs to re-iterate their code while minimizing the times we copy and paste code. There are many different types of loops, but the most common are, for loops and while loops.",
      },
      {
        component: "resource-list",
        resources,
      },
    ],
    currentNode: 42,
    nextNode: 43,
    nextSlug: "js-objects",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForJSLesson5();

  res.status(200).json(data);
}
