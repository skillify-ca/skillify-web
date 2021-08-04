import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../stories/QuestionSet";
import { Question } from "../../pages/api/question";
import { GuessData } from "../../pages/api/guessData";
import ProgressBar from "../ProgressBar";
import { PLAYER_ONE } from "../../pages/api/ticTacToe/constants";

export interface BattleComponentProps {
  questions: Question[];
  room: Colyseus.Room;
  gotoPostGameLobby: (room: Colyseus.Room) => void;
}

const BattleComponent = ({
  questions,
  room,
  gotoPostGameLobby,
}: BattleComponentProps) => {
  const [opacity, setOpacity] = useState(0);
  const [opponentProgress, setOpponentProgress] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
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

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  room?.onMessage("incrementProgress", (message) => {
    console.log("data", message);
    setOpponentProgress(opponentProgress + 1);
  });

  const submitGuess = async (currentGuess: GuessData) => {
    room.send("nextQuestion", { id: room.sessionId, data: index });
    if (!currentGuess.isCorrect) {
      setOpacity(1);
      setTime((time) => time + 10000);
      await delay(650);
      setOpacity(0);
    } else {
      setCorrectGuesses(correctGuesses + 1);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      room.send("playerScore", { time: time, accuracy: correctGuesses });
      gotoPostGameLobby(room);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <QuestionSet
        title={"Battle"}
        questionData={questions}
        index={index}
        inputElement={inputElement}
        submitGuess={submitGuess}
        score={correctGuesses}
      />

      <div className="flex flex-row">
        <p className="text-xl font-bold">
          {parseInt((time / 1000).toString())}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" w-5"
          viewBox="0 0 20 20"
          fill="orange"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
        <div className="flex flex-row gap-8">
          <p
            className={`transition-opacity duration-650 ease-in-out opacity-${opacity} text-red-500 text-s font-bold`}
          >
            +10
          </p>
        </div>
      </div>
      <div className="w-96 ">
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
