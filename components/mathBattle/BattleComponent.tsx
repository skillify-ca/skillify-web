import React, { useEffect, useRef, useState } from "react";
import { Button } from "../stories/Button";
import * as Colyseus from "colyseus.js";
import Link from "next/link";
import { Player } from "../../pages/games/MathBattle";
import QuestionSet from "../stories/QuestionSet";
import { AnswerType, Question } from "../../pages/api/question";
import { QuestionType } from "../../pages/api/questionTypes";
import { generateQuestions } from "../../pages/api/quiz/quizQuestionGenerator";
import { Skill } from "../../pages/api/skill";
import { GuessData } from "../../pages/api/guessData";

export interface BattleComponentProps {
  questions: Question[]
}

const BattleComponent = ({questions }: BattleComponentProps) => {
  const [index, setIndex] = useState(0);
  const inputElement = useRef(null);

  const submitGuess = (currentGuess: GuessData) => {
    console.log("currentGuess", currentGuess);
    setIndex(index + 1)
    // notify colyseus that this player submitted a guess
    
  }
  return <div>
      <QuestionSet
        title={"Battle"}
        questionData={questions}
        index={index}
        inputElement={inputElement}
        submitGuess={submitGuess}
        score={1}
        practice={false}
      />
    </div>;
};
export default BattleComponent;
