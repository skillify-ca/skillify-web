import React from "react";

export interface EqualGroupsInputProps {
  guess: string;
  autofocus: boolean;
  setGuess: (string) => void;
  handleKeypress?: (e) => void;
  disabled?: boolean;
}

/**
 * Input tag for Multiplication By Equal Group questions
 */
export const EqualGroupsInput: React.FC<EqualGroupsInputProps> = ({
  guess,
  autofocus,
  setGuess,
  handleKeypress,
  disabled = false,
}) => {
  return (
    <input
      autoFocus={autofocus}
      disabled={disabled}
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
