import React from "react";
import { AnswerType, Question } from "../../pages/api/question";
import { QuestionType } from "../../pages/api/questionTypes";
import { Skill } from "../../pages/api/skill";
import { TrueorFalse } from "../questionTypes/TrueorFalse";

const Q4 = (displayQuestion, nextQuestion) => {
  const Q4Data: Question = {
    text: displayQuestion,
    answer: "False",
    answerType: AnswerType.BOOLEAN,
    questionType: QuestionType.TRUE_OR_FALSE_PROBLEM,
    skill: Skill.NUMBERS_50,
  };
  return (
    <React.Fragment>
      <TrueorFalse
        question={Q4Data}
        answer="False"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
};

export default Q4;
