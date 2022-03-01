import React from "react";
import { multiQuestionData } from "../../../pages/api/credit-card/CCDCMultiData";
import { FinanceMultipleChoice } from "./FinanceMultipleChoice";

interface MultipleChoiceWordProps {
  multiQ1: string;
  setMultiQ1: (value: string) => void;
  multiA1: number;
  setMultiA1: (value: number) => void;
  isMultiCorrectQ1: boolean;
  setIsMultiCorrectQ1: (value: boolean) => void;
  multiQ2: string;
  setMultiQ2: (value: string) => void;
  multiA2: number;
  setMultiA2: (value: number) => void;
  isMultiCorrectQ2: boolean;
  setIsMultiCorrectQ2: (value: boolean) => void;
  multiQ3: string;
  setMultiQ3: (value: string) => void;
  multiA3: number;
  setMultiA3: (value: number) => void;
  isMultiCorrectQ3: boolean;
  setIsMultiCorrectQ3: (value: boolean) => void;
  multiQ4: string;
  setMultiQ4: (value: string) => void;
  multiA4: number;
  setMultiA4: (value: number) => void;
  isMultiCorrectQ4: boolean;
  setIsMultiCorrectQ4: (value: boolean) => void;
}

const MultipleChoiceWordProblem = ({
  multiQ1,
  setMultiQ1,
  multiA1,
  setMultiA1,
  isMultiCorrectQ1,
  setIsMultiCorrectQ1,
  multiQ2,
  setMultiQ2,
  multiA2,
  setMultiA2,
  isMultiCorrectQ2,
  setIsMultiCorrectQ2,
  multiQ3,
  setMultiQ3,
  multiA3,
  setMultiA3,
  isMultiCorrectQ3,
  setIsMultiCorrectQ3,
  multiQ4,
  setMultiQ4,
  multiA4,
  setMultiA4,
  isMultiCorrectQ4,
  setIsMultiCorrectQ4,
}: MultipleChoiceWordProps) => {
  const answerArr = [
    multiQuestionData[0].options[3],
    multiQuestionData[1].options[2],
    multiQuestionData[2].options[1],
    multiQuestionData[3].options[2],
  ];
  return (
    <div className="">
      <div className="flex flex-col p-12 justify-center items-center">
        <h1 className="font-extrabold text-5xl md:text-8xl uppercase text-yellow-400">
          <span className="text-purple-500">Credit</span> &{" "}
          <span className="text-green-500">Debit</span>
        </h1>
        <h2 className="text-3xl md:text-4xl mb-1">Click on your answer</h2>
      </div>
      <div className="grid grid-none md:grid-cols-2">
        <FinanceMultipleChoice
          question={multiQuestionData[0].question}
          options={multiQuestionData[0].options}
          answer={answerArr[0]}
          value={multiQ1}
          setValue={setMultiQ1}
          point={multiA1}
          getPoint={setMultiA1}
          isCorrect={isMultiCorrectQ1}
          setIsCorrect={setIsMultiCorrectQ1}
        />
        <FinanceMultipleChoice
          question={multiQuestionData[1].question}
          options={multiQuestionData[1].options}
          answer={answerArr[1]}
          value={multiQ2}
          setValue={setMultiQ2}
          point={multiA2}
          getPoint={setMultiA2}
          isCorrect={isMultiCorrectQ2}
          setIsCorrect={setIsMultiCorrectQ2}
        />
        <FinanceMultipleChoice
          question={multiQuestionData[2].question}
          options={multiQuestionData[2].options}
          answer={answerArr[2]}
          value={multiQ3}
          setValue={setMultiQ3}
          point={multiA3}
          getPoint={setMultiA3}
          isCorrect={isMultiCorrectQ3}
          setIsCorrect={setIsMultiCorrectQ3}
        />
        <FinanceMultipleChoice
          question={multiQuestionData[3].question}
          options={multiQuestionData[3].options}
          answer={answerArr[3]}
          value={multiQ4}
          setValue={setMultiQ4}
          point={multiA4}
          getPoint={setMultiA4}
          isCorrect={isMultiCorrectQ4}
          setIsCorrect={setIsMultiCorrectQ4}
        />
      </div>
    </div>
  );
};

export default MultipleChoiceWordProblem;
