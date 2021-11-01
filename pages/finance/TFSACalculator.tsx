import React, { useEffect, useState } from "react";

import { MultipleChoiceSentence } from "../../components/questionTypes/MultipleChoiceSentence";

export default function TFSACalculator(props) {

  const contributionLimits = [
    { year: 2021, limit: 6000 },
    { year: 2020, limit: 6000 },
    { year: 2019, limit: 6000 },
    { year: 2018, limit: 5500 },
    { year: 2017, limit: 5500 },
    { year: 2016, limit: 5500 },
    { year: 2015, limit: 10000 },
    { year: 2014, limit: 5500 },
    { year: 2013, limit: 5500 },
    { year: 2012, limit: 5000 },
    { year: 2011, limit: 5000 },
    { year: 2010, limit: 5000 },
    { year: 2009, limit: 5000 },
  ];

  const [birthYear, setBirthYear] = useState(2001);

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <div className={"bg-white max-w-7xl p-8 flex flex-col gap-8"}>
        <h1 className="text-xl font-bold">
          How to become a millionaire with your TFSA
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
          <div className="bg-gray-100 shadow-lg rounded-xl p-8 m-8">
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
              answer="b"
              submitGuess={() => {}} // TODO if they pick wrong, do a wiggle animation, if they pick right, flip the card and show a correct sign
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-lg">What is the annual limit?</p>
          <p>
            The annual limit is how much any Canadian can contribute to their
            TFSA accounts that year, but remember your unused limits from
            previous years carry over since the year you turned 18!
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg">Who decides the annual limit?</p>
          <p>
            The federal government decides what the annual limit will be for the
            year. Governments that want to incentivize Canadians to invest more
            may increase the annual limit. This would mean that the government
            would earn less taxes, and have less money to spend on public
            services like education, healthcare and defence.
          </p>
        </div>
        <div className="flex flex-col bg-gray-100 p-8 m-8 shadow-lg rounded-xl gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <p>What year were your born in?</p>
              <input
                className="border-yellow-600 border-4 p-4 text-lg w-64"
                type="number"
                value={birthYear}
                onChange={(e) => setBirthYear(Number.parseInt(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              {18 + birthYear >= new Date().getFullYear() ? (
                <p className="text-lg">
                  You will turn 18 in:{" "}
                  <span className="font-bold">{18 + birthYear}</span>
                </p>
              ) : (
                <p className="text-lg">
                  You turned 18 in:{" "}
                  <span className="font-bold">{18 + birthYear}</span>
                </p>
              )}
              <p className="text-lg">
                Your total contribution limit is{" "}
                <span className="font-bold">
                  $
                  {contributionLimits
                    .filter((row) => row.year >= birthYear + 18)
                    .reduce((a, b) => a + b.limit, 0)}
                </span>
              </p>
              <p>
                This is the total amount of money that you're allowed to put
                into all your TFSA accounts combined.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-bold text-lg">
              Contribution Limit Table by Year
            </p>
            <div className="grid grid-cols-2">
              <p className="bg-yellow-400 font-bold border-b-2 border-black py-4 px-2">
                {"Year"}
              </p>
              <p className="bg-yellow-400 font-bold border-b-2 border-black py-4 px-2">
                {"Annual Limit"}
              </p>
              {contributionLimits.map((row) => (
                <div
                  className={`col-span-2 grid grid-cols-2 ${
                    row.year >= birthYear + 18
                      ? "bg-green-200"
                      : "bg-yellow-400"
                  } hover:bg-yellow-200`}
                >
                  <p className="p-2">{row.year}</p>
                  <p className="p-2">${row.limit}</p>
                </div>
              ))}
            </div>
          </div>
          {/* TODO Add a question that asks them to calulate contribution room for someone born a year older than them */}
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
