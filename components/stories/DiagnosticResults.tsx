import React, { useRef, useState } from "react";

type DiagnosticResultsProps = {
  correctGuesses: number;
};

const DiagnosticResults = ({ correctGuesses }: DiagnosticResultsProps) => {
  return <div> {correctGuesses} </div>;
};

export default DiagnosticResults;
