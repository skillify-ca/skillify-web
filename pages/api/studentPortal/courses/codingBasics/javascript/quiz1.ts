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

export function getLessonComponentsForJSQuiz1() {
  const q1 = {
    text: "How do you declare and intialize a constant type?",
    A: "let a = 8;",
    B: "var b;",
    C: "constant b = 0;",
    D: "const x = 22;",
    answer: "D",
  };
  const q2 = {
    text: "What is the valid way to increment a variable by 1?",
    A: "x++;",
    B: "x += 1;",
    C: "x = x + 1;",
    D: "All of the above",
    answer: "D",
  };
  const q3 = {
    text: "Which one of the following is an incorrect way of declaring a variable",
    A: "variable x;",
    B: "var x;",
    C: "let x;",
    D: "All of the above are correct ways to declare a variable",
    answer: "A",
  };
  const q4 = {
    text: "Which of the following expressions evaluates as True",
    A: "4**0 > 1",
    B: "!(2 + 2 == 5)",
    C: "1 < 1 ** 1",
    D: "All of the above",
    answer: "B",
  };
  const q5 = {
    text: "Which of the following expressions evaluates as True",
    A: "-3 > 0 || 0 >= 0",
    B: "7**0 == 1 && 0 > -1",
    C: "0 == 0 && 1 > -1",
    D: "All of the above",
    answer: "D",
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

export function getLessonComponentsForJSQuiz1Data() {
  const lessonComponents = getLessonComponentsForJSQuiz1();

  const data: ResponseData = {
    lessonComponents,
    currentNode: 40,
    nextNode: 41,
    nextSlug: "javascript/lesson4",
  };

  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getLessonComponentsForJSQuiz1Data();
  res.status(200).json(data);
}
