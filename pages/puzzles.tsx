import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/Button";
import { Puzzle, PUZZLE_DATA } from "./api/puzzle";

export default function Puzzles({ puzzleData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-white shadow-lg rounded-xl p-8 m-8">
      <div className="flex flex-col gap-8 justify-center">
        <p className="text-2xl font-bold text-blue-900">
          MULTIPLICATION PUZZLES{" "}
        </p>
        <p className="text-xl">
          Solve these puzzles to learn multiplication facts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.values(puzzleData).map((p) => {
            const puzzle = p as Puzzle;
            return (
              <Link href={`/puzzle/${puzzle.id}`}>
                <Button
                  label={puzzle.title}
                  backgroundColor="blue"
                  textColor="white"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <img
        className="object-cover rounded-xl"
        alt="student-image"
        src="/images/practiceAdd.png"
      />
    </div>
  );
}

Puzzles.auth = true;

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  return {
    props: {
      puzzleData: PUZZLE_DATA,
    },
  };
}
