import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";

const ComputeResult = (quizViewState: QuizViewState) => {
  if (!quizViewState) {
    // handle the error here
    return "Error: Invalid QuizViewState object";
  }

  const score: Record<string, number> = {
    "Software Engineer": 0,
    "Product Manager": 0,
    "UX/UI Designer": 0,
  };

  quizViewState &&
    quizViewState.questions.forEach((question) => {
      question.options.forEach((option) => {
        if (option.isSelected && option.result) {
          score[option.result] += option.weight;
        }
      });
    });

  const maxQuizScore = Math.max(...Object.values(score));
  const preferredArray: string[] = Object.keys(score).filter(
    (language) => score[language] === maxQuizScore
  );

  return preferredArray;
};

export default ComputeResult;
