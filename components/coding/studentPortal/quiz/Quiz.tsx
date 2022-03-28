import React, { useState } from "react";
import GradingRibbon from "./GradingRibbon";
import MCOption, { OptionState } from "./MCOption";

export type QuizProps = {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
};

export default function Quiz({}: QuizProps) {
  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <div>
      <div className="px-4 mb-10 sm:px-32">
        <p>Question 1 of 10</p>
        <p className="text-2xl">What does HTML stand for?</p>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-32">
        <div onClick={(e) => setSelectedOption("A")} className="cursor-pointer">
          <MCOption
            text={"Option 1"}
            state={
              selectedOption === "A"
                ? OptionState.SELECTED
                : OptionState.DEFAULT
            }
          />
        </div>
        <div onClick={(e) => setSelectedOption("B")} className="cursor-pointer">
          <MCOption
            text={"Option 2"}
            state={
              selectedOption === "B"
                ? OptionState.SELECTED
                : OptionState.DEFAULT
            }
          />
        </div>
        <div onClick={(e) => setSelectedOption("C")} className="cursor-pointer">
          <MCOption
            text={"Option 3"}
            state={
              selectedOption === "C"
                ? OptionState.SELECTED
                : OptionState.DEFAULT
            }
          />
        </div>
        <div onClick={(e) => setSelectedOption("D")} className="cursor-pointer">
          <MCOption
            text={"Option 4"}
            state={
              selectedOption === "D"
                ? OptionState.SELECTED
                : OptionState.DEFAULT
            }
          />
        </div>
      </div>
      {true && (
        <div className="mt-16 overflow-hidden h-36">
          <div className="mt-0 overflow-hidden transition-all transform">
            <GradingRibbon />
          </div>
        </div>
      )}
    </div>
  );
}
