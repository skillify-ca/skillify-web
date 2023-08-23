import { NextApiRequest, NextApiResponse } from "next";
import { Resource } from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export function getDataForLesson2Flexbox() {
  const resources: Resource[] = [
    {
      title: "CSS Flexbox Froggy",
      image:
        "https://www.saashub.com/images/app/service_logos/82/fc3339facb56/large.png?1569287111",
      link: "https://flexboxfroggy.com/",
      description: "Do all levels.",
    },

    {
      title: "CSS Tricks: Flexbox",
      image:
        "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/12/default-social-css-tricks.png",
      link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      description:
        "Skim through this reference guide on CSS Flexbox. But keep it handy when building websites.",
    },
    {
      title: "CSS Tricks: Flexbox",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s176-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
      description: "Optional - A 30 minute video explaining CSS Flexbox.",
    },
  ];
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "CSS Flexbox",
      },
      {
        component: "description",
        text: "CSS Flexbox is another new property of CSS. You can turn any <div> element into a flexbox using the 'display: flex' property. By using different flex properties you can tell the div how you want it to arrange it's children. Combining Flexbox with Grid will allow you to build the most advanced layouts that you can imagine on the internet.",
      },
      {
        component: "resource-list",
        resources,
      },
      {
        component: "loom-video",
        videoId: "3ccdfc795e2648b697356e15fa1e67f3",
      },
    ],
    currentNode: 49,
    nextNode: 51,
    nextSlug: "css/quiz1",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForLesson2Flexbox();

  res.status(200).json(data);
}
