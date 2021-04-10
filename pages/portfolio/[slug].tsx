import React from "react";
import { session, useSession } from "next-auth/client";
import Navbar from "../../components/Navbar";
import initializeApollo from "../../lib/apollo";
import { gql, useQuery } from "@apollo/client";
import { FETCH_FLASHCARD_GUESSES } from "../../graphql/fetchFlashcardGuesses";
import _ from "lodash";
import Link from "next/link";

export default function Portfolio(props) {
  const guessesResult = useQuery(FETCH_FLASHCARD_GUESSES);

  let guesses = [];
  if (guessesResult.data) {
    guesses = guessesResult.data.flashcard_guesses;
  }

  let guessesBySession = () => {
    const dict = _.groupBy(guesses, function (guess) {
      return guess.session_id;
    });
    const res = [];
    for (var key in dict) {
      res.push(dict[key]);
    }
    return res;
  };
  const sessionRollup = (guesses) => {
    let correct = 0;
    let speed = 0;
    let date = 0;
    let session_id = null;

    if (guesses.length > 0) {
      date = guesses[0].created_at;
      session_id = guesses[0].session_id;
    }

    for (let index = 0; index < guesses.length; index++) {
      const element = guesses[index];
      if (element.is_correct) {
        correct++;
      }
      speed += element.timeTaken;
    }

    const accuracy = Math.round((correct * 100) / guesses.length);
    return { accuracy, speed, date, session_id };
  };

  console.log(guessesBySession());
  return (
    <div className="flex flex-col">
      <Navbar />
      <h1 className="text-lg p-4">Digital Portfolio - Addition</h1>
      <ul>
        {guessesBySession().map((it) => {
          const stats = sessionRollup(it);
          console.log(stats)
          return (
            <Link href={"/sessionDetails/" + stats.session_id}>
              <li
                key={it.session_id}
                className="flex items-center justify-between rounded-xl p-4 m-4 bg-gradient-to-b from-purple-400 via-purple-400 to-purple-500"
              >
                Flashcards
                <div className="flex flex-col">
                  <p>Accuracy: {stats.accuracy}% </p>
                  Speed: {stats.speed} seconds
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
