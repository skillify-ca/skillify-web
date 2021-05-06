import React, { useState } from "react";
import { Button } from "./Button";

export interface VerticalEquationProp {
  question?: string;
  operator: string;
  submitGuess: (e) => void;
}

/**
 * Primary UI component for user interaction
 */
export const VerticalEquation: React.FC<VerticalEquationProp> = ({
  question,
  operator,
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
  const parse = () => {
    const parts = question.split(" ");
    return {
      first: parts[0],
      second: parts[2],
    };
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="text-8xl flex flex-col flex-end items-end border-b-8 border-blue-900">
        <p className="align-right">{parse().first}</p>
        <div className="flex">
          <p>{operator}</p>
          <p>{parse().second}</p>
        </div>

      </div>
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
