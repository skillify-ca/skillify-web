import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalTransition } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import QuestionSet from "../../../../components/stories/QuestionSet";
import { QuestionType } from "../../../api/questionTypes";
import { GuessData } from "../../../api/guessData";
import { AnswerType, Question } from "../../../api/question";
import { Skill } from "../../../api/skill";
import { UNLOCK_BADGE } from "../../../../graphql/unlockBadge";
import { FETCH_USER_BADGES } from "../../../../graphql/fetchUserBadge";
import { getBadgeId } from "../../../api/badgeHelper";
import { SAVE_USER_GUESSES } from "../../../../graphql/saveUserGuesses";
import { FETCH_USER_QUIZZES } from "../../../../graphql/fetchUserQuiz";
import { FETCH_USER_SKILL_BADGE } from "../../../../graphql/fetchBadgeForSkill";
import { SAVE_QUIZ_ATTEMPT } from "../../../../graphql/saveQuizAttempt";
import Navbar from "../../../../components/ui/Navbar";
import { useAuth } from "../../../../lib/authContext";
import { generateQuestions } from "../../../api/quiz/quizQuestionGenerator";

//
export function getGradeLevel(score: number) {
  if (score < 60) {
    return "1";
  } else if (score < 70) {
    return "2";
  } else if (score < 80) {
    return "3";
  } else if (score < 90) {
    return "4";
  } else if (score < 100) {
    return "4+";
  } else {
    return "4++";
  }
}

const Quiz = ({ unitTitle, currentLevel }) => {
  const { query } = useRouter();
  const courseId: string = query.courseId as string;
  const { user } = useAuth();

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

  const inputElement = useRef(null);
  const [guesses, setGuesses] = useState([]);
  const length = questionData.length;
  const [sessionId, setSessionId] = React.useState("");
  const [saveQuizGuesses, saveQuizGuessesMutation] =
    useMutation(SAVE_USER_GUESSES);

  const [saveQuizData, saveQuizDataMutation] = useMutation(SAVE_QUIZ_ATTEMPT, {
    onCompleted: (data) => {
      const quizId = data.insert_user_quizzes.returning[0].id;
      // new user quiz saved
      saveQuizGuesses({
        variables: {
          guessesArray: guesses.map((it) => {
            it.quizId = quizId;
            it.userId = user.uid;
            it.timeTaken = 3;
            return it;
          }),
        },
      });
    },
    refetchQueries: [
      {
        query: FETCH_USER_QUIZZES,
        variables: {
          userId: user.uid,
          badgeId: getBadgeId(courseId, unitTitle, currentLevel),
        },
      },
    ],
  });

  useEffect(() => {
    const q = generateQuestions(unitTitle, currentLevel);

    setQuestionData(q);
    setSessionId(uuidv4());
  }, [unitTitle, currentLevel]);

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

  const [unlockBadge, unlockBadgeData] = useMutation(UNLOCK_BADGE, {
    refetchQueries: [
      {
        query: FETCH_USER_BADGES,
        variables: {
          userId: user.uid,
        },
      },
      {
        query: FETCH_USER_SKILL_BADGE,
        variables: {
          userId: user.uid,
          badgeId: getBadgeId(courseId, unitTitle, currentLevel),
        },
      },
    ],
  });

  const submitGuess = (currentGuess: GuessData) => {
    let newCorrectGuesses = correctGuesses;
    if (currentGuess.isCorrect) {
      newCorrectGuesses += 1;
      setCorrectGuesses(newCorrectGuesses);
    }

    // Save current guess to guesses array
    const guess = {
      is_correct: currentGuess.isCorrect,
      question: questionData[index].text,
      guess: currentGuess.guess,
      skillId: questionData[index]?.skill?.toString(),
    };
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
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
        if (newCorrectGuesses / length >= 0.8) {
          unlockBadge({
            variables: {
              userId: user.uid,
              badgeId: getBadgeId(courseId, unitTitle, currentLevel),
            },
          });
        }
        saveQuizData({
          variables: {
            userId: user.uid,
            badgeId: getBadgeId(courseId, unitTitle, currentLevel),
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
    setQuestionData(generateQuestions(unitTitle, currentLevel));
    var newInterval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    setMyInterval(newInterval);
    setGuesses([]);
  };

  const getAccuracy = () => {
    return Math.round((100 * correctGuesses) / length);
  };
  return (
    <div>
      <Navbar />
      <QuestionSet
        title={unitTitle}
        questionData={questionData}
        index={index}
        inputElement={inputElement}
        submitGuess={submitGuess}
        score={correctGuesses}
      />
      <Modal
        id="game-over-model"
        isOpen={isGameOver}
        transition={ModalTransition.SCALE}
      >
        <div className="py-16 m-8 space-y-8 bg-white flex flex-col justify-center items-center">
          <p className="text-2xl">
            Grade Level: {getGradeLevel(getAccuracy())}
          </p>
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
          <Link href={`/course/${courseId}/unit/${unitTitle}`}>
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
  const level = params.slug.length > 1 ? Number.parseInt(params.slug[1]) : 1;
  return { props: { unitTitle: params.slug[0], currentLevel: level } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { courseId: "math1", slug: ["addition"], currentLevel: "1" } },
      { params: { courseId: "math1", slug: ["numbers"], currentLevel: "3" } },
      { params: { courseId: "math1", slug: ["subtraction"] } },
      { params: { courseId: "math1", slug: ["multiplication"] } },
      { params: { courseId: "math1", slug: ["division"] } },
    ],
    fallback: true,
  };
}

export default Quiz;
