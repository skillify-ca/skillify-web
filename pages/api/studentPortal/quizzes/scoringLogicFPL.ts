import { QuizViewState } from "../../../../components/resources/quizzes/shared/SkillSelections";

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


