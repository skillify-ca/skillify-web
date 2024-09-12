import Link from "next/link";
import { useEffect, useState } from "react";

export default function Try3Page() {
  const questions = [
    {
      title: "Question 1",
      prompt:
        "Write a function that takes an array of integers and returns the sum of all even numbers in the array.",
      dmojLink: "https://www.dmoj.ca/problem/example",
      leetCodeLink: "https://leetcode.com/problems/example",
    },
    // Add more questions as needed
  ];

  const [timer, setTimer] = useState(15 * 60); // 15 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            setTimerActive(false);
            clearInterval(interval);
            // Perform any actions when the timer reaches 0 here
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerActive]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStartTimer = () => {
    setTimerActive(true);
  };

  const handleStopTimer = () => {
    setTimerActive(false);
  };

  const handleResetTimer = () => {
    setTimer(15 * 60);
    setTimerActive(false);
  };

  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="./try2">
            <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold">Hands-On Coding Questions</h1>
          <Link href="./assign2">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
              Next
            </button>
          </Link>
        </div>

        <div className="my-4 border-b"></div>
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold">
            Time Left: {formatTime(timer)}
          </div>
          <div>
            <button
              className="px-4 py-2 mr-4 text-white bg-blue-500 rounded-lg"
              onClick={handleStartTimer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </button>
            <button
              className="px-4 py-2 mr-4 text-white bg-red-500 rounded-lg"
              onClick={handleStopTimer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                />
              </svg>
            </button>
            <button
              className="px-4 py-2 text-white bg-yellow-500 rounded-lg"
              onClick={handleResetTimer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="my-4 border-b"></div>
        <div className="flex flex-col">
          {questions.map((question, index) => (
            <div key={index} className="p-4 mb-4 border">
              <h2 className="mb-2 text-xl font-bold">{question.title}</h2>
              <p className="mb-4">{question.prompt}</p>
              <div className="flex justify-between">
                <a
                  href={question.leetCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-white bg-green-500 rounded-lg"
                >
                  LeetCode
                </a>
                <a
                  href={question.dmojLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg"
                >
                  DMOJ
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Notes for Next Steps */}
      <div className="my-4 border-b"></div>
      <div className="prose">
        <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold">Notes:</h2>
          <p>
            {" "}
            {`Do some webscraping with this link: https://leetcode.com/studyplan/top-interview-150/`}
            <br />
            {`3 modes of difficulty`} <br />{" "}
            {`Add a points system so user gains points for answering every question.`}
          </p>
        </div>
      </div>
    </div>
  );
}
