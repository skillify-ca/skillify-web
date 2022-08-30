import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";
// import { name } from "../../pages/api/names";
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

  // Fix & understand
  const onSubmit = () => {
    submitGuess({
      guess: guess.toString(),
      isCorrect: guess === answer,
    }),
      setGuess("");
  };

  // Fix & understand
  const [guess, setGuess] = useState("");
  

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
    }
  };

  personName = "Jerry";
  commission = 12;
  price = 5000;
  numberOfSales = 1;


  return(
    <div className="flex flex-col items-center gap-4">
      <p>{personName} earns {commission}% interest for every contract they sell. 
      If they sell a house for ${price}, how much in commission did they earn?</p>

{/*       <input
          id="input"
          // type="number"
          value={guess}
          className=
          // "w-20 font-bold text-right border-2 border-gray-300"
          // "flex flex-wrap justify-center w-full text-2xl"
          "w-full py-4 text-center bg-white border rounded-md shadow-lg appearance-none sm:w-64 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
          onChange={(e) => setGuess(e.target.value)}
      ></input> */}

      <div className="flex justify-center w-full">
        <Input
          value={guess}
          setValue={setGuess}
          handleKeypress={handleKeypress}
        />
      </div>
      
      <Button
          onClick={onSubmit}
          label="Submit"
          backgroundColor="blue"
          textColor="white"
        />

    </div>
  );
};


export default CommissionQuestion;