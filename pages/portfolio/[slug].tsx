import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import { FETCH_FLASHCARD_GUESSES } from "../../graphql/fetchFlashcardGuesses";
import _ from "lodash";
import Link from "next/link";
import { getSkillIdFromSlug, userId } from "../../graphql/utils/constants";
import Card from "../../components/ui/Card";
import data from "../api/profile/data.json";

const Portfolio = ({ slug }) => {
  const { data: session, status } = useSession();
  const guessesResult = useQuery(FETCH_FLASHCARD_GUESSES, {
    variables: {
      userId: userId(session),
      skillId: getSkillIdFromSlug(slug),
    },
  });

  const [guesses, setGuesses] = React.useState([]);
  const [practiceSessions, setPracticeSessions] = React.useState([]);
  const [statements, setStatements] = React.useState([]);

  useEffect(() => {
    const filteredList = data.data.filter((it) => it.name === slug);
    if (filteredList.length > 0) {
      setStatements(filteredList[0].statements);
    } else {
      setStatements([]);
    }
  }, []);

  useEffect(() => {
    if (guessesResult.data && userId(session) != "-1") {
      console.log("guessesResult.data", guessesResult.data);
      console.log(getSkillIdFromSlug(slug));
      setGuesses(guessesResult.data.flashcard_guesses);
      const sessions = groupByPracticeSession(
        guessesResult.data.flashcard_guesses
      );
      setPracticeSessions(sessions);
    }
  }, [guessesResult, session]);

  const groupByPracticeSession = (guesses) => {
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
    let date = "";
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

  const overallStats = () => {
    let maxAccuracy = 0;
    let speedForMaxAccuracy = 0;

    practiceSessions.map((it) => {
      const stats = sessionRollup(it);
      if (stats.accuracy === maxAccuracy) {
        speedForMaxAccuracy = Math.max(speedForMaxAccuracy, stats.speed);
      } else if (stats.accuracy > maxAccuracy) {
        maxAccuracy = stats.accuracy;
        speedForMaxAccuracy = stats.speed;
      }
    });

    return {
      accuracy: maxAccuracy,
      speed: speedForMaxAccuracy,
    };
  };

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gray-200">
      <div className="h-screen flex flex-col p-4 gap-8">
        <h1 className="text-lg font-bold">Quiz Attempts - {slug}</h1>
        <div>
          <p className="font-bold mb-2 text-sm text-gray-500">Best Attempt</p>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  <p>Accuracy</p>
                </div>

                <p className="font-bold">{overallStats().accuracy}% </p>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Speed
                </div>
                <p className="font-bold">{overallStats().speed} seconds</p>
              </div>
            </Card>
          </div>
        </div>
        <div>
          <p className="font-bold mb-2 text-sm text-gray-500">History</p>
          <div className="flex shadow-md items-center justify-between p-4 border-b-4 bg-white rounded-t-md border-blue-400">
            <p className="">Date</p>
            <p className="">Accuracy</p>
            <p className="">Speed</p>
          </div>
          <ul className="">
            {practiceSessions.map((it) => {
              const stats = sessionRollup(it);
              return (
                <Link
                  key={stats.session_id}
                  href={"/sessionDetails/" + stats.session_id}
                >
                  <li className="flex shadow-md items-center justify-between p-4 bg-white border-b-2 hover:bg-blue-100">
                    <p className="text-sm">
                      {new Date(stats.date).toDateString()}
                    </p>
                    <p className="text-sm">{stats.accuracy}% </p>
                    <p className="text-sm">{stats.speed} seconds</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
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
    paths: [{ params: { slug: "Numbers" } }],
    fallback: true,
  };
}

export default Portfolio;
