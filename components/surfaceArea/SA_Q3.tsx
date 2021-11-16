import { isBoolean } from "lodash";
import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import MutliLineInput from "./MultiTextInput";

type Q3Props = {
  displayQuestion: string;
  imagePath: string;
  nextQuestion: (guess: GuessData) => void;
};

//Future component, name: TypeAnswerQuestion
const Q3 = ({ displayQuestion, imagePath, nextQuestion }: Q3Props) => {
  const [guessStringA, setGuessStringA] = useState<string>("");
  const [guessStringB, setGuessStringB] = useState<string>("");
  const [guessStringC, setGuessStringC] = useState<string>("");
  const [guessStringD, setGuessStringD] = useState<string>("");
  const [guessStringE, setGuessStringE] = useState<string>("");

  const answerA = "Base 1";
  const answerB = "Base 2";
  const answerC = "Face 1";
  const answerD = "Face 2";
  const answerE = "Face 3";

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

  const onSubmit = () => {
    const guessString = `${guessStringA} , ${guessStringB} , ${guessStringC}, ${guessStringD}, ${guessStringE}`;
    const answerString = `${answerA} , ${answerB} , ${answerC}, ${answerD}, ${answerE}`;
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
            src={imagePath}
            width="800"
            height="400"
          ></img>
        </div>
        <MutliLineInput
          guessStringA={guessStringA}
          guessStringB={guessStringB}
          guessStringC={guessStringC}
          guessStringD={guessStringD}
          guessStringE={guessStringE}
          onGuessChangedA={onGuessChangedA}
          onGuessChangedB={onGuessChangedB}
          onGuessChangedC={onGuessChangedC}
          onGuessChangedD={onGuessChangedD}
          onGuessChangedE={onGuessChangedE}
        />
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

export default Q3;
