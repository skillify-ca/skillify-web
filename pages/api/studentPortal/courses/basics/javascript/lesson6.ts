import { NextApiRequest, NextApiResponse } from "next";
import {
  LessonComponentData,
  Resource,
} from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export function getDataForLesson6() {
  const resources: Resource[] = [
    {
      title: "Codecademy Lesson: Objects",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/courses/introduction-to-javascript/lessons/objects/exercises/intro",
      description:
        "This is an introduction into what objects are in Javascript",
    },
    {
      title: "Codecademy Lesson: Objects",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/courses/introduction-to-javascript/lessons/advanced-objects/exercises/adv-intro",
      description: "This is a deeper dive into what objects are in Javascript",
    },
    {
      title: "Codecademy Objects: Cheatsheet",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects/cheatsheet",
      description: "This is a deeper dive into what objects are in Javascript",
    },
    {
      title: "Find the Plant",
      link: "/coding/JavaScript/findPlant.zip",
      image: "/images/plant.png",
      description:
        "There are so many plants in our eco-system! Give the functiuon the name of the plant and find out its description",
    },
    {
      title: "Find the Plant Solution",
      link: "https://www.youtube.com/watch?v=zbwqA9QJaRc&t=31s",
      image: "/images/plant.png",
      description:
        "Don't watch the solution until you've attempted the challenge above",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Objects",
    },
    {
      component: "description",
      text: "Objects are a data type that allows us to store many properties under one variable. For example, if we wanted to store a variable for a human. We know that humans have many properties/feature that make them unique such as height, weight, eye-colour, and much more. By storing these features under a data type of an object allows us to have access to the data fields that make a human such as their height.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];

  const data: ResponseData = {
    lessonComponents: lessonComponents,
    currentNode: 43,
    nextNode: 44,
    nextSlug: "javascript/lesson7",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForLesson6();

  res.status(200).json(data);
}
