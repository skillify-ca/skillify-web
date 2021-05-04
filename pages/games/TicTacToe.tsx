import React, { useState } from "react";
import GameBoard from "../../components/ticTacToe/GameBoard";
import { Container } from "../../components/ticTacToe/Container";
import TeacherControls from "../../components/ticTacToe/TeacherControls";
import { HarriButton } from "../../components/stories/harributton";

const TicTacToe = () => {
  return (
    <div>
      <div className="p-4">
        <GameBoard />
<HarriButton label='label'/>
      </div>
    </div>
  );
};

export default TicTacToe;
