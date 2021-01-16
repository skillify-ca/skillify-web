import React, { useState } from "react";
import PlayerList from "./PlayerList";
import { useEffect } from "react";

export default function Race(props) {
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        // callMyFunction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div class="container px-16 py-16">
      <p class="text-lg">Numbers Dash, Intermediate Level</p>
      <div>
        <p class="text-sm pt-8">1 of 10</p>
        <div>
          <div class="flex flex-col bg-gray-300 place-items-center mx-auto">
            <p class="text-xl pt-8">83 + 64 = </p>
            <p class="text-base pt-8">Input</p>
            <input
              class="input w-1/2 border border-gray-400 appearance-none rounded px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
              id="answer"
              type="text"
              autofocus
            />
            <p className="text-base text-red-500 py-4">Oops, try again</p>
          </div>
          
        </div>
        <div>
          <PlayerList/>
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
