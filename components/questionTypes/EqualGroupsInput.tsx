import React from "react";

export interface EqualGroupsInputProps {
  guess: string;
  setGuess: (string) => void;
  handleKeypress?: (e) => void;
}

/**
 * Input tag for Multiplication By Equal Group questions
 */
export const EqualGroupsInput: React.FC<EqualGroupsInputProps> = ({
  guess,
  setGuess,
  handleKeypress,
}) => {
  return (
    <input
      autoFocus
      id="guess"
      type="number"
      value={guess}
      onChange={(e) => setGuess(e.target.value)}
      className="appearance-none relative block w-16 h-8 px-3 py-4 text-center border rounded-md shadow-md focus:outline-none bg-blue-100 sm:text-sm"
      placeholder=" "
      onKeyPress={handleKeypress}
    />
  );
};
