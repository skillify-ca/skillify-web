import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import {
  MultipleChoiceSentence,
  MultipleChoiceSentenceProp,
} from "../questionTypes/MultipleChoiceSentence";
import { Button } from "../ui/Button";

export interface CSSQuizProp {}

const CSSQuiz = ({}: CSSQuizProp) => {
  //We can add CSS questions here
  const questionData: MultipleChoiceSentenceProp[] = [
    {
      image: "/../images/coding/units/css/flex-end.png",
      option1: { id: "A", text: "justify-content: flex-end;" },
      option2: { id: "B", text: "justify-content: flex-start;" },
      option3: { id: "C", text: "justify-content: reverse;" },
      option4: { id: "D", text: "align-items: center;" },
      answer: "justify-content: flex-end;",
    },
    {
      image: "/../images/coding/units/css/space-around.png",
      option1: { id: "A", text: "align-items: center;" },
      option2: { id: "B", text: "justify-content: space-around;" },
      option3: { id: "C", text: "justify-content: center;" },
      option4: { id: "D", text: "flex-direction: row;" },
      answer: "justify-content: space-around;",
    },
    {
      image: "/../images/coding/units/css/column.png",
      option1: { id: "A", text: "flex-direction: reverse;" },
      option2: { id: "B", text: "justify-content: flex-end;" },
      option3: { id: "C", text: "flex-direction: column;" },
      option4: { id: "D", text: "justify-content: flex-start;" },
      answer: "flex-direction: column;",
    },
    {
      image: "/../images/coding/units/css/space-between.png",
      option1: { id: "A", text: "justify-content: space-between;" },
      option2: { id: "B", text: "flex-direction: row;" },
      option3: { id: "C", text: "justify-content: flex-start;" },
      option4: { id: "D", text: "align-items: center;" },
      answer: "justify-content: space-between;",
    },
    {
      image: "/../images/coding/units/css/center.png",
      option1: { id: "A", text: "flex-direction: flex-start;" },
      option2: { id: "B", text: "justify-content: center;" },
      option3: { id: "C", text: "justify-items: center;" },
      option4: { id: "D", text: "justify-contents: center;" },
      answer: "justify-content: center;",
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
    <div
      className={`${isShaking ? "animate-shake" : ""}`}
      onAnimationEnd={() => setIsShaking(false)}
    >
      {" "}
      {notComplete ? (
        <MultipleChoiceSentence
          image={questionData[index].image}
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
          <h1 className="font-bold text-green-400 text-2xl">Completed!</h1>
        </div>
      )}
    </div>
  );
};

export default CSSQuiz;
