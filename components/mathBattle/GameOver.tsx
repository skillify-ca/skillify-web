import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../stories/QuestionSet";
import { Question } from "../../pages/api/question";
import { getEmoji } from "../../pages/api/skill";
import { GuessData } from "../../pages/api/guessData";
import ProgressRing from "../ui/ProgressRing";
import ButtonStories from "../ui/Button.stories";
import { Button } from "../ui/Button";

export interface GameOverProps {
  room: Colyseus.Room;
  isWinner: boolean;
}

const GameOver = ({ room, isWinner }: GameOverProps) => {

  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-bold">{isWinner ? "Congrats you won! Keep practicing to ace your school tests!": "Great effort! You didn't win this time, but keep practicing!"}</p>
      <Button label="Rematch" backgroundColor="blue" textColor="white" />
      <Button label="Go Home" backgroundColor="green" textColor="white" />
    </div>
  );
};
export default GameOver;
