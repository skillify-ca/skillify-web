import React, { useEffect, useState } from 'react';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';
import Link from 'next/link';

export default function Try3Page() {
  const questions = [
    {
      title: 'Question 1',
      prompt:
        'Write a function that takes an array of integers and returns the sum of all even numbers in the array.',
      dmojLink: 'https://www.dmoj.ca/problem/example',
      leetCodeLink: 'https://leetcode.com/problems/example',
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
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
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
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold">Hands-On Coding Questions</h1>
          <Link href="./assign2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Next
            </button>
          </Link>
        </div>

        <div className="border-b my-4"></div>
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold">
            Time Left: {formatTime(timer)}
          </div>
          <div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
              onClick={handleStartTimer}
            >
              Start Timer
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4"
              onClick={handleStopTimer}
            >
              Stop Timer
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
              onClick={handleResetTimer}
            >
              Reset Timer
            </button>
          </div>
        </div>

        <div className="border-b my-4"></div>
        <div className="flex flex-col">
          {questions.map((question, index) => (
            <div key={index} className="border p-4 mb-4">
              <h2 className="text-xl font-bold mb-2">{question.title}</h2>
              <p className="mb-4">{question.prompt}</p>
              <div className="flex justify-between">
                <a
                  href={question.leetCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  LeetCode
                </a>
                <a
                  href={question.dmojLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
                >
                  DMOJ
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Try3Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
