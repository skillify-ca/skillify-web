import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalTransition } from "react-simple-hook-modal";
import apiData from "../api/practice.json";
import "react-simple-hook-modal/dist/styles.css";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import { CREATE_GUESS } from "../../graphql/createGuess";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER_SKILLS } from "../../graphql/updateUserSkills";
import { FETCH_USER_SKILLS } from "../../graphql/fetchUserSkills";
import { FETCH_USER_SKILL } from "../../graphql/fetchUserSkill";
import { UNLOCK_NEXT_SKILL } from "../../graphql/unlockNextSkill";
import { generateQuestions } from "../api/questionGenerator";
import { v4 as uuidv4 } from "uuid";

const Quiz = ({ slug }) => {
  const { query } = useRouter();
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [interval, setMyInterval] = useState(null);
  const [questionData, setQuestionData] = useState([{ text: "", answer: 0 }]);
  const [currentLevel, setCurrentLevel] = React.useState(0);
  const inputElement = useRef(null);
  const length = questionData.length;
  const [sessionId, setSessionId] = React.useState("");

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
  const [updateUserSkillStars, updateUserSkillsData] = useMutation(
    UPDATE_USER_SKILLS,
    {
      refetchQueries: [{ query: FETCH_USER_SKILLS }],
    }
  );
  const userSkillResult = useQuery(FETCH_USER_SKILL, {
    variables: {
      skillId: slug,
    },
  });
  const userSkillsResult = useQuery(FETCH_USER_SKILLS);
  const [unlockNextSkill, unlockNextSkillData] = useMutation(
    UNLOCK_NEXT_SKILL,
    {
      refetchQueries: [{ query: FETCH_USER_SKILLS }],
    }
  );

  const submitGuess = (e) => {
    e.preventDefault();

    let isCorrect = Number.parseInt(guess) == questionData[index].answer;
    if (isCorrect) {
      setCorrectGuesses(correctGuesses + 1);
    }
    createFlashcardGuess({
      variables: {
        userId: "1",
        question: questionData[index].text,
        guess: guess,
        timeTaken: 3,
        sessionId: sessionId,
        is_correct: isCorrect,
      },
    });
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

      // if pass unlock star
      const starsEarnedForSkill = userSkillResult.data.user_skills[0].stars;
      if (starsEarnedForSkill < currentLevel) {
        updateUserSkillStars({
          variables: {
            skillId: slug,
            stars: currentLevel,
          },
        });
        if (currentLevel == 3) {
          // unlock next skill
          const lockedSkills = userSkillsResult.data.user_skills.filter(
            (it) => it.locked == true
          );
          if (lockedSkills.length > 1) {
            unlockNextSkill({
              variables: {
                skillId: lockedSkills[0].skill.id,
                locked: false,
              },
            });
          }
        }
      }
    }
  };

  const onCloseGameOver = () => {
    setIndex(0);
    setCorrectGuesses(0);
    setGuess("");
    setGameOver(false);
    setSecondsElapsed(0);
    setQuestionData(generateQuestions(slug, currentLevel));
    var newInterval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    setMyInterval(newInterval);
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      submitGuess(e);
    }
  };

  const getAccuracy = () => {
    return Math.round((100 * correctGuesses) / length);
  };

  const component = (
    <div className="flex flex-col justify-center items-center">
      <p className="w-full p-2">
          Question: {index + 1} / {length}
        </p>
      <div className="m-8 shadow-md ring-1 bg-gradient-to-b from-white via-white to-purple-100 flex flex-col justify-center items-center w-3/4 max-w-xl">
        <div className="p-16 text-2xl">{questionData[index].text}</div>
      </div>
      <div className="flex space-y-4 p-4 flex-col justify-center items-center ">
        <input
          id="guess"
          type="number"
          autoComplete="off"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Enter Answer"
          ref={inputElement}
          onKeyPress={handleKeypress}
        />

        <form onSubmit={submitGuess}>
          <button type="submit" className="bg-gradient-to-b from-purple-300 via-purple-400 to-purple-500 p-2 w-20 m-4 border-b-4 border-purple-900 rounded-xl hover:from-purple-200 active:border-b-2">
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />

      <div>{component}</div>
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
          <Link href="/">
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
    ],
    fallback: true,
  };
}

export default Quiz;
