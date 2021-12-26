import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { GuessData } from "../../pages/api/guessData";

import { MultipleChoiceSentence } from "../questionTypes/MultipleChoiceSentence";

export default function TFSABasics(props) {
  const [isShaking, setIsShaking] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const submitGuess = (guessData: GuessData) => {
    if (guessData.isCorrect) {
      setIsFlipped(true);
    } else {
      setIsShaking(true);
    }
  };

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <div className={"bg-white max-w-7xl p-8 flex flex-col gap-8"}>
        <h1 className="text-xl font-bold">
          Why does the TFSA matter?
        </h1>
        <div className="flex flex-col">
          <p className="text-lg">What is the point of a TFSA?</p>
          <p>
            The government created the Tax-Free Savings Account (TFSA) because
            they wanted to encourage more Canadians to invest their money. If
            you invest your money in a normal account and made money, then the
            federal government has the right tax you on any gains or profits
            that you made. If you invest that same money in a TFSA then you're
            allowed to keep all the gains you make off of your investment and
            you don't have to give the government any of your profit.
          </p>
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
            infinite={true}
          >
            <div
              onAnimationEnd={() => setIsShaking(false)}
              className={`${isShaking ? "animate-shake" : ""
                } bg-gray-100 shadow-lg rounded-xl p-8 m-8`}
            >
              <MultipleChoiceSentence
                displayQuestion="What is a benefit of the Tax-Free Savings Account?"
                option1={{
                  id: "a",
                  text: "Encourages more Candians to save for their retirement",
                }}
                option2={{
                  id: "b",
                  text: "Encourages more Candians to invest their money",
                }}
                option3={{
                  id: "c",
                  text: "Helps the government collect more taxes for public services",
                }}
                option4={{
                  id: "d",
                  text: "Helps you move into a lower tax bracket",
                }}
                answer="Encourages more Candians to invest their money"
                submitGuess={submitGuess}
              />
            </div>
            <div
              className="bg-gray-100 shadow-lg rounded-xl p-8 m-8 h-108"
              onClick={(e) => setIsFlipped(false)}
            >
              CORRECT
            </div>
          </ReactCardFlip>
        </div>

        <div className="flex flex-col">
          <p className="text-lg">What do I have to watch out for?</p>
          <ul className="list-inside list-disc">
            <li>
              Don't over contribute more than the limit. If you go over the
              government will charge you a penalty for doing that.
            </li>
            <li>
              You're allowed to take money out of your TFSA accounts at any
              time, but when you take money out your limit doesn't increase. It
              stays the same until the next calendar year. This means that if
              you deposit $1k into a TFSA, take it out and put it back in, then
              you've used $2k of your annual limit. As far as the government is
              concerned, you made two $1K contributions to your TFSA in the same
              calendar year. In the next calendar year on January 1, you will
              carry over any unused contribution room to the current calendar
              year and get that $1K back in contribution room.
              {/* TODO  Reword this section and add a question to test if they know how double contribution affects their limit */}
            </li>
          </ul>
        </div>
      </div>

      {/* TODO create a section that visualizes how much someone can earn by contributing different amounts (max room every year, 50% room every year, $5K a year, $X a year (show warning if X is higher than $5K, saying they might face over contribution penalities)) */}
      {/* show options what if you invested in a high performing stock (Tesla, Apple), what if you invested in a bust? what if you invested in a SP Index */}
    </div>
  );
}
