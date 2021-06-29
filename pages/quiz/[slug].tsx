import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalTransition } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import { CREATE_GUESS } from "../../graphql/createGuess";
import { useMutation, useQuery } from "@apollo/client";
import { generateQuestions } from "../api/quiz/quizQuestionGenerator";
import { v4 as uuidv4 } from "uuid";
import { getSkillIdFromSlug, userId } from "../../graphql/utils/constants";
import { useSession } from "next-auth/client";
import QuestionSet from "../../components/stories/QuestionSet";
import { QuestionType } from "../api/questionTypes";
import { GuessData } from "../api/guessData";
import { AnswerType, Question } from "../api/question";
import { Skill } from "../api/skill";
import { UNLOCK_BADGE } from "../../graphql/unlockBadge";
import { AdditionDoubleDigitWS } from "../../components/stories/WorksheetsObj";
import { FETCH_USER_BADGES } from "../../graphql/fetchUserBadge";
import { getBadgeId } from "../api/badgeHelper";
import { CREATE_QUIZ_ATTEMPT } from "../../graphql/createUserQuizAttempt";
import { FETCH_USER_QUIZZES } from "../../graphql/fetchUserQuiz";
import { FETCH_USER_SKILL_BADGE } from "../../graphql/fetchBadgeForSkill";

const Quiz = ({ slug }) => {
  const { query } = useRouter();
  const [session] = useSession();
  const [index, setIndex] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [interval, setMyInterval] = useState(null);
  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
      skill: Skill.ADDITION_SINGLE,
    },
  ]);
  const [currentLevel, setCurrentLevel] = React.useState(0);
  const inputElement = useRef(null);
  const length = questionData.length;
  const [sessionId, setSessionId] = React.useState("");

  const [saveQuizData, setQuizData] = useMutation(CREATE_QUIZ_ATTEMPT, {
    refetchQueries: [
      {
        query: FETCH_USER_QUIZZES,
        variables: {
          userId: userId(session),
          badgeId: getBadgeId(slug, currentLevel),
        },
      },
    ],
  });

  useEffect(() => {
    const level = Number.parseInt(query.level as string);
    setCurrentLevel(level);
    setQuestionData(generateQuestions(slug, level));
    setSessionId(uuidv4());
  }, []);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  useEffect(() => {
    var newInterval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    setMyInterval(newInterval);

    return () => clearInterval(interval);
  }, []);

  const [createFlashcardGuess, createGuessData] = useMutation(CREATE_GUESS);

  const [unlockBadge, unlockBadgeData] = useMutation(UNLOCK_BADGE, {
    refetchQueries: [
      {
        query: FETCH_USER_BADGES,
        variables: {
          userId: userId(session),
        },
      },
      {
        query: FETCH_USER_SKILL_BADGE,
        variables: {
          userId: userId(session),
          badgeId: getBadgeId(slug, currentLevel),
        },
      }
    ],
  });

  const submitGuess = (currentGuess: GuessData) => {
    let newCorrectGuesses = correctGuesses;
    if (currentGuess.isCorrect) {
      newCorrectGuesses += 1;
      setCorrectGuesses(newCorrectGuesses);
    }
    createFlashcardGuess({
      variables: {
        userId: userId(session),
        question: questionData[index].text,
        guess: currentGuess.toString(),
        timeTaken: 3,
        sessionId: sessionId,
        is_correct: currentGuess.isCorrect,
        skillId: getSkillIdFromSlug(slug),
      },
    });
    if (index < length - 1) {
      setIndex(index + 1);
      if (inputElement.current) {
        inputElement.current.focus();
      }
    } else {
      clearInterval(interval);
      setMyInterval(null);
      setGameOver(true);
      if (index == length - 1) {
        if (correctGuesses / length >= 0.8) {
          unlockBadge({
            variables: {
              userId: userId(session),
              badgeId: getBadgeId(slug, currentLevel),
            },
          });
        }
        saveQuizData({
          variables: {
            userId: userId(session),
            badgeId: getBadgeId(slug, currentLevel),
            accuracy: Math.round((100 * newCorrectGuesses) / length),
            quizTitle: "",
          },
        });
      }
    }
  };

  const onCloseGameOver = () => {
    setIndex(0);
    setCorrectGuesses(0);
    setGameOver(false);
    setSecondsElapsed(0);
    setQuestionData(generateQuestions(slug, currentLevel));
    var newInterval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    setMyInterval(newInterval);
  };

  const getAccuracy = () => {
    return Math.round((100 * correctGuesses) / length);
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
        score={correctGuesses}
        practice={false}
      />
      <Modal
        id="game-over-model"
        isOpen={isGameOver}
        transition={ModalTransition.SCALE}
      >
        <div className="py-16 m-8 space-y-8 bg-white flex flex-col justify-center items-center">
          <p className="text-2xl">Speed </p> {secondsElapsed} seconds
          <p className="text-2xl">Accuracy</p>
          {getAccuracy()}%
          <button
            type="submit"
            className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onCloseGameOver}
          >
            Replay
          </button>
          <Link href="/practice">
            <button className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Home
            </button>
          </Link>
        </div>
      </Modal>
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
      { params: { slug: "addition", level: "1" } },
      { params: { slug: "subtraction" } },
      { params: { slug: "multiplication" } },
      { params: { slug: "division" } },
    ],
    fallback: true,
  };
}

export default Quiz;
