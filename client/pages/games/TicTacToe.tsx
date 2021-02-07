import React, { useState } from "react";
import NumberPool from "../../components/NumberPool"
import GameBoard from "../../components/GameBoard"
import { Container } from "../../components/Container";

const TicTacToe = () => {
  return <div>
      
      <NumberPool/>
      <GameBoard/>
      <Container/>


  </div>;
};

export default TicTacToe;
