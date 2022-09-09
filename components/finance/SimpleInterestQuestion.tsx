import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export interface SimpleInterestQuestionProps {
  personName: string;
  principalAmount: number;
  interestRate: number;
  time: number;
  submitGuess: (guess: GuessData) => void;
  image1: string;
  answer: string;
  text: string;
}

const SimpleInterestQuestion: React.FC<SimpleInterestQuestionProps> = ({
  personName,
  principalAmount,
  interestRate,
  time,
  submitGuess,
  image1,
  answer,
  text,
}) => {
  const onSubmit = () => {
    submitGuess({
      guess: guess.toString(),
      isCorrect: guess === answer,
    }),
      setGuess("");
  };

  const [guess, setGuess] = useState("");

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <p>
        {personName} made an investment of <b>${principalAmount}</b> that earned{" "}
        <b>{interestRate}%</b>interest per year. After <b>{time}</b> year(s),
        what is the total simple interest that will have been earned on the
        investment?
      </p>

      <div className="flex justify-center items-center w-full gap-2">
        <p className="text-3xl font-semibold text-green-600">$</p>
        <Input
          value={guess}
          setValue={setGuess}
          handleKeypress={handleKeypress}
        />
      </div>

      <Button
        onClick={onSubmit}
        label="Submit"
        backgroundColor="green"
        textColor="white"
      />
    </div>
  );
};

export default SimpleInterestQuestion;
