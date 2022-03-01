import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Navbar from "../../components/ui/Navbar";
import DragAndDropPuzzle from "../../components/stories/DragAndDropPuzzle";
import { Button } from "../../components/ui/Button";
import { GuessData } from "../api/guessData";

const PuzzlePage = ({ slug }) => {
  const router = useRouter();
  const [isShaking, setIsShaking] = useState(false);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const onSubmit = (guess: GuessData) => {
    if (guess.isCorrect) {
      toggleFlip();
    } else {
      setIsShaking(true);
    }
  };
  const onReset = () => {
    setIsShaking(true);
  };
  const onSeeSolutionClicked = () => {
    toggleFlip();
  };
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <Navbar />
      <div className="flex flex-col justify-between p-4 gap-4">
        <p className="text-4xl font-bold">Puzzle</p>
        <p className="">Use each number once to complete the puzzle</p>
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          infinite={true}
        >
          <div
            className={isShaking ? "animate-shake" : ""}
            onAnimationEnd={() => setIsShaking(false)}
          >
            <DragAndDropPuzzle
              onReset={onReset}
              onSubmit={onSubmit}
              puzzleId={slug}
            />
          </div>
          <div
            className={`
        flex flex-col justify-center space-y-16 
        items-center p-8 bg-white shadow-md 
        rounded-xl max-w-screen-lg min-w-full`}
          >
            <p className="text-4xl text-green-400 font-bold text-center m-8">
              Correct
            </p>
            <div className="flex gap-8">
              <Button
                backgroundColor="blue"
                textColor="white"
                label="See Solution"
                onClick={onSeeSolutionClicked}
              />
              <Button
                backgroundColor="green"
                textColor="white"
                label="Exit"
                onClick={(e) => router.back()}
              />
            </div>
          </div>
        </ReactCardFlip>
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
    paths: [{ params: { slug: "8" } }, { params: { slug: "2" } }],
    fallback: true,
  };
}

export default PuzzlePage;
