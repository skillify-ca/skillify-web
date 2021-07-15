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
    if (time / 1000.0 <= 2) {
      return (
        <div className="bg-yellow-400 w-full h-full">
          <div className="bg-white font-semibold text-green-500 rounded-lg justify-center">
            <h1 className="animate-fadeIn lgtext-8xl md:text-5xl">
              There once was a scientist...
            </h1>
          </div>
        </div>
      );
    } else if (time / 1000.0 <= 4) {
      return (
        <div className="bg-yellow-400 w-full h-full">
          <div className="bg-white font-semibold text-green-500 rounded-lg justify-center">
            <h1 className="animate-fadeIn lg:text-8xl md:text-5xl">
              That mixed Frankinite and Steinium...{" "}
            </h1>
          </div>
        </div>
      );
    } else if (time / 1000.0 <= 6) {
      return (
        <div className="bg-yellow-400 w-full h-full">
          <div className="bg-white font-semibold text-green-500 rounded-lg justify-center">
            <h1 className="animate-fadeIn lg:text-8xl md:text-5xl">
              This was the creation of the Horrific Frankenstien...{" "}
            </h1>
          </div>
        </div>
      );
    } else if (time / 1000.0 <= 8) {
      return (
        <div className="bg-yellow-400 w-full h-full">
          <div className="bg-white font-semibold text-green-500 rounded-lg justify-center">
            <h1 className="animate-fadeIn lg:text-8xl md:text-5xl">
              You have teamed up to take down this Monster with your genius Math
              Skills{" "}
            </h1>
          </div>
        </div>
      );
    } else if (time / 1000.0 <= 10) {
      return (
        <div className="bg-yellow-400 w-full h-full">
          <div className="bg-white font-semibold text-green-500 rounded-lg justify-center">
            <h1 className="animate-fadeIn lg:text-8xl md:text-5xl">
              Answer the Questions Correctly and Defeat the Monster{" "}
            </h1>
          </div>
        </div>
      );
    } else if (time / 1000.0 <= 12) {
      return (
        <div className="bg-yellow-400 w-full h-full">
          <div className="bg-white font-semibold text-green-500 rounded-lg justify-center">
            <h1 className="animate-fadeIn lg:text-8xl md:text-5xl">
              We can save the world together{" "}
            </h1>
          </div>
        </div>
      );
    } else if (time / 1000.0 <= 14) {
      return <ProgressRing percentage={3} radius={24} unit={""} />;
    } else if (time / 1000.0 <= 15) {
      return <ProgressRing percentage={2} radius={24} unit={""} />;
    } else if (time / 1000.0 <= 16) {
      return <ProgressRing percentage={1} radius={24} unit={""} />;
    } else {
      startGame();
    }
  };

  return <div className="animate-fadeIn">{timer(time)}</div>;
};
export default CoopBattleIntroComponent;
