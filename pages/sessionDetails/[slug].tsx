import React from "react";
import { session, useSession } from "next-auth/client";
import Navbar from "../../components/Navbar";
import initializeApollo from "../../lib/apollo";
import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { FETCH_FLASHCARD_GUESSES_BY_SESSION } from "../../graphql/fetchFlashcardGuessBySession";

export default function SessionDetails({slug}) {
  console.log(slug)
  const guessesResult = useQuery(FETCH_FLASHCARD_GUESSES_BY_SESSION, {
    variables: { session_id: slug },
  });

  let guesses = [];
  if (guessesResult.data) {
    guesses = guessesResult.data.flashcard_guesses;
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <h1 className="text-lg p-4">Session - Flashcards</h1>
      <ul>
        {guesses.map((it) => (
          <li key={it.created_at}>
            <div
              className={`p-4 m-4 ${
                it.is_correct ? "bg-green-300" : "bg-red-400"
              }`}
            >
              {it.question} {it.guess}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
    ],
    fallback: true,
  };
}