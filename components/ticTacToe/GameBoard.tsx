import React, { useEffect, useState } from "react";
import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";
import { Container } from "./Container";
import GameOver from "./GameOver";
import TeacherControls from "./TeacherControls";
import "react-simple-hook-modal/dist/styles.css";
import * as Colyseus from "colyseus.js";

enum GameState {
  MENU,
  GAME,
  GAME_OVER,
}

const GameBoard = () => {
  const [gameState, setGameState] = useState(GameState.MENU);
  const [winner, setWinner] = useState(null);
  const [targetNumber, setTargetNumber] = useState(15);
  const [gameNumbers, setGameNumbers] = useState("1,2,3,4,5,6,7,8,9");
  const [playerOne, setPlayerOne] = useState("Player One");
  const [playerTwo, setPlayerTwo] = useState("Player Two");

  const onCreateGameClick = ({ target, gameNumbers, playerOne, playerTwo }) => {
    setGameState(GameState.GAME);
    setTargetNumber(target);
    setGameNumbers(gameNumbers);
    setPlayerOne(playerOne);
    setPlayerTwo(playerTwo);
  };
  const onExitClick = () => {
    setGameState(GameState.MENU);
  };

  const { isModalOpen, openModal, closeModal } = useModal();

  const onGameOver = (player) => {
    //setGameState(GameState.GAME_OVER);
    openModal();
    setWinner(player);
  };

  const onRematchClick = () => {
    setGameState(GameState.GAME);
    closeModal();
  };

  const onNewGameClick = () => {
    setGameState(GameState.MENU);
    closeModal();
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
    component = (
      <Container
        onExitClick={onExitClick}
        onGameOver={onGameOver}
        target={targetNumber}
        gameNumbers={gameNumbers}
        playerOne={playerOne}
        playerTwo={playerTwo}
      />
    ); // Game
  }
  return (
    <div className="container">
      <div className="pt-4">{component}</div>
      <Modal
        id="game-over-model"
        isOpen={isModalOpen}
        transition={ModalTransition.SCALE}
      >
        <GameOver
          winner={winner}
          onRematchClick={onRematchClick}
          onNewGameClick={onNewGameClick}
        />
      </Modal>
    </div>
  );
};

export default GameBoard;
