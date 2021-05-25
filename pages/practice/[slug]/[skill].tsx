import React, { useEffect, useRef, useState } from "react";
import QuestionSet from "../../../components/stories/QuestionSet";
import { QuestionType } from "../../api/questionTypes";
import { GuessData } from "../../api/guessData";
import { AnswerType, Question } from "../../api/question";
import Navbar from "../../../components/Navbar";
import { Skill } from "../../api/skill";
import { generatePracticeQuestions } from "../../api/practice/practiceQuestionGenerator";
import { Button } from "../../../components/stories/Button";
import ReactCardFlip from "react-card-flip";
import Card from "../../../components/stories/Card";

const PracticeQuiz = ({ slug, skill }) => {
  const [visibility, setVisibility] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const [guessAttempt, setGuessAttempt] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [indexCap, setIndexCap] = useState(false);
  const [nextQuestionButton, setNextQuestionButton] = useState(false);
  const [interval, setMyInterval] = useState(null);
  const [correctGuess, setCorrectGuess] = useState(0);
  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
      skill: Skill.ADDITION_SINGLE,
    },
  ]);

  const inputElement = useRef(null);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setQuestionData(generatePracticeQuestions(slug, skill));
  }, []);

  const applyNextQuestion = () => {
    toggleFlip();

    setNextQuestionButton(false);
    setCorrectAnswer(false);
    setWrongAnswer(false);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
      if (inputElement.current) {
        inputElement.current.focus();
      }
    } else {
      clearInterval(interval);
      setMyInterval(null);
    }
  };

  const submitGuess = (guess: GuessData) => {
    toggleFlip();

    if (index < questionData.length && !indexCap) {
      if (guess.guess != "") {
        setGuessAttempt(guess.guess);
      }
      if (index == questionData.length - 1) {
        setIndexCap(true);
      }
      if (guess.isCorrect) {
        setCorrectGuess(correctGuess + 1);
        setCorrectAnswer(true);
      } else {
        setWrongAnswer(true);
      }
      if (index < questionData.length - 1) setNextQuestionButton(true);
    }
  };
  return (
    <div>
      <Navbar />
      <div className=" flex flex-row-reverse justify-items-end">
        <p className="font-bold text-gray-400">
          Question: {index + 1} / {questionData.length}
          <br></br>
          Score: {correctGuess} / {index + 1}
        </p>
      </div>

      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        infinite={true}
      >
        <div className="justify-items-center align-middle w-50">
          <QuestionSet
            title={slug}
            questionData={questionData}
            index={index}
            inputElement={inputElement}
            submitGuess={submitGuess}
            score={correctGuess}
            practice={true}
          />
        </div>
        <div className="flex items-left">
          <img
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
            src="/images/hint.png"
            className="w-40 h-30"
          />
          {visibility && (
            <p className=" transform -translate-y-12 rounded-full py-3 px-6 border-4 border-white border-dashed bg-gray-400 text-white flex flex-start w-85 h-28">
              The hint is: 275 + 2 = 2 _ _
            </p>
          )}
          <Card size="large">
            {correctAnswer ? (
              <p className="font-bold text-gray-400 underline">
                Correct,{" "}
                <span className="font-bold text-green-400">{guessAttempt}</span>{" "}
                was the answer
              </p>
            ) : wrongAnswer ? (
              <div>
                The correct answer was{" "}
                <span className="font-bold text-green-400">
                  {questionData[index].answer}
                </span>
                <br></br>
                Your answer was{" "}
                <span className="font-bold text-red-500"> {guessAttempt} </span>
              </div>
            ) : (
              ""
            )}

            {nextQuestionButton ? (
              <Button
                label="Next Question"
                backgroundColor="yellow"
                onClick={applyNextQuestion}
              ></Button>
            ) : (
              ""
            )}
          </Card>
        </div>
      </ReactCardFlip>
    </div>
  );
};
export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
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
