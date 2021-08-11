import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../stories/QuestionSet";
import { Question } from "../../pages/api/question";
import { GuessData } from "../../pages/api/guessData";
import ProgressBar from "../ProgressBar";
import { Player } from "../../pages/games/MathBattle";

export interface BattleComponentProps {
  questions: Question[];
  players: Player[];
  room: Colyseus.Room;
  gotoPostGameLobby: (room: Colyseus.Room) => void;
}

const BattleComponent = ({
  questions,
  players,
  room,
  gotoPostGameLobby,
}: BattleComponentProps) => {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [player3, setPlayer3] = useState(0);
  const [player4, setPlayer4] = useState(0);

  const [opacity, setOpacity] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(0);
  const inputElement = useRef(null);

  const colourArr = ["blue", "red", "green", "yellow"];

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

  function getPlayerProgress(seat: number) {
    if (seat == 1) {
      return player1;
    } else if (seat == 2) {
      return player2;
    } else if (seat == 3) {
      return player3;
    } else {
      return player4;
    }
  }

  room?.onMessage("incrementProgress", (message) => {
    console.log("data", message);
    if (message.seat == 1) {
      setPlayer1(message.index.data);
    } else if (message.seat == 2) {
      setPlayer2(message.index.data);
    } else if (message.seat == 3) {
      setPlayer3(message.index.data);
    } else {
      setPlayer4(message.index.data);
    }
  });

  const submitGuess = async (currentGuess: GuessData) => {
    let newCorrectGuesses = correctGuesses;
    let newTime = time;
    console.log("dataIndex", index);
    room.send("nextQuestion", { id: room.sessionId, data: index + 1 });
    if (!currentGuess.isCorrect) {
      newTime = time + 10000;

      setOpacity(1);
      setTime(newTime);
      await delay(650);
      setOpacity(0);
    } else {
      newCorrectGuesses = correctGuesses + 1;
      setCorrectGuesses(newCorrectGuesses);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      room.send("playerScore", { time: newTime, accuracy: newCorrectGuesses });
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
      <div>
        {players.map((it) => (
          <div className="flex flex-row">
            <div className="gap-4 w-96">
              <ProgressBar
                id={it.sessionId}
                max={10}
                value={getPlayerProgress(it.seat)}
                color={colourArr[it.seat - 1]}
              ></ProgressBar>
            </div>
            <p className="font-bold text-xl"> {it.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BattleComponent;
