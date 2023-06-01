import type { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";

export type ResponseData = {
  lessonComponents: LessonComponentData[];
  currentNode: number;
  nextNode: number;
  nextSlug: string;
};

export function getDataForIntroductionLesson() {
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "Introduction",
      },
      {
        component: "description",
        text:
          "Welcome to the Skillify learning path! Let me start by congratulating you on this journey. You are learning an in-demand skill that will future-proof your career. Just like learning to play the guitar, coding is a skill that requires practice, but mastering a few key competencies will unlock high-paying and remote career opportunities from all over the world.  \n\nMake sure you download or sign up for these programs to start. Message Vithushan if you're having trouble.",
      },
      {
        component: "video",
        url: "https://www.loom.com/embed/e365ed8ce69942ad8caa79da950a030e",
      },
      {
        component: "resource-list",
        resources: [
          {
            title: "Visual Studio Code",
            description:
              "Just like how Microsoft Word is a text editor for editing text, Visual Studio Code is a code editor for editing code and also made by Microsoft.",
            link: "https://code.visualstudio.com/",
            image: "/images/studentPortal/basics/introduction/vs-code.png",
          },
          {
            title: "Grasshopper",
            description:
              "A game with different challenges. You won't deeply understand coding from this game, but you will start to get your head in the coder mindset which is based on problem solving.",
            link: "https://grasshopper.app/",
            image: "/images/studentPortal/basics/introduction/grasshopper.svg",
          },
          {
            title: "Codecademy",
            description:
              "A free resource to learn HTML, CSS and JavaScript. Start working through the courses and ask for help when you get stuck.",
            link: "https://www.codecademy.com/learn/learn-html",
            image: "/images/studentPortal/basics/introduction/codecademy.png",
          },
        ],
      },
    ],
    currentNode: 1,
    nextNode: 2,
    nextSlug: "html/lesson1",
  };

  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getLessonDataForIntroduction();

  res.status(200).json(data);
}
