import { LessonPageData } from "../types";

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
          component: "video",
          url: "https://firebasestorage.googleapis.com/v0/b/math-champ-b7e77.appspot.com/o/vibeCoding%2Fai-studio-hello-world.mov?alt=media"
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