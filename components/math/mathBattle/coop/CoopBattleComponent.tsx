import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../../stories/QuestionSet";
import { Question } from "../../../../pages/api/question";
import { GuessData } from "../../../../pages/api/guessData";
import ProgressRing from "../../../ui/ProgressRing";

export interface CoopBattleComponentProps {
  questions: Question[];
  room: Colyseus.Room;
  goToGameOver: () => void;
}

const CoopBattleComponent = ({
  questions,
  room,
  goToGameOver,
}: CoopBattleComponentProps) => {
  const [index, setIndex] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const inputElement = useRef(null);
  const [health, setHealth] = useState(200);
  const [punchingAnimationVisibility, setPunchingAnimationVisibility] =
    useState(false);
  room?.onMessage("nextHealth", (message) => {
    const nextHealth = Number.parseInt(message);
    setHealth(nextHealth);
    setPunchingAnimationVisibility(false);
    if (nextHealth <= 0) {
      room.send("requestGameOver");
      goToGameOver();
    }
  });

  room?.onMessage("postCoopGame", (message) => {
    goToGameOver();
  });
  room?.onMessage("regenerateHealth", (message) => {
    const nextHealth = Number.parseInt(message);
    setHealth(nextHealth);
  });

  const submitGuess = (currentGuess: GuessData) => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      // notify colyseus that this player submitted a correct guess
      if (currentGuess.isCorrect) {
        room.send("correct");
      }
    } else {
      room.send("requestGameOver");
      goToGameOver();
    }
  };
  return (
    <div className="heropattern-boxes-green-800 bg-gray-300 grid grid-cols-1 sm:grid-cols-2">
      <div className="flex flex-wrap justify-content items-center bg-green-200 gap-8 p-8">
        <div
          className={!punchingAnimationVisibility ? "animate-shake" : ""}
          onAnimationEnd={() => setPunchingAnimationVisibility(true)}
        >
          <div className="flex flex-col items-center gap-4 bg-white rounded-xl shadow-xl p-8">
            <ProgressRing percentage={health} radius={24} unit={""} />
            <p className="text-xl font-bold mb-8">Health</p>
          </div>
        </div>
        <div
          className={!punchingAnimationVisibility ? "animate-shake" : ""}
          onAnimationEnd={() => setPunchingAnimationVisibility(true)}
        >
          <div className="flex items-center gap-4 bg-white rounded-xl shadow-xl p-8">
            <img className="h-36" src="/images/CoopCartoon.jpeg " />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <QuestionSet
          title={"Battle"}
          HUDEnabled={false}
          questionData={questions}
          index={index}
          inputElement={inputElement}
          submitGuess={submitGuess}
          score={1}
        />
      </div>
    </div>
  );
};
export default CoopBattleComponent;
