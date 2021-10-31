import React, { useEffect, useState } from "react";

import { MultipleChoiceSentence } from "../questionTypes/MultipleChoiceSentence";

export default function TFSATotalContribution(props) {
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
          How much can I contribute to my TFSA in total?
        </h1>
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
      </div>
    </div>
  );
}
