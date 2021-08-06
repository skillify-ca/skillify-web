import { getSession, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import ProfileComponent from "../components/ProfileComponent";
import { Button } from "../components/ui/Button";
import { PUZZLE_DATA } from "./api/puzzle";

export default function Puzzles() {
  const [session, loading] = useSession();
  const puzzleData = PUZZLE_DATA;
  return (
    <div>
      <DiagnosticNavbar />
      <div>
        <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl pl-4 gap-8 m-8">
          <img
            className="w-full sm:w-1/2 object-cover rounded-xl"
            alt="student-image"
            src="/images/practiceAdd.png"
          />
          <div className="flex flex-col w-full sm:w-1/2 gap-4 justify-center">
            <p className="text-4xl font-bold text-blue-900"> PUZZLES </p>
            <p className="text-xl">Solve this puzzle to learn math</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 p-8">
          {Object.values(puzzleData).map((puzzle) => (
            <Link href={`/puzzle/${puzzle.id}`}>
              <Button
                label={puzzle.title}
                backgroundColor="blue"
                textColor="white"
              />
            </Link>
          ))}
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
    },
  };
}
