import React from "react";
import GameBoard from "../../components/ticTacToe/GameBoard";
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
