import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import {
  MultipleChoiceSentence,
  MultipleChoiceSentenceProp,
} from "../questionTypes/MultipleChoiceSentence";
import { Button } from "../ui/Button";
import MCQuiz from "./MCQuiz";

export interface CSSQuizProp {}

const CSSQuiz = ({}: CSSQuizProp) => {
  //We can add CSS questions here
  const questionData: MultipleChoiceSentenceProp[] = [
    {
      image: ["/images/gold-star.png", "/images/gold-star.png"],
      properties: "flex flex-row place-content-end bg-yellow-200 w-full",
      option1: { id: "A", text: "justify-content: flex-end;" },
      option2: { id: "B", text: "justify-content: flex-start;" },
      option3: { id: "C", text: "justify-content: reverse;" },
      option4: { id: "D", text: "align-items: center;" },
      answer: "justify-content: flex-end;",
    },
    {
      image: ["/images/gold-star.png", "/images/gold-star.png"],
      properties: "flex flex-row place-content-around bg-yellow-200 w-full",
      option1: { id: "A", text: "align-items: center;" },
      option2: { id: "B", text: "justify-content: space-around;" },
      option3: { id: "C", text: "justify-content: center;" },
      option4: { id: "D", text: "flex-direction: row;" },
      answer: "justify-content: space-around;",
    },
    {
      image: ["/images/gold-star.png", "/images/gold-star.png"],
      properties: "flex flex-col bg-yellow-200 h-full",
      option1: { id: "A", text: "flex-direction: reverse;" },
      option2: { id: "B", text: "justify-content: flex-end;" },
      option3: { id: "C", text: "flex-direction: column;" },
      option4: { id: "D", text: "justify-content: flex-start;" },
      answer: "flex-direction: column;",
    },
    {
      image: ["/images/gold-star.png", "/images/gold-star.png"],
      properties: "flex flex-row place-content-between bg-yellow-200 w-full",
      option1: { id: "A", text: "justify-content: space-between;" },
      option2: { id: "B", text: "flex-direction: row;" },
      option3: { id: "C", text: "justify-content: flex-start;" },
      option4: { id: "D", text: "align-items: center;" },
      answer: "justify-content: space-between;",
    },
    {
      image: ["/images/gold-star.png", "/images/gold-star.png"],
      properties: "flex flex-row justify-center bg-yellow-200 w-full",
      option1: { id: "A", text: "flex-direction: flex-start;" },
      option2: { id: "B", text: "justify-content: center;" },
      option3: { id: "C", text: "justify-items: center;" },
      option4: { id: "D", text: "justify-contents: center;" },
      answer: "justify-content: center;",
    },
  ];

  return <MCQuiz questionData={questionData} />;
};

export default CSSQuiz;
