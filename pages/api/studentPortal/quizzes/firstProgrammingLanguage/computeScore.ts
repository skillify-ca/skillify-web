import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";

export const computeLanguageScore = (quizViewState: QuizViewState) => {
const score = { JavaScript: 0, "HTML/CSS": 0, Python: 0 };
  
  quizViewState.questions.forEach((question) => {
    question.options.forEach((option) => {
      if (option.isSelected && option.result) {
        score[option.result] += option.weight;
      }
    });
  });
  return score;
  };




