import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

export interface TrueorFalseProp {
  // eslint-disable-next-line no-unused-vars
  submitGuess: (guess: GuessData) => void;
  answer: boolean;
  text: string;
}

export const TrueorFalse: React.FC<TrueorFalseProp> = ({
  submitGuess,
  answer,
  text,
}) => {
  const onSubmit = (guess: boolean) => {
    submitGuess({
      guess: guess.toString(),
      isCorrect:
        guess.toString().toLocaleLowerCase() ==
        (answer ? "True" : "False").toString().toLocaleLowerCase(),
    });
  };

  return (
    <div className="flex flex-col items-center space-y-16">
      <p className="text-4xl">{text}</p>
      <div className="flex flex-row space-x-4 item-center ">
        <Button
          label="True"
          backgroundColor="green"
          onClick={() => onSubmit(true)}
        />
        <Button
          label="False"
          backgroundColor="red"
          onClick={() => onSubmit(false)}
        />
      </div>
    </div>
  );
};
