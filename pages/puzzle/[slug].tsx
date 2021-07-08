import React from "react";
import { useState } from "react";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";
import DragAndDropPuzzle from "../../components/stories/DragAndDropPuzzle";
import { GuessData } from "../api/guessData";

const PuzzlePage = ({ slug }) => {
  const [isGraded, setIsGraded] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const onSubmit = (guess: GuessData) => {
    setIsGraded(true);
    setIsCorrect(guess.isCorrect);
  };
  const onReset = () => {
    setIsGraded(false);
    setIsCorrect(false);
  };
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <DiagnosticNavbar />
      <div className="flex flex-col justify-between mt-8 mr-8 ml-8">
        <p className="text-4xl font-bold">Puzzle</p>
        <p className="">Use each number once to complete the puzzle</p>
        <DragAndDropPuzzle
          onReset={onReset}
          onSubmit={onSubmit}
          puzzleId={slug}
        />
        {isGraded && isCorrect && (
          <p className="text-4xl text-green-400 font-bold text-center m-8">
            Correct
          </p>
        )}
        {isGraded && !isCorrect && (
          <p className="text-4xl text-red-400 font-bold text-center m-8">
            Incorrect
          </p>
        )}
      </div>
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
      { params: { slug: "division" } },
    ],
    fallback: true,
  };
}

export default PuzzlePage;
