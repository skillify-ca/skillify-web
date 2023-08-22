import { NextApiRequest, NextApiResponse } from "next";
import {
  LessonComponentData,
  Resource,
} from "../../../../../../components/studentPortal/lessons/LessonComponent";

export type Lesson1ResponseData = {
  lessonComponents: LessonComponentData[];
  // Other properties specific to Lesson 1 data
};

export function getDataForLesson1() {
  const resources: Resource[] = [
    {
      title: "W3Schools CSS tutorial",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
      link: "https://www.w3schools.com/css/default.asp",
      description: "Start at the beginning and stop at CSS Overflow.",
    },
    {
      title: "Codecademy CSS Course",
      image: "/images/ResourceRow.svg",
      link: "https://www.codecademy.com/learn/learn-css",
      description: "Complete all levels.",
    },
  ];

  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "CSS",
    },
    {
      component: "description",
      text: "CSS stands for cascading style sheets. It's another language that you need to learn that has different rules and keywords compared to HTML. In this lesson you will learn about different styles that you can apply to your HTML elements.",
    },
    {
      component: "resource-list",
      resources,
    },
    {
      component: "loom-video",
      videoId: "13bf6c0abba840eba25daf94e332244f",
    },
    {
      component: "loom-video",
      videoId: "587b32878fe84810b9762594297c9a69",
    },
  ];

  // Additional properties specific to Lesson 1 data
  const additionalLesson1Data = {
    // Add any other properties here if needed
  };

  return { lessonComponents, ...additionalLesson1Data };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Lesson1ResponseData>
) {
  const data = getDataForLesson1();

  res.status(200).json(data);
}
