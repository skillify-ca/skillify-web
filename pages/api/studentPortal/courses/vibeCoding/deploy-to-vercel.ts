
import { LessonPageData } from "./types";

export function getDataForDeployToVercelLesson(): LessonPageData {
    return {
      lessonComponents: [
        {
          component: "title",
          text: "Deploying your app to Vercel",
        },
        {
          component: "description",
          text: "Now that you have setup your tools, you can deploy your app to Vercel.",
        },
        {
          component: "image",
          url: "/images/lessons/vercel.png",
        },
        {
          component: "checkboxForm",
          title: "Completion Criteria",
          items: [
            {
              label: "I have deployed my app to Vercel and I have a link to my app.",
              required: true,
            },
          ],
          url: "/studentPortal/courses/vibeCoding/showing-list-and-details",
        },
      ],
      lessonId: 2,
      lessonCount: 7,
    };
  }