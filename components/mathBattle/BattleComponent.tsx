import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../stories/QuestionSet";
import { Question } from "../../pages/api/question";
import { GuessData } from "../../pages/api/guessData";

export interface BattleComponentProps {
  questions: Question[];
  room: Colyseus.Room;
}

const BattleComponent = ({ questions, room }: BattleComponentProps) => {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(0);
  const inputElement = useRef(null);

  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const submitGuess = (currentGuess: GuessData) => {
    if (!currentGuess.isCorrect) {
      setTime((time) => time + 10000);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      // notify colyseus that this player submitted a guess
    } else {
      // TODO currently whoever calls this is declared the winner
      room.send("requestGameOver", { id: room.sessionId, score: time });
    }
  };
  return (
    <div>
      <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
      </div>
      <QuestionSet
        title={"Battle"}
        questionData={questions}
        index={index}
        inputElement={inputElement}
        submitGuess={submitGuess}
        score={0}
      />
      <p>{parseInt((time / 1000).toString())}</p>
    </div>
  );
};
export default BattleComponent;
