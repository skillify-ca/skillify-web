import { LessonPageData } from "./types";

export function getDataForHelloWorldAiStudioLesson(): LessonPageData {
    return {
      lessonComponents: [
        {
          component: "title",
          text: "Hello World in AI Studio",
        },
        {
          component: "description",
          text: `Now that you have setup your tools, you can start coding your first project in AI Studio.`,
        },
        {
          component: "checkboxForm",
          title: "Completion Criteria",
          items: [
            {
              label: "I have created a simple Hello World project in GoogleAI Studio.",
              required: true,
            },
          ],
          url: "/studentPortal/courses/vibeCoding/deploy-to-vercel",
  
        },
      ],
      lessonId: 2,
      lessonCount: 8,
    };
  }