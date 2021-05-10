import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  generateAdditionQuestions,
  Question,
} from "../api/practiceQuestionGenerator";
import QuestionSet from "../../components/stories/QuestionSet";
import { QuestionType } from "../api/questionTypes";

import Navbar from "../../components/Navbar";

const practiceQuiz = ({ slug }) => {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [interval, setMyInterval] = useState(null);
  const [questionData, setQuestionData] = useState<Question[]>([
    { text: "", answer: 0, questionType: QuestionType.HORIZONTAL_EQUATION },
  ]);
  const inputElement = useRef(null);

  useEffect(() => {
    console.log(slug);
    setQuestionData(generateAdditionQuestions(slug));
  }, []);

  const submitGuess = (e) => {
    e.preventDefault();
    if (index < length - 1) {
      setIndex(index + 1);
      setGuess("");
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
        guess={guess}
        setGuess={setGuess}
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
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "single-digit" } },
      { params: { slug: "double-digit" } },
      { params: { slug: "triple-digit" } },
      { params: { slug: "properties" } },
    ],
    fallback: true,
  };
}

export default practiceQuiz;
