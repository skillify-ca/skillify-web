import React, { useState } from "react";

interface FinanceMultipleChoiceProps {
  question: string;
  options: string[];
  answer: string;
  value: string;
  setValue: (value: string) => void;
  point: number;
  getPoint: (value: number) => void;
  isCorrect: boolean;
  setIsCorrect: (value: boolean) => void;
}

export const FinanceMultipleChoice = ({
  question,
  options,
  answer,
  value,
  setValue,
  point,
  getPoint,
  isCorrect,
  setIsCorrect,
}: FinanceMultipleChoiceProps) => {
  const [selectedOption, setSelectedOption] = useState();

  const buttonHandler = (index, e) => {
    setSelectedOption(index);
    setValue(e.target.textContent);
    if (answer === e.target.textContent) {
      getPoint(1);
    } else {
      getPoint(0);
      setIsCorrect(false);
    }
  };

  return (
    <div className="px-12 mb-12">
      <div className="flex text-center mb-12">
        <img
          className="md: mr-4 hidden md:block w-12"
          src="/images/credit-card/exclamation-mark.svg"
        />
        <span className="text-3xl text-purple-800 font-bold">{question}</span>
      </div>
      <ul className="px-12">
        {options.map((option, index) => (
          <li
            className={`${
              index === selectedOption
                ? isCorrect
                  ? "text-green-500 font-extrabold"
                  : "font-extrabold"
                : "font-normal"
            } list-decimal text-2xl mb-12`}
            onClick={(e) => buttonHandler(index, e)}
            value={value}
            key={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
