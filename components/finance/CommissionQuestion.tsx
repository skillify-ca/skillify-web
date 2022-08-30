import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export interface CommissionQuestionProps{
    personName: string;
    commission: number;
    price: number;
    numberOfSales: number;
    submitGuess: (guess: GuessData) => void;
    image1: string;
    answer: string;
    text: string;
}

const CommissionQuestion: React.FC<CommissionQuestionProps> = ({
  personName,
  commission,
  price,
  numberOfSales,
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
    // triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
    }
  };

  return(
    <div className="flex flex-col items-center gap-5">

      <p>
        {personName} earns <b>{commission}%</b> interest for every house they sell. 
        If they sell <b>{numberOfSales}</b> house(s) for <b>${price} each</b>, how much commission 
        did they earn?
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


export default CommissionQuestion;