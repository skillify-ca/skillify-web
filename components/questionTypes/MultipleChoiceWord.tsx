import React, { ReactNode } from "react";
import { MCOption } from "../../pages/api/question";
import { Button } from "../ui/Button";

export interface MultipleChoiceWordProp {
  options: MCOption[];
  answer: string;
  submitGuess: (e) => void;
  children: ReactNode;
}

export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const MultipleChoiceWord: React.FC<MultipleChoiceWordProp> = ({
  options,
  answer,
  submitGuess,
  children,
}) => {
  const onSubmit = (guess: string) => {
    submitGuess(guess);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl p-8 my-16 bg-slate-300">
      {children}
      <div className="grid grid-cols-2 space-x-4 item-center ">
        {options[0] && (
          <div
            onClick={() => onSubmit(options[0].id)}
            className="flex flex-col justify-around w-full p-4 px-4 mt-4 bg-orange-500 border-b-4 border-orange-900 rounded-lg cursor-pointer bg-gradient-to-b via-orange-400 to-orange-500 hover:bg-orange-400"
          >
            <img className="object-cover w-full h-64" src={options[0].image} />
            <p className="p-4 mt-4 font-bold text-center text-white bg-murkrow">
              {options[0].text}
            </p>
          </div>
        )}
        {options[1] && (
          <div
            onClick={() => onSubmit(options[1].id)}
            className="flex flex-col justify-around w-full p-4 px-4 mt-4 bg-purple-500 border-b-4 border-purple-900 rounded-lg cursor-pointer bg-gradient-to-b via-purple-400 to-purple-500 hover:bg-purple-400"
          >
            <img className="object-cover w-full h-64" src={options[1].image} />
            <p className="p-4 font-bold text-center text-white bg-murkrow">
              {options[1].text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
