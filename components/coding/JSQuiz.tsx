import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import {
  MultipleChoiceSentence,
  MultipleChoiceSentenceProp,
} from "../questionTypes/MultipleChoiceSentence";
import { Button } from "../ui/Button";
import MCQuiz from "./MCQuiz";

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
    {
      displayQuestion: "Which of the following expressions evaluates as True",
      option1: { id: "A", text: "4**0 > 1" },
      option2: { id: "B", text: "!(2 + 2 == 5)" },
      option3: { id: "C", text: "1 < 1 ** 1" },
      option4: {
        id: "D",
        text: "All of the above",
      },
      answer: "!(2 + 2 == 5)",
    },
    {
      displayQuestion: "Which of the following expressions evaluates as True",
      option1: { id: "A", text: "-3 > 0 || 0 >= 0" },
      option2: { id: "B", text: "7**0 == 1 && 0 > -1" },
      option3: { id: "C", text: "0 == 0 && 1 > -1" },
      option4: {
        id: "D",
        text: "All of the above",
      },
      answer: "All of the above",
    },
    {
      displayQuestion: "Which of the following expressions evaluates as False",
      option1: { id: "A", text: "4 == 4" },
      option2: { id: "B", text: "4 === '4'" },
      option3: { id: "C", text: "4 == '4'" },
      option4: {
        id: "D",
        text: "All of the above",
      },
      answer: "4 === '4'",
    },
    {
      displayQuestion:
        "What does the following expression return? \n 2 + 2 == 5 ? 'Big Brother' : 2 + 2 == 4 ? 'Hello' : 'World'",
      option1: { id: "A", text: "Big Brother" },
      option2: { id: "B", text: "Hello" },
      option3: { id: "C", text: "World" },
      option4: {
        id: "D",
        text: "Error",
      },
      answer: "Hello",
    },
  ];

  return <MCQuiz questionData={questionData} />;
};

export default JSQuiz;
