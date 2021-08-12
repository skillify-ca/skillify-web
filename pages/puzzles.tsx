import { getSession, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/Button";
import { Puzzle, PUZZLE_DATA } from "./api/puzzle";

export default function Puzzles({ puzzleData }) {
  const [session, loading] = useSession();
  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-8 m-8">
          <div className="flex flex-col w-full sm:w-1/2 gap-8 justify-center">
            <p className="text-4xl font-bold text-blue-900">
              MULTIPLICATION PUZZLES{" "}
            </p>
            <p className="text-xl">
              Solve these puzzles to learn multiplication facts
            </p>
            <div className="flex flex-wrap gap-8">
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
            className="w-full sm:w-1/2 object-cover rounded-xl"
            alt="student-image"
            src="/images/practiceAdd.png"
          />
        </div>
      </div>
    </div>
  );
}

Puzzles.auth = true;

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
      puzzleData: PUZZLE_DATA,
    },
  };
}
