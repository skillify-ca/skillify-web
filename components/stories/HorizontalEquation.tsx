import React, { useState } from "react";
import { Button } from "./Button";

export interface HorizontalEquationProp {
  question?: string;
  submitGuess: (e) => void;
}

/**
 * Primary UI component for user interaction
 */
export const HorizontalEquation: React.FC<HorizontalEquationProp> = ({
  question,
  submitGuess,
  ...props
}) => {
  const [guess, setGuess] = useState('');
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      submitGuess(e);
    }
  };
  return (
    <div className="flex flex-col gap-4 justify-between h-full">
      <p className="text-6xl w-full flex-grow flex justify-center items-center">{question}</p>
      <input
        id="guess"
        type="number"
        autoComplete="off"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="appearance-none relative block px-3 py-4 text-center border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 bg-blue-100 focus:z-10 sm:text-sm"
        placeholder="Enter Answer"
        onKeyPress={handleKeypress}
      />

      <Button
        onClick={submitGuess}
        label="Submit"
        backgroundColor="blue"
        textColor="white"
      />
    </div>
  );
};
