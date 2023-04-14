import { LanguageQuizResultsMap } from "../../../../components/resources/quizzes/langQuiz/LanguageResults";
import { QuizViewState } from "../../../../components/resources/quizzes/shared/types";


export const computeScore = (quizViewState: QuizViewState) => {
const score = { JavaScript: 0, "HTML/CSS": 0, Python: 0 };
  
  quizViewState.questions.map((question) => {
    question.options.map((option) => {
      if (option.isSelected && option.result) {
        score[option.result] += option.weight;
      }
    });
  });
  return score;
  };

// This function finds the preferred programming language based on a score object
export const getPreferredLanguageForQuizResults = (
    score: LanguageQuizResultsMap
  ) => {
    const preferredLanguage = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    return preferredLanguage;
    }


