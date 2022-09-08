import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { VisualDotsQuestion } from "../../pages/api/labs/questionGenerators/visualDotsQuestion";
import DiceDots from "../math/dots/DiceDots";
import DualColourDots from "../math/dots/DualColourDots";
import NumberLiteral from "../math/dots/NumberLiteral";
import { TenFrame } from "../math/dots/TenFrames";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export interface VisualAdditionProp {
  submitGuess: (guess: GuessData) => void;
  question: VisualDotsQuestion;
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
    <div className="flex flex-col items-center p-8">
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

        <p className="p-4 text-5xl font-bold">+</p>
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
      <div className="flex flex-row space-x-32">
        <NumberLiteral num={parseInt(parse(question).first)} />

        <NumberLiteral num={parseInt(parse(question).second)} />
      </div>
      <div className="flex flex-col p-4 space-y-4">
        <Input
          value={guess}
          setValue={setGuess}
          handleKeypress={handleKeypress}
        />
        <Button
          label="Submit"
          backgroundColor="blue"
          textColor="white"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};
