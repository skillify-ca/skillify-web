import { NextApiRequest, NextApiResponse } from "next";
import { Resource } from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export function getDataForJSLesson4() {
  const resources: Resource[] = [
    {
      title: "Codecademy",
      image:
        "https://yt3.ggpht.com/a/AATXAJykVH9taajY7C7frBCb-_BCVV5HYcmstwBAyA=s900-c-k-c0xffffffff-no-rj-mo",
      link: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-arrays",
      description: "This is a deeper dive into what arrays are in Javascript",
    },
  ];
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "Arrays",
      },
      {
        component: "description",
        text: "An array can hold many values under a single name, and you can access the values by referring to an index number. This means we can group variables like cars into a single name array and use their index number to differentiate between the different cars.",
      },
      {
        component: "resource-list",
        resources,
      },
    ],
    currentNode: 41,
    nextNode: 42,
    nextSlug: "javascript/lesson5",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForJSLesson4();

  res.status(200).json(data);
}
