import React from "react";
import WarGame from "../components/math/war-game/WarGame";

export default function WarGamePage() {
  return (
    <div className="grid grid-cols-1 bg-white shadow-lg rounded-xl p-8 m-8">
      <p>War Game</p>
      <WarGame />
    </div>
  );
}
