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
    return <p>{players[0]}</p>;
  }
  return <p> Do you see this </p>;
};
export default Lobby;
