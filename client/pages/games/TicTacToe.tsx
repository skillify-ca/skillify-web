import React, { useState } from "react";
import GameBoard from "../../components/ticTacToe/GameBoard";
import { Container } from "../../components/ticTacToe/Container";
import TeacherControls from "../../components/ticTacToe/TeacherControls";
import Navbar from "../../components/Navbar";

const TicTacToe = () => {
  return (
    <div>
      <Navbar/>
      <div className="p-4">
        <GameBoard />
      </div>
    </div>
  );
};

export default TicTacToe;
