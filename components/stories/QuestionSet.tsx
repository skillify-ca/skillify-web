import React, { useRef, useState } from "react";
import { Question } from "../../pages/api/questionGenerator";
import { QuestionType } from "../../pages/api/questionTypes";
import { Button } from "./Button";
import Card from "./Card";
import { VerticalEquation } from "./VerticalEquation";
import { WordProblem } from "./WordProblem";

type QuestionSetProps = {
  title: string;
  questionData: Question[];
  index: number;
  guess: any;
  setGuess: any;
  inputElement: any;
  submitGuess: any;
};

const QuestionSet = ({
  title,
  questionData,
  index,
  guess,
  setGuess,
  inputElement,
  submitGuess,
}: QuestionSetProps) => {
  const questionComponent = () => {

    if (questionData[index].questionType === QuestionType.VERTICAL_EQUATION) {
      return (
        <VerticalEquation question={questionData[index].text} operator={questionData[index].operator} />
      );
    } else if (questionData[index].questionType == QuestionType.BINARY_WORD_PROBLEM) {
      return <WordProblem question={questionData[index].text} />
    }

    return <p className="text-6xl">{questionData[index].text}</p>;
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      submitGuess(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 gap-8 pb-24">
      <div className="flex justify-between w-full p-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="font-bold text-gray-400">
          Question: {index + 1} / {questionData.length}
        </p>
      </div>
      <Card size="large">{questionData[index] && questionComponent()}</Card>
      <input
        id="guess"
        type="number"
        autoComplete="off"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="appearance-none relative block px-3 py-4 text-center border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 bg-blue-100 focus:z-10 sm:text-sm"
        placeholder="Enter Answer"
        ref={inputElement}
        onKeyPress={handleKeypress}
      />

      <Button
        onClick={submitGuess}
        label="Submit"
        backgroundColor="blue"
        textColor="white"
      />
    </div>
  );
};

export default QuestionSet;
