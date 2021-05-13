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
import { AnswerType, MCQuestion, Question } from "../../api/question";
import Navbar from "../../../components/Navbar";
import { Button } from "../../../components/stories/Button";

const PracticeQuiz = ({ slug, difficulty }) => {
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
  const [questionMCData, setQuestionMCData] = useState<MCQuestion[]>([
    {
      text: "",
      questionData: [],
      questionType: QuestionType.MULTIPLE_CHOICE,
    },
  ]);

  const inputElement = useRef(null);

  useEffect(() => {
    if (slug == "addition" && difficulty != "properties") {
      setQuestionData(generateAdditionQuestions(difficulty));
    } else if (slug == "addition" && difficulty == "properties") {
      setQuestionMCData(generateAdditionPropertyQuestions(slug));
    } else if (slug == "subtraction") {
      setQuestionData(generateSubtractionQuestions(difficulty));
    } else if (slug == "multiplication") {
      setQuestionData(generateMultiplicationQuestions(difficulty));
    } else if (slug == "division") {
      setQuestionData(generateDivisionQuestions(difficulty));
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
        title={slug}
        subtitle={difficulty}
        questionData={questionData}
        answerData={questionMCData}
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
      slug: params.slug,
      difficulty: params.difficulty,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "addition", difficulty: "single-digit" } },
      { params: { slug: "addition", difficulty: "double-digit" } },
      { params: { slug: "addition", difficulty: "triple-digit" } },
      { params: { slug: "addition", difficulty: "properties" } },
      { params: { slug: "subtraction", difficulty: "single-digit" } },
      { params: { slug: "subtraction", difficulty: "double-digit" } },
      { params: { slug: "subtraction", difficulty: "triple-digit" } },
      { params: { slug: "subtraction", difficulty: "properties" } },
      { params: { slug: "multiplication", difficulty: "single-digit" } },
      { params: { slug: "multiplication", difficulty: "double-digit" } },
      { params: { slug: "multiplication", difficulty: "triple-digit" } },
      { params: { slug: "multiplication", difficulty: "properties" } },
      { params: { slug: "division", difficulty: "single-digit" } },
      { params: { slug: "division", difficulty: "double-digit" } },
      { params: { slug: "division", difficulty: "triple-digit" } },
      { params: { slug: "division", difficulty: "properties" } },
    ],
    fallback: true,
  };
}

export default PracticeQuiz;
