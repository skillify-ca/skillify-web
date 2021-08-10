import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../../stories/QuestionSet";
import { Question } from "../../../pages/api/question";
import { getEmoji } from "../../../pages/api/skill";
import { GuessData } from "../../../pages/api/guessData";
import ProgressRing from "../../ui/ProgressRing";
import Card from "../../ui/Card";

export interface CoopBattleComponentProps {
  questions: Question[];
  room: Colyseus.Room;
}

const CoopBattleComponent = ({ questions, room }: CoopBattleComponentProps) => {
  const [index, setIndex] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const inputElement = useRef(null);
  const [health, setHealth] = useState(200);
  const [
    punchingAnimationVisibility,
    setPunchingAnimationVisibility,
  ] = useState(false);

  room?.onMessage("nextHealth", (message) => {
    const nextHealth = Number.parseInt(message);
    setHealth(nextHealth);
    setPunchingAnimationVisibility(false);
    if (nextHealth <= 0) {
      room.send("requestGameOver");
    }
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
    }
  };
  return (
    <div className="heropattern-boxes-green-400 bg-gray-900">
      <div className="flex flex-row items-start justify-center h-36 bg-green-200 w-1/3 gap-8">
        <div className="flex flex-col items-center gap-4">
          <ProgressRing percentage={health} radius={24} unit={""} />
          <p className="text-xl font-bold mb-8">Health</p>
        </div>
        <div className="h-16">
          <img className="h-36" src="/images/CoopCartoon.jpeg " />
        </div>

        <div
          className={!punchingAnimationVisibility ? "h-16 animate-hit" : ""}
          onAnimationEnd={() => setPunchingAnimationVisibility(true)}
        >
          <div
            className={
              !punchingAnimationVisibility ? "opacity-100" : "opacity-0"
            }
          >
            <img className="h-20 rotate-90" src="/images/punch.png" />
          </div>
        </div>
      </div>
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
  );
};
export default CoopBattleComponent;
