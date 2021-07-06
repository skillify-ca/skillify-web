import React, { useState } from "react";
import { Button } from "../stories/Button";
import * as Colyseus from "colyseus.js";
import Link from "next/link";
import { Player } from "../../pages/games/MathBattle";

export interface CreateRoomProps {
  players: Player[];
}

const Lobby = ({ players }: CreateRoomProps) => {
  console.log("player", players);

  if (players && players.length > 0) {
    return (
      <div>
        <div className="relative flex flex-col justify-center text-center bg-white w-1/2 ">
          <h1 className="text-3xl font-bold text-blue-400 border-b">
            Lobby Room
          </h1>{" "}
          {players.map((it) => (
            <h1 className="text-xl border-b">{it.name}</h1>
          ))}
          <p className="bg-gray-500 text-white font-bold">Code: BMWX</p>
        </div>
      </div>
    );
  }
  return <p> Do you see this </p>;
};
export default Lobby;
