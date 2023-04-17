import { LanguageQuizResultsMap } from "../../../../../components/resources/quizzes/langQuiz/LanguageResults";

// This function finds the preferred programming language based on a score object
export const getPreferredLanguageForQuizResults = (
    score: LanguageQuizResultsMap
  ) => {
    const preferredLanguage = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    return preferredLanguage;
    }