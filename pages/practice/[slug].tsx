import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalTransition } from "react-simple-hook-modal";
import apiData from "../api/practice.json";
import "react-simple-hook-modal/dist/styles.css";
import Navbar from "../../components/Navbar";

const Quiz = ({ slug }) => {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const inputElement = useRef(null);

  let data = [];
  if (apiData[slug] != null && apiData[slug] != undefined) {
    data = apiData[slug].levels[0].questions;
  }

  const length = data.length;

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const submitGuess = () => {
    if (Number.parseInt(guess) == data[index].answer) {
      setCorrectGuesses(correctGuesses + 1);
    }
    if (index < length - 1) {
      setIndex(index + 1);
      setGuess("");
      if (inputElement.current) {
        inputElement.current.focus();
      }
    } else {
      setGameOver(true);
    }
  };

  const onCloseGameOver = () => {
    setIndex(0);
    setCorrectGuesses(0);
    setGuess("");
    setGameOver(false);
  };

  const component = (
    <div className="py-16 m-8 space-y-8 bg-white flex flex-col shadow-lg justify-center items-center">
      <p>
        Question {index + 1} / {length}
      </p>
      <div className="p-16 bg-purple-300 text-2xl">{data[index].text}</div>
      <input
        id="guess"
        type="text"
        autoComplete="off"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Enter Answer"
        ref={inputElement}
      />
      <button
        type="submit"
        className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={submitGuess}
      >
        Submit
      </button>
    </div>
  );

  return (
    <div>
      <Navbar />

      <div className="pt-4">{component}</div>
      <Modal
        id="game-over-model"
        isOpen={isGameOver}
        transition={ModalTransition.SCALE}
      >
        <div className="py-16 m-8 space-y-8 bg-white flex flex-col justify-center items-center">
          <p className="text-2xl">Speed </p>1 minute 24 seconds
          <p className="text-2xl">Accuracy</p>
          {Math.round((100 * correctGuesses) / length)}%
          <button
            type="submit"
            className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onCloseGameOver}
          >
            OK
          </button>
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
      { params: { slug: "addition" } },
      { params: { slug: "subtraction" } },
      { params: { slug: "multiplication" } },
    ],
    fallback: true,
  };
}

export default Quiz;
