import React from "react";

export interface LongDivisionInputProps {
  autoFocus?: boolean;
  id: string;
  guess: string;
  setGuess: (string) => void;
  handleKeypress?: (e) => void;
  width: number;
}

/**
 * Input tag in which user inputs their quotient answer (width changes according to dividend's # of digits)
 */
export const LongDivisionInput: React.FC<LongDivisionInputProps> = ({
  autoFocus = true,
  id,
  guess,
  setGuess,
  handleKeypress,
  width,
}) => {
  return (
    <input
      autoFocus={autoFocus}
      id={id}
      autoComplete="off"
      value={guess}
      onChange={(e) => setGuess(e.target.value)}
      className={`appearance-none text-left border rounded-md text-5xl lg:text-md w-full`}
      placeholder=""
      onKeyPress={handleKeypress}
    />
  );
};
