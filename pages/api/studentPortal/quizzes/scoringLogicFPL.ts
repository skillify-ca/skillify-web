import { LanguageQuizResultsMap } from "../../../../components/resources/quizzes/langQuiz/LanguageResults";
import { QuizViewState } from "../../../../components/resources/quizzes/shared/types";

export const computeScore = (quizViewState: QuizViewState) => {
    const updatedScore = quizViewState.questions.reduce(
      (score, { options }) =>
        options.reduce(
          (score, { isSelected, weight, result }) => ({
            ...score,
            [result]:
              isSelected && weight !== undefined
                ? score[result] + weight
                : score[result],
          }),
          score
        ),
      { JavaScript: 0, "HTML/CSS": 0, Python: 0 }
    );
    return updatedScore;
  };

  export const getPreferredLanguageForQuizResults = (
    score: LanguageQuizResultsMap
  ) => {
    let maxScore = 0;
    let preferredLanguage = "";
    for (const [key, value] of Object.entries(score)) {
      if (value > maxScore) {
        maxScore = value;
        preferredLanguage = key;
      }
    }
    return preferredLanguage;
  };


