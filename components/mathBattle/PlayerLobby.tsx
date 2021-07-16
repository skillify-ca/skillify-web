import React, { useState } from "react";
import { Button } from "../ui/Button";
import * as Colyseus from "colyseus.js";
import Link from "next/link";
import { Player } from "../../pages/games/MathBattle";

export interface CreateRoomProps {
  leader: boolean;
  players: Player[];
  code: string;
  startGame: () => void;
}

const Lobby = ({ leader, players, code, startGame }: CreateRoomProps) => {
  console.log("leader", leader);
  console.log("player", players);

  if (players && players.length > 0) {
    return (
      <div>
        <div className="relative flex flex-col justify-center text-center bg-gray-100 w-1/2 ">
          <h1 className="text-3xl font-bold text-blue-400 border-b ">
            Lobby Room
          </h1>
          {players.map((it) => (
            <div className="bg-blue-400 opacity-75	">
              <h1 className="text-xl font-bold border-b opacity-100">
                {it.name}
              </h1>
            </div>
          ))}
          <p className="bg-gray-500 text-white font-bold">Code: {code}</p>
        </div>
        {players.length === 1 ? (
          <p>Waiting for all players</p>
        ) : (
          <div>
            {leader ? (
              <Button
                label="Play"
                backgroundColor="blue"
                textColor="white"
                onClick={startGame}
              />
            ) : (
              <p>Waiting for leader to Start Game</p>
            )}
          </div>
        )}
      </div>
    );
  }
  return <p> Do you see this </p>;
};
export default Lobby;
