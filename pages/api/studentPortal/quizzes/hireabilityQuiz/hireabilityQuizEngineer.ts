import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";

export const quizData: QuizViewState = {
  title: "How hireable are you?",
  body: "Take this free quiz to reveal your hireability score for software engineering, product, or design roles.",
  questions: [
    {
      title: "What role are you interested in?",
      body: "Select the most relevant role.",
      maxSelections: 1,

      options: [
        {
          name: "Frontend Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Backend Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Mobile Engineer",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};
