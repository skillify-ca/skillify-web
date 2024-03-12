import { NextApiRequest, NextApiResponse } from "next";
import { Resource } from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export function getDataForLesson2Grid() {
  const resources: Resource[] = [
    {
      title: "CSS Grid Garden",
      image: "https://cssgridgarden.com/favicon.ico",
      link: "https://cssgridgarden.com/",
      description: "Do all levels.",
    },
    {
      title: "CSS Tricks: Grid",
      image:
        "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/12/default-social-css-tricks.png",
      link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
      description:
        "Skim through this reference guide on CSS Grid. But keep it handy when building websites.",
    },
    {
      title: "CSS Grid Layout Crash Course",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s176-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=jV8B24rSN5o",
      description: "Optional - A 30 minute video explaining CSS Grid",
    },
  ];
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "CSS Grid",
      },
      {
        component: "description",
        text: "CSS Grid is a newer property of CSS that lets developer create more complex layouts or force yourself to use a single column layout. Without Grid, you had to position elements using coordinates on the screen. Although that technique worked in the 90s, it quickly became out of date as the world started to adopt a wide variety of screen sizes. CSS Grid allows you to position different HTML elements on your screen in a dynamic way that can adjust to the size of your screen.",
      },
      {
        component: "resource-list",
        resources,
      },
      {
        component: "loom-video",
        videoId: "597c6baa5d564c91a633dd3235cd5ee8",
      },
    ],
    currentNode: 48,
    nextNode: 49,
    nextSlug: "css/lesson2-Flexbox",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForLesson2Grid();

  res.status(200).json(data);
}
