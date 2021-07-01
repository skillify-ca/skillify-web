import React, { useState } from "react";
import GameBoard from "../../components/ticTacToe/GameBoard";
import { Container } from "../../components/ticTacToe/Container";
import TeacherControls from "../../components/ticTacToe/TeacherControls";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";

const TicTacToe = () => {
  return (
    <div>
      <DiagnosticNavbar />
      <div className="p-4">
        <GameBoard />
      </div>
    </div>
  );
};

export default TicTacToe;
