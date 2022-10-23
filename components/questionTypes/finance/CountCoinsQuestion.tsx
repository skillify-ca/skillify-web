import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { Coin, CoinType } from "./Coin";
import { Input } from "../../ui/Input";
import { GuessData } from "../../../pages/api/guessData";
import { CountingCoinsQuestion } from "../../../pages/api/labs/questionGenerators/coinsQuestionsGenerator";
import { setConfig } from "next/config";

export type CountCoinsQuestionProps = {
  coins: CoinType[];
  submitGuess: (guess: GuessData) => void;
  answer: string;
};

export const CountCoinsQuestion: React.FC<CountCoinsQuestionProps> = ({
  coins,
  submitGuess,
  answer,
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
    <div className="flex flex-col items-center space-y-8 ">
      <h1>How much money is there?</h1>
      <div className="flex flex-wrap justify-center w-108">
        {coins.map((coin) => (
          <Coin coinType={coin} />
        ))}
      </div>
      <div className="flex items-center flex-start">
        <p className="text-2xl">$</p>
        <Input
          value={guess}
          setValue={setGuess}
          handleKeypress={handleKeypress}
        />
      </div>
      <div>
        <Button
          onClick={onSubmit}
          label="Submit"
          backgroundColor="blue"
          textColor="white"
        />
      </div>
    </div>
  );
};

export default CountCoinsQuestion;
