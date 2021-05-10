import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  generateAdditionQuestions,
  Question,
} from "../api/practiceQuestionGenerator";
import QuestionSet from "../../components/stories/QuestionSet";
import { QuestionType } from "../api/questionTypes";

import Navbar from "../../components/Navbar";
import { Button } from "../../components/stories/Button";

const Quiz = ({ slug }) => {
  const [index, setIndex] = useState(0);
  const { query } = useRouter();
  const [guess, setGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [interval, setMyInterval] = useState(null);
  const [questionData, setQuestionData] = useState<Question[]>([
    { text: "", answer: 0, questionType: QuestionType.HORIZONTAL_EQUATION },
  ]);
  const [currentLevel, setCurrentLevel] = React.useState(0);
  const inputElement = useRef(null);
  const length = questionData.length;
  const [sessionId, setSessionId] = React.useState("");
  const [
    starsAlreadyEarnedForSkill,
    setStarsAlreadyEarnForSkill,
  ] = React.useState(0);

  useEffect(() => {
    const level = Number.parseInt(query.level as string);
    setCurrentLevel(level);
    setQuestionData(generateAdditionQuestions(slug, level));
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
      setGameOver(true);
    }
  };
  return (
    <div>
      <Navbar />
      <Button label="Submit" onClick={submitGuess}></Button>
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

export default Quiz;
