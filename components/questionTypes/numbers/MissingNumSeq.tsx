import React, { useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";

export interface MissingNumSeqProp {
  numSeq: Array<number>;
  answer: number;
  submitGuess: (guess: GuessData) => void;
}

export const MissingNumSeq: React.FC<MissingNumSeqProp> = ({
  numSeq,
  answer,
  submitGuess,
}) => {
  const [guess, setGuess] = useState("");
  function onSubmit() {
    submitGuess({ guess: guess, isCorrect: guess == answer.toString() });
    setGuess("");
  }

  return (
    <div className=" flex flex-col items-center space-y-8">
      <h1 className="text-4m font-semibold text-center">
        Enter the Missing Number in the Sequence
      </h1>
      <div className="flex flex-row space-x-8">
        {numSeq.map((num) => {
          if (num === answer) {
            return (
              <div className="inline space-x-4 items-center">
                <input
                  className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
                  type="number"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                ></input>
                ,
              </div>
            );
          } else {
            return <div className="inline-flex">{num}, </div>;
          }
        })}
      </div>
      <Button
        onClick={onSubmit}
        label="Submit"
        textColor="white"
        backgroundColor="red"
      ></Button>
    </div>
  );
};
