import React, { useEffect, useState } from "react";

export interface BuildingABakeryAProps {
  monthlyRentQ1: string;
  setMonthlyRentQ1: (monthlyRentQ1: string) => void;
  q1Correct: string;
  setQ1Correct: (q1Correct: string) => void;
  bakerySpaceQ2: string;
  setBakerySpaceQ2: (bakerySpaceQ2: string) => void;
  q2Correct: string;
  setQ2Correct: (q2Correct: string) => void;
  numeratorQ3: any;
  setNumberatorQ3: (numberatorQ3: any) => void;
  denominatorQ3: any;
  setDenominatorQ3: (denominatorQ3: any) => void;
  q3Correct: string;
  setQ3Correct: (q3Correct: string) => void;
  numeratorQ4: any;
  setNumeratorQ4: (numeratorQ4: any) => void;
  denominatorQ4: any;
  setDenominatorQ4: (denominatorQ4: any) => void;
  q4Correct: string;
  setQ4Correct: (q4Correct: string) => void;
}

const BuildingABakeryA = ({
  monthlyRentQ1,
  setMonthlyRentQ1,
  q1Correct,
  setQ1Correct,
  bakerySpaceQ2,
  setBakerySpaceQ2,
  q2Correct,
  setQ2Correct,
  numeratorQ3,
  setNumberatorQ3,
  denominatorQ3,
  setDenominatorQ3,
  q3Correct,
  setQ3Correct,
  numeratorQ4,
  setNumeratorQ4,
  denominatorQ4,
  setDenominatorQ4,
  q4Correct,
  setQ4Correct,
}: BuildingABakeryAProps) => {
  const validateQ1 = (newMonthlyRentQ1: string) => {
    if (newMonthlyRentQ1 === "250") {
      setQ1Correct("Correct");
    } else {
      setQ1Correct("");
    }
  };

  const validateQ2 = (newBakerySpaceQ2: string) => {
    if (newBakerySpaceQ2 === "450") {
      setQ2Correct("Correct");
    } else {
      setQ2Correct("");
    }
  };

  const validateQ3Top = (newNumeratorQ3: string) => {
    setNumberatorQ3(newNumeratorQ3);
  };

  const validateQ3Btm = (newDenominatorQ3: string) => {
    setDenominatorQ3(newDenominatorQ3);
  };

  const validateQ4Top = (newNumeratorQ4: string) => {
    setNumeratorQ4(newNumeratorQ4);
  };

  const validateQ4Btm = (newDenominatorQ4: string) => {
    setDenominatorQ4(newDenominatorQ4);
  };

  return (
    <div className={"mt-8 mb-16"}>
      <div
        className={
          "flex justify-center font-bold text-red-200 text-6xl border-collapse"
        }
      >
        Building A Bakery
      </div>
      <div className={"grid grid-col-1 sm:grid-cols-2 border-collapse"}>
        {/* use sm:grid-cols-2 for large screens*/}
        <div
          className={"flex justify-center border-4 border-red-200 mt-8 ml-16"}
        >
          <div>
            {" "}
            <div className={"flex flex-wrap px-4 justify-center"}>
              The location you choose chosts $1000 per month to rent. The bakery
              that you almost rented was 1/4 the cost but was much too small.
              How much was the other bakery per month?
            </div>
            <div className={"grid grid-col-3 gap-4 mt-4 mb-4 mx-4 "}>
              <div className={" col-span-2 "}> Equation:</div>
              <div className={"col-start-3  "}> Answer: {q1Correct}</div>
              <input
                className={"bg-yellow-100 col-span-2 h-20 text-center"}
              ></input>
              <input
                className={
                  q1Correct === "Correct"
                    ? "bg-green-100 col-start-3  h-20 text-center"
                    : "bg-yellow-100 col-start-3  h-20 text-center"
                }
                value={monthlyRentQ1}
                onChange={(e) => {
                  const newMonthlyRentQ1 = e.target.value;
                  setMonthlyRentQ1(newMonthlyRentQ1);
                  validateQ1(newMonthlyRentQ1);
                }}
              ></input>
            </div>
          </div>
        </div>
        <div
          className={
            "flex justify-center  col-start-2 border-4 border-red-200 mt-8 mr-16"
          }
        >
          <div>
            <div className={"flex flex-wrap px-4 justify-center"}>
              Your bakery is located in a large shopping center. The entire
              shopping center is 4500 square feet. Your baekery takes up only
              1/10 of that space. How many square feet is your bakery?
            </div>
            <div className={"grid grid-col-3 gap-4 mt-4 mb-4 mx-4 "}>
              <div className={" col-span-2 "}> Equation:</div>
              <div className={"col-start-3  "}> Answer: {q2Correct}</div>
              <input
                className={"bg-yellow-100  col-span-2 h-20 text-center"}
              ></input>
              <input
                className={
                  q2Correct === "Correct"
                    ? "bg-green-100 col-start-3  h-20 text-center"
                    : "bg-yellow-100 col-start-3  h-20 text-center"
                }
                value={bakerySpaceQ2}
                onChange={(e) => {
                  const newBakerySpaceQ2 = e.target.value;
                  setBakerySpaceQ2(newBakerySpaceQ2);
                  validateQ2(newBakerySpaceQ2);
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className={"flex justify-center border-4 border-red-200 ml-16"}>
          <div>
            <div className={"flex flex-wrap px-4 justify-center"}>
              There is an ice cream & candy shop next door that is the same size
              as your bakery. How many 30ths of the space does it take up?
              (think Equivalent Fractions)
            </div>
            <div className={"grid grid-col-3 gap-4 mt-4 mb-4 mx-4 "}>
              <div className={" col-span-2 "}> Equation:</div>
              <div className={"col-start-3  "}>
                {" "}
                Answer:
                {numeratorQ3 / denominatorQ3 === 0.1
                  ? setQ3Correct("Correct")
                  : setQ3Correct("")}{" "}
                {q3Correct}
              </div>
              <input
                className={"bg-yellow-100  col-span-2 h-20 text-center"}
              ></input>
              <div className={"grid grid-rows-2 gap-2"}>
                <input
                  className={
                    q3Correct === "Correct"
                      ? "bg-green-100 w-1/3 row-start-1 h-10 text-center "
                      : "bg-yellow-100 w-1/3 row-start-1 h-10 text-center "
                  }
                  value={numeratorQ3}
                  onChange={(e) => {
                    const newNumeratorQ3 = e.target.value;
                    setNumberatorQ3(newNumeratorQ3);
                    validateQ3Top(newNumeratorQ3);
                  }}
                ></input>
                <input
                  className={
                    q3Correct === "Correct"
                      ? "bg-green-100 w-1/3 row-start-2 h-10 text-center"
                      : "bg-yellow-100 w-1/3 row-start-2 h-10 text-center"
                  }
                  value={denominatorQ3}
                  onChange={(e) => {
                    const newDenominatorQ3 = e.target.value;
                    setDenominatorQ3(newDenominatorQ3);
                    validateQ3Btm(newDenominatorQ3);
                  }}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "flex justify-center  col-start-2 border-4 border-red-200 mr-16"
          }
        >
          <div>
            <div className={"flex flex-wrap px-4 justify-center"}>
              100/225 square feet of your bakery will be used as your
              storefront, where customers come to visit. The rest will be used
              for storage and baking. In simplest form, what fraction of space
              will be for storage and baking?
            </div>
            <div className={"grid grid-col-3 gap-4 mt-4 mb-4 mx-4 "}>
              <div className={" col-span-2 "}> Equation:</div>
              <div className={"col-start-3  "}>
                {" "}
                Answer:
                {numeratorQ4 === "5" && denominatorQ4 == "9"
                  ? setQ4Correct("Correct")
                  : setQ4Correct("")}
                {q4Correct}
              </div>
              <input
                className={"bg-yellow-100  col-span-2 h-20 text-center"}
              ></input>
              <div className={"grid grid-rows-2 gap-2"}>
                <input
                  className={
                    q4Correct === "Correct"
                      ? "bg-green-100 w-1/3 row-start-1 h-10 text-center "
                      : "bg-yellow-100 w-1/3 row-start-1 h-10 text-center "
                  }
                  value={numeratorQ4}
                  onChange={(e) => {
                    const newNumeratorQ4 = e.target.value;
                    setNumeratorQ4(newNumeratorQ4);
                    validateQ4Top(newNumeratorQ4);
                  }}
                ></input>
                <input
                  className={
                    q4Correct === "Correct"
                      ? "bg-green-100 w-1/3 row-start-2 h-10 text-center"
                      : "bg-yellow-100 w-1/3 row-start-2 h-10 text-center"
                  }
                  value={denominatorQ4}
                  onChange={(e) => {
                    const newDenominatorQ4 = e.target.value;
                    setDenominatorQ4(newDenominatorQ4);
                    validateQ4Btm(newDenominatorQ4);
                  }}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingABakeryA;
