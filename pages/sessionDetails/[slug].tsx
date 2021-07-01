import React from "react";
import { session, useSession } from "next-auth/client";
import initializeApollo from "../../lib/apollo";
import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { FETCH_FLASHCARD_GUESSES_BY_SESSION } from "../../graphql/fetchFlashcardGuessBySession";
import { userId, USER_ID } from "../../graphql/utils/constants";
import Card from "../../components/stories/Card";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";

export default function SessionDetails({ slug }) {
  const [session] = useSession();
  const guessesResult = useQuery(FETCH_FLASHCARD_GUESSES_BY_SESSION, {
    variables: { session_id: slug, userId: userId(session) },
  });

  let guesses = [];
  if (guessesResult.data) {
    guesses = guessesResult.data.flashcard_guesses;
  }

  return (
    <div className="flex flex-col bg-gray-200">
      <DiagnosticNavbar />
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">Numbers</h1>
          <h1 className="text-sm text-gray-500 font-bold">Dec 3</h1>
        </div>
        <div className="flex gap-4">
          <Card size="small">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <p>Accuracy</p>
              </div>

              <p className="font-bold">{"XX"}% </p>
            </div>
          </Card>
          <Card size="small">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Speed
              </div>
              <p className="font-bold">{"XX"} seconds</p>
            </div>
          </Card>
        </div>
        <div className="shadow-md">
          <div className="flex items-center justify-between p-4 border-b-4 bg-white rounded-t-md border-blue-400">
            <p>Question</p>
            <p>Guess</p>
          </div>
          <ul className="bg-white">
            {guesses.map((it) => (
              <li
                className={`flex items-center justify-between p-4 border-b-2 hover:bg-blue-100`}
              >
                <p className="text-sm">{it.question} </p>
                <div
                  className={`flex ${
                    it.is_correct ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {it.is_correct ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <p
                    className={`text-sm ${
                      it.is_correct ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {it.guess}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
    paths: [],
    fallback: true,
  };
}
