import React, { useEffect, useRef, useState } from "react";
import {
  generateAdditionQuestions,
  generateSubtractionQuestions,
} from "../../api/practiceQuestionGenerator";
import QuestionSet from "../../../components/stories/QuestionSet";
import { QuestionType } from "../../api/questionTypes";
import { GuessData } from "../../api/guessData";
import { AnswerType, Question } from "../../api/question";
import Navbar from "../../../components/Navbar";

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
  const inputElement = useRef(null);

  useEffect(() => {
    if (slug == "addition") {
      setQuestionData(generateAdditionQuestions(difficulty));
    } else if (slug == "subtraction") {
      setQuestionData(generateSubtractionQuestions(difficulty));
    }
  }, []);

  const submitGuess = (guess: GuessData) => {
    if (index < length - 1) {
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
    ],
    fallback: true,
  };
}

export default PracticeQuiz;
