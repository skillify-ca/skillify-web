import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";
import { name } from "../../pages/api/names";
import { Button } from "../ui/Button";

export interface SalesTaxQuestionProps {
  personName: string;
  numberOfToys: number;
  taxRate: number;
  price: number;
  submitGuess: (guess: GuessData) => void;
  multipleAnimals: string;
  image1: string;
  answer: string;
  text: string;
}

const SalesTaxQuestion: React.FC<SalesTaxQuestionProps> = ({
  personName,
  price,
  numberOfToys,
  taxRate,
  submitGuess,
  image1,
  multipleAnimals,
  answer,
  text,
}) => {
  const onSubmit = (guess: string) => {
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
          Find the sales tax on a total purchase of {multipleAnimals} by
          rounding to two decimal places{""}{" "}
          <span className="italic">after {""}</span>
          you make your final calculations.
        </p>
        {""}
        <p className="pl-10">
          {personName} intends to purchase{" "}
          <span className="font-bold">{numberOfToys}</span> {multipleAnimals},
          they cost {""}
          <span className="font-bold">
            {""}${price} each{" "}
          </span>{" "}
          and the tax rate is <span className="font-bold"> {taxRate}% </span>.
          {""}
        </p>
        {""}
        <div>
          <div>
            <p>Her total sales tax is appoximately: </p>

            <div className="flex items-center justify-center">
              <p className="flex flex-row">
                $
                <input
                  id="input"
                  type="number"
                  value={guess}
                  className="w-20 font-bold text-right border-2 border-gray-300"
                  onChange={(e) => setGuess(e.target.value)}
                ></input>
              </p>
              <img src={image1} className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            backgroundColor="blue"
            textColor="white"
            label="Submit"
            onClick={() => onSubmit(guess)}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesTaxQuestion;
