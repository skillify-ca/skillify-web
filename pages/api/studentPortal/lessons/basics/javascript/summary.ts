import { NextApiRequest, NextApiResponse } from "next";
import {
  LessonComponentData,
  Resource,
} from "../../../../../../components/studentPortal/lessons/LessonComponent";

export function getJavaScriptSummary() {
  const resources: Resource[] = [
    {
      title: "Codecademy Iterators Lesson: High-Order Functions",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/courses/introduction-to-javascript/lessons/higher-order-functions/exercises/functions-as-data",
      description: "An introduction into high-order functions.",
    },
    {
      title: "Codecademy Iterators Lesson: Iterators",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/courses/introduction-to-javascript/lessons/javascript-iterators/exercises/for-each",
      description: "A deeper dive into iterators",
    },
    {
      title: "Codecademy Iterators Cheatsheet",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-iterators/cheatsheet",
      description:
        "Review this cheatsheet after you go through the Codecademy Lessons",
    },

    {
      title: "Free Code Camp Iterators Tutorial: Map, Filter, Reduce",
      link: "https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/",
      image: "/images/coding/units/javascript/freeCodeCamp.png",
      description: "Focus on Map and Filter. Ignore Reduce",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Iterators",
    },
    {
      component: "description",
      text: "Iterators are objects that have a sequence where there are 2 questions being answered: If there is an element next? If so, what is it? This is what we call an iterator protocol. If these questions are answered then we are dealing with an iterator. With iterators we can use iterator methods that are very powerful and versatile. These methods are .map() and .filter().",
    },
    {
      component: "resource-list",
      resources,
    },
  ];

  return lessonComponents;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = getJavaScriptSummary();

  res.status(200).json(data);
}
