import React from "react";

export interface InputProps {
  guess: string;
  setGuess: (string) => void;
  handleKeypress?: (e) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input: React.FC<InputProps> = ({
  guess,
  setGuess,
  handleKeypress,
}) => {
  return (
    <input
      autoFocus
      id="guess"
      type="number"
      autoComplete="off"
      value={guess}
      onChange={(e) => setGuess(e.target.value)}
      className="w-full sm:w-64 appearance-none py-4 text-center border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 bg-blue-100 focus:z-10 sm:text-sm"
      placeholder="Enter Answer"
      onKeyPress={handleKeypress}
    />
  );
};
