import React from "react";
import { GuessData } from "../../../../pages/api/guessData";
import { AnswerType, Question } from "../../../../pages/api/question";
import { QuestionType } from "../../../../pages/api/questionTypes";
import { Skill } from "../../../../pages/api/skill";
import { TrueorFalse } from "../../../questionTypes/TrueorFalse";

const Q4 = (displayQuestion, nextQuestion, isWrong) => {
  const onSubmit = (guess: GuessData) => {
    //Pass this guessData object into nextQuestion
    if (guess.isCorrect == false) {
      isWrong(guess.isCorrect, guess);
    } else {
      nextQuestion(guess);
    }
  };
  const Q4Data: Question = {
    text: displayQuestion,
    answer: "false",
    answerType: AnswerType.BOOLEAN,
    questionType: QuestionType.TRUE_OR_FALSE_PROBLEM,
    skill: Skill.NUMBERS_50,
  };
  return (
    <React.Fragment>
      <TrueorFalse question={Q4Data} answer="false" submitGuess={onSubmit} />
    </React.Fragment>
  );
};

export default Q4;
