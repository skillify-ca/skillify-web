import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";

const ComputeResult = (quizViewState: QuizViewState) => {
  const score = { JavaScript: 0, "HTML/CSS": 0, Python: 0 };

  quizViewState.questions.forEach((question) => {
    question.options.forEach((option) => {
      if (option.isSelected && option.result) {
        score[option.result] += option.weight;
      }
    });
  });

  const maxLanguageQuizScore = Math.max(...Object.values(score));
  const preferredLanguagesArray = Object.keys(score).filter(
    (language) => score[language] === maxLanguageQuizScore
  );

  return maxLanguageQuizScore == 0 // if no quiz question options are selected return sample output of "JavaScript"!
    ? "JavaScript"
    : preferredLanguagesArray.length > 1 &&
      preferredLanguagesArray.includes("JavaScript")
    ? "JavaScript"
    : preferredLanguagesArray.length > 1 &&
      preferredLanguagesArray.includes("HTML/CSS")
    ? "HTML/CSS"
    : preferredLanguagesArray[0];
};

export default ComputeResult;
