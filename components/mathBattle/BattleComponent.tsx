import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../stories/QuestionSet";
import { Question } from "../../pages/api/question";
import { GuessData } from "../../pages/api/guessData";
import ProgressBar from "../ProgressBar";

export interface BattleComponentProps {
  questions: Question[];
  room: Colyseus.Room;
}

const BattleComponent = ({ questions, room }: BattleComponentProps) => {
  const [opponentProgress, setOpponentProgress] = useState(0);
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

  room?.onMessage("incrementProgress", (message) => {
    console.log("data", message);
    setOpponentProgress(opponentProgress + 1);
  });

  const submitGuess = (currentGuess: GuessData) => {
    room.send("nextQuestion", { id: room.sessionId, data: index });
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
    <div className="flex flex-col">
      <QuestionSet
        title={"Battle"}
        questionData={questions}
        index={index}
        inputElement={inputElement}
        submitGuess={submitGuess}
        score={0}
      />
      <p>{parseInt((time / 1000).toString())}</p>
      <div className="w-96 justify-center items-center">
        <ProgressBar max={10} value={index} color="blue"></ProgressBar>
        <ProgressBar
          max={10}
          value={opponentProgress}
          color="red"
        ></ProgressBar>
      </div>
    </div>
  );
};
export default BattleComponent;
