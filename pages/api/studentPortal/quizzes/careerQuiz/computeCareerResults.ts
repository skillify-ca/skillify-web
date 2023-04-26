import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";

const ComputeCareerResult = (quizViewState: QuizViewState) => {
  if (!quizViewState) {
    // handle the error here
    return "Error: Invalid QuizViewState object";
  }

  const score: Record<string, number> = {
    "Software Engineer": 0,
    "Product Manager": 0,
    "UX/UI Designer": 0,
    "UX Researcher": 0,
    "DevOps Engineer": 0,
    "Digital Marketer": 0,
    "Data Scientist": 0,
    "Quality Assurance": 0,
  };

  quizViewState &&
    quizViewState.questions.forEach((question) => {
      question.options.forEach((option) => {
        if (option.isSelected && option.result && option.weight) {
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

export default ComputeCareerResult;
