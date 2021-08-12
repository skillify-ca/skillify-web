import React, { useRef, useState } from "react";
import * as Colyseus from "colyseus.js";
import { Button } from "../../ui/Button";
import { STAGE } from "../../../pages/games/MathBattle";

export interface CoopGameOverProps {
  room: Colyseus.Room;
  goToLobby: () => void;
}

const CoopGameOver = ({ room, goToLobby }: CoopGameOverProps) => {
  const onRematchClick = () => {
    goToLobby();
  };
  const onHomeClick = () => {
    goToLobby();
  };
  return (
    <div className="flex flex-col gap-8">
      <p className="text-2xl font-bold">
        {
          "Amazing work! You and your team took down the monster using your math skills!"
        }
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
export default CoopGameOver;
