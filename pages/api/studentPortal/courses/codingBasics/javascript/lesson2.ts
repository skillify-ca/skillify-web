import { NextApiRequest, NextApiResponse } from "next";
import { Resource } from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export function getDataForJSLesson2() {
  const resources: Resource[] = [
    {
      title: "Codecademy",
      image:
        "https://yt3.ggpht.com/a/AATXAJykVH9taajY7C7frBCb-_BCVV5HYcmstwBAyA=s900-c-k-c0xffffffff-no-rj-mo",
      link: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions",
      description:
        "This is a deeper dive into what functions are in Javascript",
    },
    {
      title: "Home Equity Calculator",
      link: "/coding/JavaScript/homeEquity.zip",
      image: "/images/home.png",
      description:
        "A home equity calculator to know how much of the house you actually own over your mortgage period",
    },

    {
      title: "Running Pace Calculator",
      link: "/coding/JavaScript/runningPaceCalculator.zip",
      image: "/images/runnerClipArt.png",
      description:
        "A running pace calculator to help determine your average per mile pace during a race",
    },
  ];
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "Functions",
      },
      {
        component: "description",
        text: "Functions is the foundation of programming. Functions allows us to group a specific process and allowing the process to take in an input in order to produce an output. The input for a function would be considered their parameters whereas the output would be the return statement.",
      },
      {
        component: "resource-list",
        resources,
      },
    ],
    currentNode: 38,
    nextNode: 39,
    nextSlug: "javascript/lesson3",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForJSLesson2();

  res.status(200).json(data);
}
