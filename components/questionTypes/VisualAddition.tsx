import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import DiceDots from "../dots/DiceDots";
import DualColourDots from "../dots/DualColourDots";
import NumberLiteral from "../dots/NumberLiteral";
import { TenFrame } from "../dots/TenFrames";
import { Input } from "../ui/Input";

export interface VisualAdditionProp {
  submitGuess: (guess: GuessData) => void;
  question: Question;
  visualDisplay: number;
}

export const VisualAddition: React.FC<VisualAdditionProp> = ({
  submitGuess,
  question,
  visualDisplay,
}) => {
  const parse = (question) => {
    const parts = question.text && question.text.split(" ");
    return {
      first: parts && parts[0],
      second: parts && parts[2],
    };
  };

  const [guess, setGuess] = useState("");
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    submitGuess({
      guess: guess,
      isCorrect: guess === question.answer,
    });
    setGuess("");
  };
  return (
    <div className="flex flex-col gap-4 items-center p-8">
      <div className="flex flex-row items-center p-2">
        {visualDisplay == 0 ? (
          <TenFrame num={parseInt(parse(question).first)} />
        ) : visualDisplay == 1 ? (
          <DiceDots value={parseInt(parse(question).first)} />
        ) : visualDisplay == 2 ? (
          <DualColourDots value={parseInt(parse(question).first)} />
        ) : (
          // <ArbitraryDots value={parseInt(parse(question).first)} /> //error generating
          ""
        )}

        <p className="text-5xl font-bold p-4">+</p>
        {visualDisplay == 0 ? (
          <TenFrame num={parseInt(parse(question).second)} />
        ) : visualDisplay == 1 ? (
          <DiceDots value={parseInt(parse(question).second)} />
        ) : visualDisplay == 2 ? (
          <DualColourDots value={parseInt(parse(question).second)} />
        ) : (
          // <ArbitraryDots value={parseInt(parse(question).second)} /> //error generatings
          ""
        )}
      </div>
      <div className="flex flex-row gap-32">
        <NumberLiteral num={parseInt(parse(question).first)} />

        <NumberLiteral num={parseInt(parse(question).second)} />
      </div>
      <div className="p-4">
        <Input
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
      </div>
    </div>
  );
};
