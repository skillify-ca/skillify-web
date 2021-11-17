import React, { useState } from "react";

type MultiLineProps = {
  guessStringA: string;
  guessStringB: string;
  guessStringC: string;
  guessStringD: string;
  guessStringE: string;
  guessStringF?: string;
  onGuessChangedA: (guess: string) => void;
  onGuessChangedB: (guess: string) => void;
  onGuessChangedC: (guess: string) => void;
  onGuessChangedD: (guess: string) => void;
  onGuessChangedE: (guess: string) => void;
  onGuessChangedF?: (guess: string) => void;
};

const MutliLineInput = ({
  guessStringA,
  guessStringB,
  guessStringC,
  guessStringD,
  guessStringE,
  guessStringF,
  onGuessChangedA,
  onGuessChangedB,
  onGuessChangedC,
  onGuessChangedD,
  onGuessChangedE,
  onGuessChangedF,
}: MultiLineProps) => {
  return (
    <>
      <div className="text-center">
        <label>A</label>
        <input
          className="p-4 text-lg"
          placeholder=""
          value={guessStringA}
          onChange={(e) => onGuessChangedA(e.target.value)}
        />
      </div>
      <div className="text-center">
        <label>B</label>
        <input
          className="p-4 text-lg"
          placeholder=""
          value={guessStringB}
          onChange={(e) => onGuessChangedB(e.target.value)}
        />
      </div>
      <div className="text-center">
        <label>C</label>
        <input
          className="p-4 text-lg"
          placeholder=""
          value={guessStringC}
          onChange={(e) => onGuessChangedC(e.target.value)}
        />
      </div>
      <div className="text-center">
        <label>D</label>
        <input
          className="p-4 text-lg"
          placeholder=""
          value={guessStringD}
          onChange={(e) => onGuessChangedD(e.target.value)}
        />
      </div>
      <div className="text-center">
        <label>E</label>
        <input
          className="p-4 text-lg"
          placeholder=""
          value={guessStringE}
          onChange={(e) => onGuessChangedE(e.target.value)}
        />
      </div>
      {guessStringF != null && (
        <div className="text-center">
          <label>F</label>
          <input
            className="p-4 text-lg"
            placeholder=""
            value={guessStringF}
            onChange={(e) => onGuessChangedF(e.target.value)}
          />
        </div>
      )}
    </>
  );
};

export default MutliLineInput;
