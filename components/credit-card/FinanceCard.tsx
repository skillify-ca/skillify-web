import React, { useState } from "react";

export interface FinanceCardProps {
  question: string;
  answer: string;
  value?: string;
  setValue?: (value: string) => void;
  isCorrect?: boolean;
  setIsCorrect?: (value: boolean) => void;
  getPoint?: (value: number) => void;
}

const FinanceCard = ({
  question,
  answer,
  value,
  setValue,
  isCorrect,
  setIsCorrect,
  getPoint,
}: FinanceCardProps) => {
  const [color, setColor] = useState("bg-gray-300");
  const [borderColor, setBorderColor] = useState("border-gray-500");
  const [cardTitle, setCardTitle] = useState("Click to Change");

  const onChange = () => {
    if (color === "bg-gray-300" || color === "bg-yellow-300") {
      setColor("bg-green-300");
      setBorderColor("border-green-500");
      setCardTitle("debit");
      setValue("debit");
    } else if (color === "bg-green-300") {
      setColor("bg-purple-300");
      setBorderColor("border-purple-500");
      setCardTitle("credit");
      setValue("credit");
    } else if (color === "bg-purple-300") {
      setColor("bg-yellow-300");
      setBorderColor("border-yellow-500");
      setCardTitle("both");
      setValue("both");
    }

    if (value === answer) {
      getPoint(1);
    } else {
      getPoint(0);
      setIsCorrect(false);
    }
  };

  return (
    <div
      onClick={onChange}
      className={`max-w-96 h-48 bg-grey-200 border-4 rounded-2xl ${borderColor}`}
    >
      <p className="px-4">{cardTitle.toUpperCase()}</p>
      <div className={`max-full ${color} h-8 mb-4`}></div>
      <p className="px-4">{question}</p>
      <span
        className={`${
          isCorrect ? " text-green-500 block" : "hidden"
        } flex justify-center`}
      >
        {value}
      </span>
    </div>
  );
};

export default FinanceCard;
