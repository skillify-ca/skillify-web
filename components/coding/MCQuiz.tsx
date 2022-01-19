import React, { useEffect, useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import {
  MultipleChoiceSentence,
  MultipleChoiceSentenceProp,
} from "../questionTypes/MultipleChoiceSentence";

export interface MCQuiz {
  questionData: MultipleChoiceSentenceProp[];
}

export const MCQuiz: React.FC<MCQuiz> = ({ questionData }) => {
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
  useEffect(() => {
    for (let i = questionData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionData[i], questionData[j]] = [questionData[j], questionData[i]];
    }
  }, []);

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
              image={questionData[index].image}
              properties={questionData[index].properties}
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

export default MCQuiz;
