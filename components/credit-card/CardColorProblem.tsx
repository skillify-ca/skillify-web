import React from "react";
import { CardColorProblemData } from "../../pages/api/credit-card/CardColorProblemData";
import FinanceCard from "./FinanceCard";

interface CardColorProps {
  cardQ1: string;
  setCardQ1: (value: string) => void;
  cardA1: number;
  setCardA1: (value: number) => void;
  isCardCorrectQ1: boolean;
  setIsCardCorrectQ1: (value: boolean) => void;
  cardQ2: string;
  setCardQ2: (value: string) => void;
  cardA2: number;
  setCardA2: (value: number) => void;
  isCardCorrectQ2: boolean;
  setIsCardCorrectQ2: (value: boolean) => void;
  cardQ3: string;
  setCardQ3: (value: string) => void;
  cardA3: number;
  setCardA3: (value: number) => void;
  isCardCorrectQ3: boolean;
  setIsCardCorrectQ3: (value: boolean) => void;
  cardQ4: string;
  setCardQ4: (value: string) => void;
  cardA4: number;
  setCardA4: (value: number) => void;
  isCardCorrectQ4: boolean;
  setIsCardCorrectQ4: (value: boolean) => void;
  cardQ5: string;
  setCardQ5: (value: string) => void;
  cardA5: number;
  setCardA5: (value: number) => void;
  isCardCorrectQ5: boolean;
  setIsCardCorrectQ5: (value: boolean) => void;
  cardQ6: string;
  setCardQ6: (value: string) => void;
  cardA6: number;
  setCardA6: (value: number) => void;
  isCardCorrectQ6: boolean;
  setIsCardCorrectQ6: (value: boolean) => void;
  cardQ7: string;
  setCardQ7: (value: string) => void;
  cardA7: number;
  setCardA7: (value: number) => void;
  isCardCorrectQ7: boolean;
  setIsCardCorrectQ7: (value: boolean) => void;
  cardQ8: string;
  setCardQ8: (value: string) => void;
  cardA8: number;
  setCardA8: (value: number) => void;
  isCardCorrectQ8: boolean;
  setIsCardCorrectQ8: (value: boolean) => void;
  cardQ9: string;
  setCardQ9: (value: string) => void;
  cardA9: number;
  setCardA9: (value: number) => void;
  isCardCorrectQ9: boolean;
  setIsCardCorrectQ9: (value: boolean) => void;
  cardQ10: string;
  setCardQ10: (value: string) => void;
  cardA10: number;
  setCardA10: (value: number) => void;
  isCardCorrectQ10: boolean;
  setIsCardCorrectQ10: (value: boolean) => void;
}

const CardColorProblem = ({
  cardQ1,
  setCardQ1,
  cardA1,
  setCardA1,
  isCardCorrectQ1,
  setIsCardCorrectQ1,
  cardQ2,
  setCardQ2,
  cardA2,
  setCardA2,
  isCardCorrectQ2,
  setIsCardCorrectQ2,
  cardQ3,
  setCardQ3,
  cardA3,
  setCardA3,
  isCardCorrectQ3,
  setIsCardCorrectQ3,
  cardQ4,
  setCardQ4,
  cardA4,
  setCardA4,
  isCardCorrectQ4,
  setIsCardCorrectQ4,
  cardQ5,
  setCardQ5,
  cardA5,
  setCardA5,
  isCardCorrectQ5,
  setIsCardCorrectQ5,
  cardQ6,
  setCardQ6,
  cardA6,
  setCardA6,
  isCardCorrectQ6,
  setIsCardCorrectQ6,
  cardQ7,
  setCardQ7,
  cardA7,
  setCardA7,
  isCardCorrectQ7,
  setIsCardCorrectQ7,
  cardQ8,
  setCardQ8,
  cardA8,
  setCardA8,
  isCardCorrectQ8,
  setIsCardCorrectQ8,
  cardQ9,
  setCardQ9,
  cardA9,
  setCardA9,
  isCardCorrectQ9,
  setIsCardCorrectQ9,
  cardQ10,
  setCardQ10,
  cardA10,
  setCardA10,
  isCardCorrectQ10,
  setIsCardCorrectQ10,
}: CardColorProps) => {
  const valueArr = [
    cardQ1,
    cardQ2,
    cardQ3,
    cardQ4,
    cardQ5,
    cardQ6,
    cardQ7,
    cardQ8,
    cardQ9,
    cardQ10,
  ];
  const setValueArr = [
    setCardQ1,
    setCardQ2,
    setCardQ3,
    setCardQ4,
    setCardQ5,
    setCardQ6,
    setCardQ7,
    setCardQ8,
    setCardQ9,
    setCardQ10,
  ];

  const correctArr = [
    isCardCorrectQ1,
    isCardCorrectQ2,
    isCardCorrectQ3,
    isCardCorrectQ4,
    isCardCorrectQ5,
    isCardCorrectQ6,
    isCardCorrectQ7,
    isCardCorrectQ8,
    isCardCorrectQ9,
    isCardCorrectQ10,
  ];

  const setCorrectArr = [
    setIsCardCorrectQ1,
    setIsCardCorrectQ2,
    setIsCardCorrectQ3,
    setIsCardCorrectQ4,
    setIsCardCorrectQ5,
    setIsCardCorrectQ6,
    setIsCardCorrectQ7,
    setIsCardCorrectQ8,
    setIsCardCorrectQ9,
    setIsCardCorrectQ10,
  ];

  const setPointArr = [
    setCardA1,
    setCardA2,
    setCardA3,
    setCardA4,
    setCardA5,
    setCardA6,
    setCardA7,
    setCardA8,
    setCardA9,
    setCardA10,
  ];
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 p-12 gap-4">
        <div>
          <h1 className="text-3xl font-bold uppercase">Credit or Debit</h1>
        </div>
        {CardColorProblemData.map((item, index) => (
          <FinanceCard
            key={index}
            question={item.question}
            answer={item.answer}
            value={valueArr[index]}
            setValue={setValueArr[index]}
            isCorrect={correctArr[index]}
            setIsCorrect={setCorrectArr[index]}
            getPoint={setPointArr[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default CardColorProblem;
