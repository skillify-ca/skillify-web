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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getLessonComponentsForHTMLQuizData();
  res.status(200).json(data);
}

export function getLessonComponentsForHTMLQuizData(): ResponseData {
  const lessonComponents = getLessonComponentsForHTMLQuiz();

  const data: ResponseData = {
    lessonComponents,
    currentNode: 3,
    nextNode: 4,
    nextSlug: "html-assignment-1",
  };

  return data;
}

export function getLessonComponentsForHTMLQuiz(): LessonComponentData[] {
  const q1 = {
    text: "Which element is used to display text?",
    A: "<a>",
    B: "<img>",
    C: "<p>",
    D: "<div>",
    answer: "C",
  };
  const q2 = {
    text: "Which elements are used to display lists?",
    A: "<ul> and <ol>",
    B: "<ul> and <li>",
    C: "<ol> and <li>",
    D: "None of the above",
    answer: "A",
  };
  const q3 = {
    text: "What is the difference between <h1> and <h2> tags?",
    A: "<h1> tags are ranked higher in significance than <h2> and thus are slightly larger",
    B: "<h2> is larger than <h1>",
    C: "There is no difference in significance",
    D: "None of the above",
    answer: "A",
    image: "",
  };
  const q4 = {
    text: "What is the correct way to implement tags on a HTML page?",
    A: '<img from="skillify.jpg"/>',
    B: '<img src="skillify.jpg"/>',
    C: '<image src="skillify.jpg"/>',
    D: "All of the above",
    answer: "B",
    image: "",
  };
  const q5 = {
    text: "How can we implement square points in an unordered list?",
    A: '<ol style="list-style-type:square;">',
    B: '<ul type="box">',
    C: '<ul style="list-style-type:square;">',
    D: '<ol type="box">',
    answer: "C",
    image: "",
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
