import React from "react";

export interface LongDivisionInputProps {
  guess: string;
  setGuess: (string) => void;
  handleKeypress?: (e) => void;
  width: number;
}

/**
 * Primary UI component for user interaction
 */
export const LongDivisionInput: React.FC<LongDivisionInputProps> = ({
  guess,
  setGuess,
  handleKeypress,
  width,
}) => {
  return (
    <input
      autoFocus
      onFocus={(e) => (e.target.value = "")}
      id="guess"
      type="text"
      autoComplete="off"
      value={guess}
      onChange={(e) => setGuess(e.target.value)}
      className={`text-left border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md w-${width}`}
      placeholder=""
      onKeyPress={handleKeypress}
    />
  );
};
