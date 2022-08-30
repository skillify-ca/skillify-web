import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";
// import { name } from "../../pages/api/names";
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

  // const onSubmit = (guess: string) => {
  //   submitGuess({
  //     guess: guess.toString(),
  //     isCorrect: guess === answer,
  //   }),
  //     setGuess("");
  // };

  // const [guess, setGuess] = useState("");
  // useEffect(() => {
  //   (document.getElementById("input") as HTMLInputElement).value = "";
  // }, []);

  return(
    <>
      Testing
    </>
  );
};


export default CommissionQuestion;