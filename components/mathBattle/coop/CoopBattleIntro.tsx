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
  questions: Question[];
  room: Colyseus.Room;
}
export enum STAGE {
  INTRO,
  GAME,
}

const CoopBattleIntroComponent = ({
  questions,
  room,
}: CoopBattleIntroComponentProps) => {
  const [stage, setStage] = useState(STAGE.INTRO);
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
      setStage(STAGE.GAME);
    }
  };

  return (
    <div className="heropattern-boxes-green-400 bg-gray-900">
      <div className="flex flex-row gap-8 items-start justify-center h-36 bg-green-200 w-1/3">
        {stage == STAGE.INTRO && timer(time)}
        {stage == STAGE.GAME && (
          <CoopBattleComponent questions={questions} room={room} />
        )}
      </div>
    </div>
  );
};
export default CoopBattleIntroComponent;
