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
    //Quiz 2
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
      displayQuestion:
        'What value does phone[3] have in the following Array. const phones = [ "BlackBerry", "Samsung", "iPhone", "Pixel"];',
      option1: { id: "A", text: "Samsung" },
      option2: { id: "B", text: "iPhone" },
      option3: { id: "C", text: "Pixel" },
      option4: { id: "D", text: "BlackBerry" },
      answer: "Pixel",
    },
    //Quiz 1
    {
      displayQuestion: ,
      option1: { id: "A", text: "let a = 8;" },
      option2: { id: "B", text: "var b;" },
      option3: { id: "C", text: "constant b = 0;" },
      option4: { id: "D", text: "const x = 22;" },
      answer: "const x = 22;",
    },
    //Quiz 1
    {
      displayQuestion: "What is the valid way to increment a variable by 1?",
      option1: { id: "A", text: "x++;" },
      option2: { id: "B", text: "x += 1;" },
      option3: { id: "C", text: "x = x + 1;" },
      option4: { id: "D", text: "All of the above" },
      answer: "All of the above",
    },
    //Quiz 2
    {
      displayQuestion: "How do you declare an array?",
      option1: { id: "A", text: "let cars = [];" },
      option2: { id: "B", text: "array cars = []" },
      option3: { id: "C", text: "cars[] = Array;" },
      option4: { id: "D", text: "None of the above" },
      answer: "let cars = [];",
    },
    //Quiz 2
    {
      displayQuestion:
        "How many times will this loop run? \nfor(int i = 0; i < 20; i--) ",
      option1: { id: "A", text: "20" },
      option2: { id: "B", text: "0" },
      option3: { id: "C", text: "2" },
      option4: { id: "D", text: "infinite" },
      answer: "infinite",
    },
    //Quiz 1
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
    //Quiz 1
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
    //Quiz 1
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
    //Quiz 1
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
    //Quiz 1
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
    {
      displayQuestion: "What loop is displayed?",
      option1: { id: "A", text: "For loop" },
      option2: { id: "B", text: "While Loop" },
      option3: { id: "C", text: "For each loop" },
      option4: {
        id: "D",
        text: "Do while loop",
      },
      answer: "While loop",
    },
  ];

  return <MCQuiz questionData={questionData} />;
};

export default JSQuiz;
