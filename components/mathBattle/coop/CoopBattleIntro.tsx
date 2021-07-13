import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../../stories/QuestionSet";
import { Question } from "../../../pages/api/question";
import { getEmoji } from "../../../pages/api/skill";
import { GuessData } from "../../../pages/api/guessData";
import ProgressRing from "../../ui/ProgressRing";
import Card from "../../ui/Card";
import CoopBattleComponent from "./CoopBattleComponent";

export interface CoopBattleIntroComponentProps {
  startGame: () => void;
}
export enum STAGE {
  INTRO,
  GAME,
}

const CoopBattleIntroComponent = ({
  startGame,
}: CoopBattleIntroComponentProps) => {
  const [time, setTime] = useState(0);
  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  let timer = function (time: number) {
    if (time / 1000.0 <= 1) {
      return <ProgressRing percentage={3} radius={24} unit={""} />;
    } else if (time / 1000.0 <= 2) {
      return <ProgressRing percentage={2} radius={24} unit={""} />;
    } else if (time / 1000.0 <= 3) {
      return <ProgressRing percentage={1} radius={24} unit={""} />;
    } else {
      startGame();
    }
  };

  return <div>{timer(time)}</div>;
};
export default CoopBattleIntroComponent;
