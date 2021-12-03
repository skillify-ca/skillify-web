import React, { useState } from "react";

interface FinanceMultipleChoiceProps {
  question: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
}

export const FinanceMultipleChoice = ({
  question,
  options,
  value,
  setValue,
}: FinanceMultipleChoiceProps) => {
  const [selectedOption, setSelectedOption] = useState();

  const buttonHandler = (index, e) => {
    setSelectedOption(index);
    setValue(e.target.value);
    console.log(value);
    console.log(e.target.value);
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
              index === selectedOption ? "font-extrabold" : "font-normal"
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
