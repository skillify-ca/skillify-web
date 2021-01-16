import React, { useState, useEffect } from "react";
import PlayerList from "./PlayerList";
import useInput from "../hooks/useInput";
import useEventListener from "../hooks/useEventListener.ts";

export default function Race(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isErrorVisible, setErrorVisibility] = useState(false);
  const [currentGuess, setCurrentGuess, guessInput] = useInput({ type: "number" });

  function onKeyPress({key}) {
    if (key === "Enter") {
      if (currentGuess == questionSet[currentIndex].answer) {
        setErrorVisibility((it) => false);
        setCurrentIndex((c) => c + 1);
        setCurrentGuess((c) => "");
      } else {
        setErrorVisibility((it) => true);
      }
    }
  }

  const questionSet = [
    { description: "1 + 1 = ", answer: 2 },
    { description: "2 + 2 = ", answer: 4 },
    { description: "3 + 3 = ", answer: 6 },
    { description: "4 + 4 = ", answer: 8 },
    { description: "5 + 5 = ", answer: 10 },
  ];

  // example with window based event

  useEventListener("keydown", onKeyPress);

  return (
    <div className="container px-16 py-16">
      <p className="text-lg">Numbers Dash, Intermediate Level</p>
      <div>
        <p className="text-sm pt-8">{currentIndex + 1} of 5</p>
        <div>
          <div className="flex flex-col bg-gray-300 place-items-center mx-auto">
            <p className="text-xl pt-8">
              {questionSet[currentIndex].description}
            </p>
            <p className="text-base pt-8">Input</p>
            {guessInput}
            <div className="py-8">
              {isErrorVisible && (
                <p className="text-base text-red-500">Oops, try again</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <PlayerList />
        </div>
      </div>
    </div>
  );
}

/**
 * Level  Name

Current Question / Total Questions
Current Question Prompt
Current Question Input
Current Question error message

PlayerRace
 */
