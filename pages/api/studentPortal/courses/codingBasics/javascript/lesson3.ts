import { NextApiRequest, NextApiResponse } from "next";
import { Resource } from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export function getDataForJSLesson3() {
  const resources: Resource[] = [
    {
      title: "Codecademy",
      image:
        "https://yt3.ggpht.com/a/AATXAJykVH9taajY7C7frBCb-_BCVV5HYcmstwBAyA=s900-c-k-c0xffffffff-no-rj-mo",
      link: "https://www.codecademy.com/courses/introduction-to-javascript/lessons/control-flow/exercises/else-if",
      description:
        "This is a deeper dive into what conditional statements are in Javascript",
    },
    {
      title: "Temperature",
      link: "/coding/JavaScript/temperature.zip",
      image: "/images/temperature.jpeg",
      description:
        "A temperature converter problem. It gets confusing switching between Celsius and Fahrenheit",
    },
    {
      title: "Temperature Solution",
      link: "https://www.youtube.com/watch?v=PIxT77Pf3SI&t=15s",
      image: "/images/temperature.jpeg",
      description:
        "Don't watch this solution, until you've attempted the challenge above",
    },
    {
      title: "FizzBuzz",
      link: "/coding/JavaScript/JsFunctions/FizzBuzz/fizzBuzz-Practice.js",
      image: "/images/temperature.jpeg",
      description: "A basic JavaScript coding challenge",
    },
    {
      title: "FizzBuzz Solution",
      link: "/coding/JavaScript/JsFunctions/FizzBuzz/fizzBuzz-Correct.js",
      image: "/images/temperature.jpeg",
      description:
        "Don't read this solution, until you've attempted the challenge above",
    },
    {
      title: "Basketball",
      link: "/coding/JavaScript/JsFunctions/Basketball/basketball-Practice.js",
      image: "/images/basketball.jpg",
      description:
        "A problem involving calculating the score of a basketball game!",
    },
    {
      title: "Basketball Solution",
      link: "/coding/JavaScript/JsFunctions/Basketball/basketball-Correct.js",
      image: "/images/basketball.jpg",
      description:
        "Don't watch this solution, until you've attempted the challenge above",
    },
  ];
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "Conditionals",
      },
      {
        component: "description",
        text: "Conditionals allows us to create programs that can make decisions based on if expressions are true or false. This helps programmers to produce different outputs based on the input provided by the user.",
      },
      {
        component: "resource-list",
        resources,
      },
    ],
    currentNode: 39,
    nextNode: 40,
    nextSlug: "js-quiz-1",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForJSLesson3();

  res.status(200).json(data);
}
