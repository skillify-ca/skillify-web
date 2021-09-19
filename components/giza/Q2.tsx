import { isBoolean } from "lodash";
import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

const Q2 = (displayQuestion, nextQuestion) => {
  const [guessString, setGuessString] = useState<string>("");

  const onGuessChanged = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessString(newGuess);
  };

  /*
  Want to create a guessType object here based off the guessString where if the answer is right, will switch the isCorrect to true and false if incorrect
  This will be used in the future by nextQuestion function, which will add the guessData to the guessDataArray in djacobs.tsx
  And do this for all further questions as well
  const guessData : GuessData = (guess: String, isCorrect: null){
    guessData.guess = guess
    guessData.isCorrect 
  }
  */

  return (
    <React.Fragment>
      <p className="text-2xl text-center">{displayQuestion}</p>
      <div className="text-center">
        <label>Final Answer</label>
        <input
          className="p-4 text-lg"
          placeholder="Any degree"
          value={guessString}
          onChange={(e) => onGuessChanged(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center">
        <Button
          label="Submit"
          backgroundColor="blue"
          textColor="white"
          onClick={nextQuestion}
        />
      </div>
    </React.Fragment>
  );
};

export default Q2;
