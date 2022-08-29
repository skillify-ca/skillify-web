import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import { name } from "../../pages/api/names";
import { fruitsMap } from "../../pages/api/WordProblemModelObjects";
import { nameSelector } from "../../pages/api/labs/questionGenerators/wordProblemQuestion";
import { getRandomItemFromMap } from "../../pages/api/labs/questionGenerators/wordProblemQuestion";

export interface UnitPriceQuestionProps {
  total: number;
  numberOfObjects: number;
  submitGuess: (guess: GuessData) => void;
  answer: string;
  name: string;
  singularFruit: string;
  pluralFruit: string;
  image: string;
}

const UnitPriceQuestion: React.FC<UnitPriceQuestionProps> = ({
  total,
  numberOfObjects,
  submitGuess,
  answer,
  name,
  singularFruit,
  pluralFruit,
  image,
  ...props
}) => {
  const onSubmit = (guess: string) => {
    submitGuess({
      guess: guess.toString(),
      isCorrect: guess === answer,
    });
    setGuess("");
  };

  /** Reference user input and store it in a state, then clear input values by next question */
  const [guess, setGuess] = useState("");
  useEffect(() => {
    (document.getElementById("input") as HTMLInputElement).value = "";
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2 py-4 overflow-y-hidden max-h-96">
        <p>
          Find the unit price of the item by rounding to the nearest integer.{" "}
          <span className="italic">after</span> calculating.
        </p>
        {""}
        <p className="pl-10">
          {name} has {""}
          <span className="font-bold">{total}</span> {pluralFruit}, and they
          cost {""}
          <span className="font-bold">
            {""}${numberOfObjects}.
          </span>
        </p>
        {""}
        <div>
          <div>
            {" "}
            <p className="mb-2">
              The unit price of each {singularFruit} is approximately
            </p>
            <div className="flex items-center justify-center">
              <p className=" flex flex-row mb-2">
                $
                <input
                  id="input"
                  type="number"
                  value={guess}
                  className="w-20 font-bold text-right border-2 border-gray-300"
                  onChange={(e) => setGuess(e.target.value)}
                ></input>
              </p>
              <img src={image} className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap justify-center">
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

export default UnitPriceQuestion;
