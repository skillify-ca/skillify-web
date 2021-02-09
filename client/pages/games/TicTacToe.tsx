import React, { useState } from "react";
import GameBoard from "../../components/GameBoard";
import { Container } from "../../components/Container";
import TeacherControls from "../../components/TeacherControls";

const TicTacToe = () => {
  return (
    <div>
      <div className="p-4">
        <GameBoard />
      </div>
    </div>
  );
};

export default TicTacToe;
