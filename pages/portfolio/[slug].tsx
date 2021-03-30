import React from "react";
import { useSession } from "next-auth/client";
import Navbar from "../../components/Navbar";
import initializeApollo from "../../lib/apollo";
import { gql, useQuery } from "@apollo/client";
import { FETCH_FLASHCARD_GUESSES } from "../../graphql/fetchFlashcardGuesses";

export default function Portfolio(props) {
  const guessesResult = useQuery(FETCH_FLASHCARD_GUESSES);

  let guesses = [];
  if (guessesResult.data) {
    guesses = guessesResult.data.flashcard_guesses;
  }

  console.log(guesses);
  return (
    <div className="flex flex-col">
      <Navbar />
      Digital Portfolio
      <ul>
        {guesses.map((it) => (
          <li key={it.created_at}>
            <div className={`p-4 m-4 ${it.is_correct ? "bg-green-300" : "bg-red-400"}`}>
              {it.question} {it.guess}
            </div>
          </li>
        ))}
      </ul>
      {/* List of user guesses for this skill */}
    </div>
  );
}
