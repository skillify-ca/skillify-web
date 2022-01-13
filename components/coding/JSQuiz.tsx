import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import {
  MultipleChoiceSentence,
  MultipleChoiceSentenceProp,
} from "../questionTypes/MultipleChoiceSentence";
import { Button } from "../ui/Button";

export interface JSQuizProp {}

const JSQuiz = ({}: JSQuizProp) => {
  //We can add CSS questions here
  const questionData: MultipleChoiceSentenceProp[] = [
    {
      displayQuestion:
        "How many times will this loop run? \nfor (int i = 1; i <= 10; i++)",
      option1: { id: "A", text: "10" },
      option2: { id: "B", text: "5" },
      option3: { id: "C", text: "9" },
      option4: { id: "D", text: "11" },
      answer: "10",
    },
    {
      displayQuestion: "How do you declare and intialize a constant type?",
      option1: { id: "A", text: "let a = 8;" },
      option2: { id: "B", text: "var b;" },
      option3: { id: "C", text: "constant b = 0;" },
      option4: { id: "D", text: "const x = 22;" },
      answer: "const x = 22;",
    },
    {
      displayQuestion: "What is the valid way to increment a variable by 1?",
      option1: { id: "A", text: "x++;" },
      option2: { id: "B", text: "x += 1;" },
      option3: { id: "C", text: "x = x + 1;" },
      option4: { id: "D", text: "All of the above" },
      answer: "All of the above",
    },
    {
      displayQuestion:
        "How many times will this loop run? \nfor(int i = 0; i < 20; i--) ",
      option1: { id: "A", text: "20" },
      option2: { id: "B", text: "0" },
      option3: { id: "C", text: "2" },
      option4: { id: "D", text: "infinite" },
      answer: "infinite",
    },
    {
      displayQuestion:
        "Which one of the following is an incorrect way of declaring a variable",
      option1: { id: "A", text: "variable x;" },
      option2: { id: "B", text: "var x;" },
      option3: { id: "C", text: "let x;" },
      option4: {
        id: "D",
        text: "All of the above are correct ways to declare a variable",
      },
      answer: "variable x;",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [notComplete, setNotComplete] = useState(true);

  const submitGuessRequested = (guessData: GuessData) => {
    setIsShaking(false);
    if (guessData.isCorrect) {
      setIndex(index + 1);
      if (index == questionData.length - 1) {
        setNotComplete(false);
      }
    } else {
      setIsShaking(true);
    }
  };

  return (
    <>
      <div
        className={`rounded-xl shadow-xl mt-4 p-4 transform transition-all bg-blue-100 ${
          isShaking ? "animate-shake" : ""
        } `}
        onAnimationEnd={() => {
          setIsShaking(false);
        }}
      >
        <div>
          {notComplete ? (
            <MultipleChoiceSentence
              displayQuestion={questionData[index].displayQuestion}
              option1={{
                id: questionData[index].option1.id,
                text: questionData[index].option1.text,
              }}
              option2={{
                id: questionData[index].option2.id,
                text: questionData[index].option2.text,
              }}
              option3={{
                id: questionData[index].option3.id,
                text: questionData[index].option3.text,
              }}
              option4={{
                id: questionData[index].option4.id,
                text: questionData[index].option4.text,
              }}
              answer={questionData[index].answer}
              submitGuess={submitGuessRequested}
            />
          ) : (
            <div>
              <h1 className="text-2xl font-bold text-green-400">Completed!</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JSQuiz;
