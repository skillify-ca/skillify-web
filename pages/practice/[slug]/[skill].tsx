import React, { useEffect, useRef, useState } from "react";
import {
  generateAdditionPropertyQuestions,
  generateAdditionQuestions,
  generateDivisionQuestions,
  generateMultiplicationQuestions,
  generateSubtractionQuestions,
} from "../../api/practiceQuestionGenerator";
import QuestionSet from "../../../components/stories/QuestionSet";
import { QuestionType } from "../../api/questionTypes";
import { GuessData } from "../../api/guessData";
import { AnswerType, Question } from "../../api/question";
import Navbar from "../../../components/Navbar";

const PracticeQuiz = ({ topic, skill }) => {
  const [index, setIndex] = useState(0);
  const [interval, setMyInterval] = useState(null);
  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
    },
  ]);

  const inputElement = useRef(null);

  useEffect(() => {
    if (topic == "addition" && skill != "properties") {
      setQuestionData(generateAdditionQuestions(skill));
    } else if (topic == "addition" && skill == "properties") {
      setQuestionData(generateAdditionPropertyQuestions());
    } else if (topic == "subtraction") {
      setQuestionData(generateSubtractionQuestions(skill));
    } else if (topic == "multiplication") {
      setQuestionData(generateMultiplicationQuestions(skill));
    } else if (topic == "division") {
      setQuestionData(generateDivisionQuestions(skill));
    }
  }, []);

  const submitGuess = (guess: GuessData) => {
    if (index < questionData.length - 1) {
      console.log("ERROR");
      setIndex(index + 1);
      if (inputElement.current) {
        inputElement.current.focus();
      }
    } else {
      clearInterval(interval);
      setMyInterval(null);
    }
  };
  return (
    <div>
      <Navbar />
      <QuestionSet
        title={topic}
        questionData={questionData}
        index={index}
        inputElement={inputElement}
        submitGuess={submitGuess}
      />
    </div>
  );
};
export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.topic,
      skill: params.skill,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "addition", skill: "single-digit" } },
      { params: { slug: "addition", skill: "double-digit" } },
      { params: { slug: "addition", skill: "triple-digit" } },
      { params: { slug: "addition", skill: "properties" } },
      { params: { slug: "subtraction", skill: "single-digit" } },
      { params: { slug: "subtraction", skill: "double-digit" } },
      { params: { slug: "subtraction", skill: "triple-digit" } },
      { params: { slug: "subtraction", skill: "properties" } },
      { params: { slug: "multiplication", skill: "single-digit" } },
      { params: { slug: "multiplication", skill: "double-digit" } },
      { params: { slug: "multiplication", skill: "triple-digit" } },
      { params: { slug: "multiplication", skill: "properties" } },
      { params: { slug: "division", skill: "single-digit" } },
      { params: { slug: "division", skill: "double-digit" } },
      { params: { slug: "division", skill: "triple-digit" } },
      { params: { slug: "division", skill: "properties" } },
    ],
    fallback: true,
  };
}

export default PracticeQuiz;
