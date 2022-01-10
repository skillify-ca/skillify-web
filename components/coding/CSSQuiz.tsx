import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import {
  MultipleChoiceSentence,
  MultipleChoiceSentenceProp,
} from "../questionTypes/MultipleChoiceSentence";
import { Button } from "../ui/Button";

export interface CSSQuizProp {}

const CSSQuiz = ({}: CSSQuizProp) => {
  const questionData: MultipleChoiceSentenceProp[] = [
    {
      image: "/images/coding/units/css/ottom-border.png",
      option1: { id: "A", text: "justify-content: flex-end;" },
      option2: { id: "B", text: "justify-content: flex-start;" },
      option3: { id: "C", text: "justify-content: reverse;" },
      option4: { id: "D", text: "align-items: center;" },
      answer: "A",
    },
    {
      image: "/images/coding/units/css/Dashed-border.png",
      option1: { id: "A", text: "align-items: center;" },
      option2: { id: "B", text: "justify-content: space-around;" },
      option3: { id: "C", text: "justify-content: center;" },
      option4: { id: "D", text: "flex-direction: row;" },
      answer: "B",
    },
    {
      image: "/images/coding/units/css/Dotted-border.png",
      option1: { id: "A", text: " Double Border" },
      option2: { id: "B", text: " Double Border" },
      option3: { id: "C", text: " Dotted Border" },
      option4: { id: "D", text: " Double Border" },
      answer: "C",
    },
    {
      image: "/images/coding/units/css/Dashed-border.png",
      option1: { id: "A", text: " Dash Border" },
      option2: { id: "B", text: " Dotted Border" },
      option3: { id: "C", text: " Dotted Border" },
      option4: { id: "D", text: " Dotted Border" },
      answer: "A",
    },
    {
      image: "/images/coding/units/css/Dashed-border.png",
      option1: { id: "A", text: " Dash Border" },
      option2: { id: "B", text: " Dotted Border" },
      option3: { id: "C", text: " Dotted Border" },
      option4: { id: "D", text: " Dotted Border" },
      answer: "D",
    },
  ];

  const [index, setIndex] = useState(0);

  const submitGuessRequested = (guessData: GuessData) => {
    setIndex(Math.min(questionData.length - 1, index + 1));
  };

  return (
    <div>
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
    </div>
  );
};

export default CSSQuiz;
