import React, { useState } from "react";
import * as Colyseus from "colyseus.js";
import { Button } from "../ui/Button";
import BattleComponent from "./BattleComponent";
import { generateQuestions } from "../../pages/api/quiz/quizQuestionGenerator";
import { Question, AnswerType } from "../../pages/api/question";
import { QuestionType } from "../../pages/api/questionTypes";
import { Skill } from "../../pages/api/skill";

export interface GameOverProps {
  room: Colyseus.Room;
  winnerId: string;
  goToLobby: () => void;
}

const GameOver = ({ room, winnerId, goToLobby }: GameOverProps) => {
  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
      skill: Skill.ADDITION_SINGLE,
    },
  ]);

  const onRematchClick = () => {
    const questions = generateQuestions("addition", 1, 10);
    room.send("startGameRequested", questions);
    room?.onMessage("goToBattle", (message) => {
      const questions = message;
      setQuestionData(questions);
    });
    return <BattleComponent questions={questionData} room={room} />;
  };
  const onHomeClick = () => {
    goToLobby();
  };
  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-bold">
        {winnerId == room.sessionId
          ? "Congrats you won! Keep practicing to ace your school tests!"
          : "Great effort! You didn't win this time, but keep practicing!"}
      </p>
      <Button
        label="Rematch"
        backgroundColor="blue"
        textColor="white"
        onClick={onRematchClick}
      />
      <Button
        label="Go Home"
        backgroundColor="green"
        textColor="white"
        onClick={onHomeClick}
      />
    </div>
  );
};
export default GameOver;
