import { NextApiRequest, NextApiResponse } from "next";
import {
  LessonComponentData,
  QuizData,
} from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export type QuizQuestion = {
  text: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: string;
  image: string;
};

export function getLessonComponentsForCSSQuiz() {
  const q1 = {
    text: "What CSS properties are used here?",
    A: "justify-content: flex-end;",
    B: "justify-content: flex-start;",
    C: "justify-content: reverse;",
    D: "align-items: center;",
    answer: "A",
    image: "/images/coding/units/css/flex-end.png",
  };
  const q2 = {
    text: "What CSS properties are used here?",
    A: "align-items: center;",
    B: "justify-content: space-around;",
    C: "justify-content: center;",
    D: "flex-direction: row;",
    answer: "B",
    image: "/images/coding/units/css/space-around.png",
  };
  const q3 = {
    text: "What CSS properties are used here?",
    A: "flex-direction: reverse;",
    B: "justify-content: flex-end;",
    C: "flex-direction: column;",
    D: "justify-content: flex-start;",
    answer: "C",
    image: "/images/coding/units/css/column.png",
  };
  const q4 = {
    text: "What CSS properties are used here?",
    A: "justify-content: space-between;",
    B: "flex-direction: row;",
    C: "justify-content: flex-start;",
    D: "align-items: center;",
    answer: "A",
    image: "/images/coding/units/css/space-between.png",
  };
  const q5 = {
    text: "What CSS properties are used here?",
    A: "flex-direction: flex-start;",
    B: "justify-content: center;",
    C: "justify-items: center;",
    D: "justify-contents: center;",
    answer: "B",
    image: "/images/coding/units/css/center.png",
  };

  const quizData: QuizData = {
    questions: [q1, q2, q3, q4, q5],
  };

  const lessonComponents: LessonComponentData[] = [
    {
      component: "quiz",
      data: quizData,
    },
  ];
  return lessonComponents;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const lessonComponents = getLessonComponentsForCSSQuiz();

  const data: ResponseData = {
    lessonComponents,
    currentNode: 51,
    nextNode: 52,
    nextSlug: "css/assignment",
  };
  res.status(200).json(data);
}
