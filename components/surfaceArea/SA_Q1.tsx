import { isBoolean } from "lodash";
import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

//Future component, name: TypeAnswerQuestion
const Q1 = (displayQuestion, nextQuestion, isWrong) => {
  const [guessStringA, setGuessStringA] = useState<string>("");
  const [guessStringB, setGuessStringB] = useState<string>("");
  const [guessStringC, setGuessStringC] = useState<string>("");
  const [guessStringD, setGuessStringD] = useState<string>("");
  const [guessStringE, setGuessStringE] = useState<string>("");
  const [guessStringF, setGuessStringF] = useState<string>("");

  const answerA = "top";
  const answerB = "front";
  const answerC = "bottom";
  const answerD = "back";
  const answerE = "left side";
  const answerF = "right side";

  const onGuessChangedA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringA(newGuess);
  };

  const onGuessChangedB = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringB(newGuess);
  };

  const onGuessChangedC = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringC(newGuess);
  };

  const onGuessChangedD = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringD(newGuess);
  };

  const onGuessChangedE = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringE(newGuess);
  };

  const onGuessChangedF = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringF(newGuess);
  };

  const onSubmit = () => {
    const guessString = `${guessStringA} , ${guessStringB} , ${guessStringC}, ${guessStringD}, ${guessStringE}, ${guessStringF}`;
    const answerString = `${answerA} , ${answerB} , ${answerC}, ${answerD}, ${answerE}, ${answerF}`;
    const guess: GuessData = {
      guess: guessString,
      isCorrect: guessString == answerString,
    };

    nextQuestion(guess);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <p className="text-2xl text-center">{displayQuestion}</p>
        <div id="quizImage">
          <img
            className="animate-fadeIn"
            src="/images/surfaceArea/SA_Q1_image.png"
          ></img>
        </div>
        <div className="text-center">
          <label>A</label>
          <input
            className="p-4 text-lg"
            placeholder=""
            value={guessStringA}
            onChange={(e) => onGuessChangedA(e.target.value)}
          />
        </div>
        <div className="text-center">
          <label>B</label>
          <input
            className="p-4 text-lg"
            placeholder=""
            value={guessStringB}
            onChange={(e) => onGuessChangedB(e.target.value)}
          />
        </div>
        <div className="text-center">
          <label>C</label>
          <input
            className="p-4 text-lg"
            placeholder=""
            value={guessStringC}
            onChange={(e) => onGuessChangedC(e.target.value)}
          />
        </div>
        <div className="text-center">
          <label>D</label>
          <input
            className="p-4 text-lg"
            placeholder=""
            value={guessStringD}
            onChange={(e) => onGuessChangedD(e.target.value)}
          />
        </div>
        <div className="text-center">
          <label>E</label>
          <input
            className="p-4 text-lg"
            placeholder=""
            value={guessStringE}
            onChange={(e) => onGuessChangedE(e.target.value)}
          />
        </div>
        <div className="text-center">
          <label>F</label>
          <input
            className="p-4 text-lg"
            placeholder=""
            value={guessStringF}
            onChange={(e) => onGuessChangedF(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <Button
            label="Submit"
            backgroundColor="blue"
            textColor="white"
            onClick={onSubmit}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Q1;
