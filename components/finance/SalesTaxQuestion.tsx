import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";
import { name } from "../../pages/api/names";
import { Button } from "../ui/Button";

export interface SalesTaxQuestionProps {
  personName: string;
  number: number;
  taxRate: number;
  price: number;
  submitGuess: (guess: GuessData) => void;
  oneFruit: string;
  multipleFruit: string;
  image2: string;
  answer: string;
  text: string;
}

const SalesTaxQuestion: React.FC<SalesTaxQuestionProps> = ({
  personName,
  price,
  number,
  taxRate,
  submitGuess,
  image2,
  oneFruit,
  multipleFruit,
  answer,
  text,
}) => {
  onSubmit = (guess: string) => {
    submitGuess({
      guess: guess.toString(),
      isCorrect: guess === answer,
    }),
      setGuess("");
  };
  const [guess, setGuess] = useState("");
  useEffect(() => {
    (document.getElementById("input") as HTMLInputElement).value = "";
  }, []);
  return (
    <div>
      <div className="">
        <p>
          Find the sales tax on a piece of fruit by rounding to two decimal
          places. <span className="italic">after</span>
          you make your final calculations.
        </p>
        {""}
        <p className="pl-10">
          {personName} intends to purchase {number}{" "}
        </p>
      </div>
    </div>
  );
};

export default SalesTaxQuestion;
