import React, { useState } from "react";
import * as Colyseus from "colyseus.js";
import { AnswerType, Question } from "../../pages/api/question";
import Card from "../ui/Card";
import ReactCardFlip from "react-card-flip";
import { Button } from "../ui/Button";
import { generateQuestions } from "../../pages/api/quiz/quizQuestionGenerator";
import { QuestionType } from "../../pages/api/questionTypes";
import { Skill } from "../../pages/api/skill";

export interface CreateRoomProps {
  room: Colyseus.Room;
  length: number;
  goToLobby: () => void;
  gotoPostGameLobby: () => void;
}

const PostGameLobby = ({
  length,
  goToLobby,
  gotoPostGameLobby,
  room,
}: CreateRoomProps) => {
  const [players, setPlayers] = useState([]);
  const [stats, setStats] = useState("Stats");
  const [isFlipped, setIsFlipped] = useState(false);
  const [playerLength, setPlayerLength] = useState(0);
  const [rematchButton, setRematchButton] = useState("Request Rematch");
  const [rematchCounter, setRematchCounter] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(false);

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

  room?.onMessage("goToRematch", (message) => {
    setRematchButton(message);
  });

  room?.onMessage("rematchCounter", (message) => {
    setRematchCounter(message);
  });

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    if (stats == "Stats") {
      setStats("Placements");
    } else {
      setStats("Stats");
    }
  };

  // const onHomeClick = () => {
  //   goToLobby();
  // };

  const onRematchClick = () => {
    if (rematchButton != "Play Again") {
      console.log("rematch", playerLength);
      room.send("rematchRequested", playerLength);
      setButtonDisable(true);
    } else {
      const questions = generateQuestions("addition", 1, 10);
      setPlayerLength(0);
      room.send("rematchAccepted", questions);
    }
  };

  let scoreArr = [];
  let scoreWin = 0;

  players.map((it) => scoreArr.push(it.score));

  scoreWin = Math.min(...scoreArr);

  if (playerLength != length) {
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
    <div className="flex flex-col gap-16 justify-items-center items-center">
      {console.log("playerLengthEnd", playerLength)}
      <div className="flex flex-row items-center justify-items-center gap-4 text-center">
        {players.map((it) => (
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
            infinite={true}
          >
            <div onClick={toggleFlip}>
              <Card size="medium">
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
                        width="200"
                        height="200"
                      />
                    ) : (
                      <img
                        src="/images/silverMedal.svg"
                        width="200"
                        height="200"
                      />
                    )}
                  </h1>
                </div>
              </Card>
            </div>
            <div onClick={toggleFlip}>
              <Card size="medium">
                <div className=" flex flex-col">
                  <h1 className="text-3xl font-bold">Score</h1>
                  {parseInt((it.score / 1000).toString())} seconds
                </div>
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
        label={stats}
        backgroundColor="red"
        textColor="white"
        onClick={toggleFlip}
      ></Button>
      <Button
        label={rematchButton}
        backgroundColor="blue"
        textColor="white"
        onClick={onRematchClick}
        disabled={buttonDisable}
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
