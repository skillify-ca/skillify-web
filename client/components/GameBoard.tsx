import React, { useState } from "react";
import { Container } from "./Container";
import GameOver from "./GameOver";
import Rules from "./Rules";
import TeacherControls from "./TeacherControls";

enum GameState {
  MENU,
  GAME,
  GAME_OVER,
}

const GameBoard = () => {
  const [gameState, setGameState] = useState(GameState.MENU);
  const [winner, setWinner] = useState(null);

  const onCreateGameClick = () => {
    setGameState(GameState.GAME);
  };
  const onExitClick = () => {
    setGameState(GameState.MENU);
  };

  const onGameOver = (player) => {
    setGameState(GameState.GAME_OVER);
    setWinner(player)
  };

  const onRematchClick = () => {
    setGameState(GameState.GAME);
  };

  const onNewGameClick = () => {
    setGameState(GameState.MENU);
  };

  let component;
  if (gameState == GameState.MENU) {
    component = <TeacherControls onClick={onCreateGameClick} />;
  } else if (gameState == GameState.GAME_OVER) {
    component = (
      <GameOver
        winner={winner}
        onRematchClick={onRematchClick}
        onNewGameClick={onNewGameClick}
      />
    );
  } else {
    component = <Container onExitClick={onExitClick} onGameOver={onGameOver} />; // Game
  }
  return (
    <div>
      <h1 className="text-lg"> Tic Tac Toe</h1>

      <div className="pt-4">{component}</div>
    </div>
  );
};

export default GameBoard;
