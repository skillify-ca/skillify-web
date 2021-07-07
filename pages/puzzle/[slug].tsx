import React from "react";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";
import DragAndDropPuzzle from "../../components/stories/DragAndDropPuzzle";
import { GuessData } from "../api/guessData";

const PuzzlePage = ({ slug }) => {
  const onSubmit = (guess: GuessData) => {
    alert(guess.isCorrect)
  };
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <DiagnosticNavbar />
      <div className="flex flex-col justify-between mt-8 mr-8 ml-8">
        <p className="text-4xl font-bold">Puzzle</p>
        <p className="">Use each number once to complete the puzzle</p>
        <DragAndDropPuzzle onSubmit={onSubmit} />
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
