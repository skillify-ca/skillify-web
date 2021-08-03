import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../stories/QuestionSet";
import { AnswerType, Question } from "../../pages/api/question";
import { GuessData } from "../../pages/api/guessData";
import ProgressBar from "../ProgressBar";
import { Player } from "../../pages/games/MathBattle";
import Card from "../ui/Card";
import ReactCardFlip from "react-card-flip";
import { Button } from "../ui/Button";
import BattleComponent from "./BattleComponent";
import { generateQuestions } from "../../pages/api/quiz/quizQuestionGenerator";
import { QuestionType } from "../../pages/api/questionTypes";
import { Skill } from "../../pages/api/skill";

export interface CreateRoomProps {
  room: Colyseus.Room;
  goToLobby: () => void;
  gotoPostGameLobby: () => void;
}

const PostGameLobby = ({
  goToLobby,
  gotoPostGameLobby,
  room,
}: CreateRoomProps) => {
  const [players, setPlayers] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [playerLength, setPlayerLength] = useState(0);

  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
      skill: Skill.ADDITION_SINGLE,
    },
  ]);

  room?.onMessage("sendToLobby", (message) => {
    setPlayerLength(message.finishedPlayers);

    let playerArr = [];
    for (const [key, value] of Object.entries(message.players)) {
      console.log(key, value);
      playerArr.push(value);
    }

    console.log(playerArr);

    setPlayers(playerArr);

    console.log(message.players);
    console.log("players", players);
  });

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // const onHomeClick = () => {
  //   goToLobby();
  // };

  const onRematchClick = () => {
    const questions = generateQuestions("addition", 1, 10);
    setPlayerLength(0);
    console.log("rematch", playerLength);
    room.send("rematchRequested", questions);
  };

  let scoreArr = [];
  let scoreWin = 0;

  players.map((it) => scoreArr.push(it.score));

  scoreWin = Math.min(...scoreArr);

  if (playerLength != 2) {
    return (
      <div className="flex flex-col gap-8 w-screen place-items-center text-center">
        {console.log("playerLength", playerLength)}
        <p className="font-bold text-xl text-blue-400 items-center text-center ">
          Waiting for All Players
        </p>
        <div className=" flex justify-center items-center ">
          <div className="loader bg-white p-5 rounded-full flex space-x-3">
            <div className="w-5 h-5 bg-blue-400 shadow-sm rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-blue-400 shadow-sm  rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-blue-400  shadow-sm rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-16">
      {console.log("playerLengthEnd", playerLength)}
      <div className="flex flex-row gap-8 items-center text-center">
        {players.map((it) => (
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
            infinite={true}
          >
            <div onClick={toggleFlip}>
              <Card size="large">
                <div className="flex flex-col">
                  <h1
                    className={`text-3xl font-bold  ${
                      it.score == scoreWin ? "text-yellow-400" : "text-gray-400"
                    }`}
                  >
                    {it.name}
                    {it.score == scoreWin ? (
                      <img
                        src="/images/goldMedal.svg"
                        width="300"
                        height="300"
                      />
                    ) : (
                      <img
                        src="/images/silverMedal.svg"
                        width="300"
                        height="300"
                      />
                    )}
                  </h1>
                </div>
              </Card>
            </div>
            <div onClick={toggleFlip}>
              <Card size="large">
                <div className=" flex flex-col">
                  <p className="text-3xl font-bold">Score</p>
                  {parseInt((it.score / 1000).toString())} seconds
                </div>
                <hr></hr>
                <div className=" flex flex-col">
                  <p className="text-3xl font-bold">Accuracy</p>
                  {it.accuracy}/10
                </div>
              </Card>
            </div>
          </ReactCardFlip>
        ))}
      </div>
      <Button
        label="Stats"
        backgroundColor="red"
        textColor="white"
        onClick={toggleFlip}
      ></Button>
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
        onClick={() => window.location.reload()}
      />
    </div>
  );
};
export default PostGameLobby;
function setQuestionData(questions: any) {
  throw new Error("Function not implemented.");
}
