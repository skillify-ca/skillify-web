import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import QuestionSet from "../stories/QuestionSet";
import { Question } from "../../pages/api/question";
import { GuessData } from "../../pages/api/guessData";
import ProgressBar from "../ProgressBar";
import { Player } from "../../pages/games/MathBattle";

export interface CreateRoomProps {
  players: Player[];
}

const PostGameLobby = ({ players }: CreateRoomProps) => {
  console.log("playersTotal", players);
  if (players && players.length == 1) {
    return (
      <div className="flex flex-col items-center ">
        <div className="relative flex flex-col justify-center  bg-gray-100 w-1/2 ">
          <h1 className="text-3xl font-bold text-blue-400 border-b ">
            Lobby Room
          </h1>
          {players.map((it) => (
            <div className="bg-blue-400 opacity-75 text-center items-center">
              <h1 className="text-xl font-bold border-b opacity-100">
                {it.name}
                <h1 className="text-xl font-bold border-b opacity-100">
                  Score: {it.score}
                </h1>
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <p>Do you see this</p>;
};
export default PostGameLobby;
