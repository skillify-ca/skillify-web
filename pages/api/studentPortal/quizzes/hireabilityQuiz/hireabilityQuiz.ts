import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";

export const quizData: QuizViewState = {
  title: "How hireable are you?",
  body: "Take this free quiz to reveal your hireability score for software engineering, product, or design roles.",
  questions: [
    {
      title: "What field are you interested in?",
      body: "Select the most relevant field.",
      options: [
        {
          name: "Software Engineering",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
};
