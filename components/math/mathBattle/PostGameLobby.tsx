import React, { useState } from "react";
import * as Colyseus from "colyseus.js";
import { Question } from "../../../pages/api/question";
import Card from "../../ui/Card";
import ReactCardFlip from "react-card-flip";
import { Button } from "../../ui/Button";
import { QuestionType } from "../../../pages/api/questionTypes";
import { Skill } from "../../../pages/api/skill";
import { generateMath1Questions } from "../../../pages/api/practice/practiceQuestionGenerator";

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
      const questions = generateMath1Questions(1);
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
      <div className="flex flex-col w-screen gap-8 text-center place-items-center">
        {console.log("playerLength", playerLength)}
        <p className="items-center text-xl font-bold text-center text-blue-400 ">
          Waiting for All Players
        </p>
        <div className="flex items-center justify-center ">
          <div className="flex p-5 space-x-3 bg-white rounded-full loader">
            <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
            <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
            <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-16 justify-items-center">
      {console.log("playerLengthEnd", playerLength)}
      <div className="flex flex-row items-center gap-4 text-center justify-items-center">
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
                <div className="flex flex-col ">
                  <h1 className="text-3xl font-bold">Score</h1>
                  {parseInt((it.score / 1000).toString())} seconds
                </div>
                <div className="flex flex-col ">
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
