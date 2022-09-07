import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";

export interface AlgebraSolveVariableProps {
  variableLetter: string;
  submitGuess: (guess: GuessData) => void;
  answer: string;
  text: string;
}

const AlgebraSolveVariable: React.FC<AlgebraSolveVariableProps> = ({
  variableLetter,
  submitGuess,
  answer,
  text,
}) => {
  return(21);
};

export default AlgebraSolveVariable;
