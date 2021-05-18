import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";

export interface FillBlankProp {
  displayQuestion: string;
  step1: Question;
  step2: Question;
  step3: Question;
  submitGuess: (guess: GuessData) => void;
}

export const FillBlank: React.FC<FillBlankProp> = ({
  displayQuestion,
  step1,
  step2,
  step3,
  submitGuess,
  ...props
}) => {
  const [guess, setGuess] = useState("");
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    setGuess("");
    submitGuess({ guess: guess, isCorrect: guess === step3.answer });
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4m font-semibold text-center"> {displayQuestion} </h1>
      <p>
        {step1.text.substring(0, 20)}{" "}
        <input
          spellCheck="false"
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-8"
        ></input>
        {step1.text.substring(22)}
      </p>
      <p>
        {" "}
        {step2.text.substring(0, 8)}
        <input
          spellCheck="false"
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-8"
        ></input>
        {step2.text.substring(10)}
      </p>
      <p>
        {" "}
        {step3.text.substring(0, 7)}
        <input
          spellCheck="false"
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-8"
        ></input>
      </p>
      <p>
        {" "}
        ={" "}
        <input
          spellCheck="false"
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-8"
        ></input>{" "}
      </p>
    </div>
  );
};