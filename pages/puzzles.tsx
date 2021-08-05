import { getSession, useSession } from "next-auth/client";
import React from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import ProfileComponent from "../components/ProfileComponent";
import { PUZZLE_DATA } from "./api/puzzle";

export default function Puzzles () {
  const [session, loading] = useSession();
  const puzzleData = PUZZLE_DATA;
  return (
    <div>
      <DiagnosticNavbar />
      <div>
      {Object.values(puzzleData).map(puzzle => <p>{puzzle.title}</p>)}
      </div>
    </div>
  );
};

Puzzles.auth = true;

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
