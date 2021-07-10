import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../stories/QuestionSet";
import { Question } from "../../pages/api/question";
import { getEmoji } from "../../pages/api/skill";
import { GuessData } from "../../pages/api/guessData";
import ProgressRing from "../stories/ProgressRing";

export interface CoopBattleComponentProps {
  questions: Question[];
  room: Colyseus.Room;
}

const CoopBattleComponent = ({ questions, room }: CoopBattleComponentProps) => {
  const [index, setIndex] = useState(0);
  const inputElement = useRef(null);
  const [health, setHealth] = useState(100);

  room?.onMessage("nextHealth", (message) => {
    setHealth(Number.parseInt(message));
  });

  const submitGuess = (currentGuess: GuessData) => {
    console.log("currentGuess", currentGuess);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      // notify colyseus that this player submitted a correct guess
      if (currentGuess.isCorrect) {
        room.send("correct");
      }
    } 
  };

  return (
    <div>
      <div className="flex gap-8 items-start justify-center h-36">
        <div className="flex flex-col items-center gap-4">
          <ProgressRing percentage={health} radius={24} unit={""} />
          <p className="text-xl font-bold mb-8">Health</p>
        </div>
        <div className="h-16">
          <img
            className="h-36"
            src="https://wpclipart.com/cartoon/monsters/more_monsters/creature_evil_hooded_eyes.png"
          />
          <p className="text-8xl relative bottom-28 left-12">{getEmoji(100)}</p>
        </div>
      </div>
      <p className="text-lg text-center mt-8">
        Answer questions correctly with your team to take down the monster.
      </p>
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
