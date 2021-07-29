import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../stories/QuestionSet";
import { Question } from "../../pages/api/question";
import { GuessData } from "../../pages/api/guessData";
import ProgressBar from "../ProgressBar";
import { Player } from "../../pages/games/MathBattle";

export interface CreateRoomProps {
  players: Player[];
  room: Colyseus.Room;
}

const PostGameLobby = ({ players, room }: CreateRoomProps) => {
  const [playerLength, setPlayerLength] = useState(0);
  room?.onMessage("sendToLobby", (message) => {
    setPlayerLength(message);
  });

  if (playerLength != 2) {
    return (
      <div className="flex flex-col gap-8 w-full min-h-screen">
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
    <div>
      {players.map((it) => (
        <div className="bg-blue-400 opacity-75 text-center items-center">
          <h1 className="text-xl font-bold border-b opacity-100">
            {it.name}
            {console.log(it.score)}
            {console.log(it.sessionId)}
            <h2>{it.score}</h2>
          </h1>
        </div>
      ))}
    </div>
  );
};
export default PostGameLobby;
