import React from "react";

export interface InputProps {
  autoFocus?: boolean;
  value: string;
  setValue: (string) => void;
  handleKeypress?: (e) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input: React.FC<InputProps> = ({
  autoFocus = true,
  value: guess,
  setValue: setGuess,
  handleKeypress,
}) => {
  return (
    <input
      autoFocus={autoFocus}
      id="guess"
      type="number"
      autoComplete="off"
      value={guess}
      onChange={(e) => setGuess(e.target.value)}
      className="w-full py-4 text-center bg-blue-100 border rounded-md shadow-md appearance-none sm:w-64 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
      placeholder="Enter Answer"
      onKeyPress={handleKeypress}
    />
  );
};
