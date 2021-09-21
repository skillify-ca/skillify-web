import React, { useEffect, useState } from "react";

export interface BuildingABakeryAProps {
  monthlyRentQ1: string;
  setMonthlyRentQ1: (monthlyRentQ1: string) => void;
  q1Correct: String;
  setQ1Correct: (q1Correct: string) => void;
}

const BuildingABakeryA = ({
  monthlyRentQ1,
  setMonthlyRentQ1,
  q1Correct,
  setQ1Correct,
}: BuildingABakeryAProps) => {
  const validateQ1 = (newMonthlyRentQ1: string) => {
    if (newMonthlyRentQ1 === "250") {
      setQ1Correct("true");
    }
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
      <div className={"grid grid-col-2 border-collapse"}>
        <div
          className={
            "flex justify-center  col-span-1 col-start-1 border-4 border-red-200 mt-8 ml-16"
          }
        >
          <div>
            {" "}
            <div className={"flex flex-wrap px-4 justify-center"}>
              The location you choose chosts $1000 per month to rent. The bakery
              that you almost rented was 1/4 the cost but was much too small.
              How much was the other bakery per month?
            </div>
            <div className={"grid grid-col-3 gap-4 mt-4 mb-4 mx-4 "}>
              <div className={"col-start-1 col-span-2 "}> Equation:</div>
              <div className={"col-start-3 col-span-1 "}> Answer:</div>
              <input
                className={
                  q1Correct === "true"
                    ? "bg-green-100 col-start-1 col-span-2 h-20"
                    : "bg-yellow-100 col-start-1 col-span-2 h-20"
                }
                value={monthlyRentQ1}
                onChange={(e) => {
                  const newMonthlyRentQ1 = e.target.value;
                  setMonthlyRentQ1(newMonthlyRentQ1);
                  validateQ1(newMonthlyRentQ1);
                }}
              ></input>
              <input
                className={"bg-yellow-100 col-start-3 col-span-1 h-20"}
              ></input>
            </div>
          </div>
        </div>
        <div
          className={
            "flex justify-center col-span-1 col-start-2 border-4 border-red-200 mt-8 mr-16"
          }
        >
          <div>
            <div className={"flex flex-wrap px-4 justify-center"}>
              Your bakery is located in a large shopping center. The entire
              shopping center is 4500 square feet. Your baekery takes up only
              1/10 of that space. How many square feet is your bakery?
            </div>
            <div className={"grid grid-col-3 gap-4 mt-4 mb-4 mx-4 "}>
              <div className={"col-start-1 col-span-2 "}> Equation:</div>
              <div className={"col-start-3 col-span-1 "}> Answer:</div>
              <input
                className={"bg-yellow-100 col-start-1 col-span-2 h-20"}
              ></input>
              <input
                className={"bg-yellow-100 col-start-3 col-span-1 h-20"}
              ></input>
            </div>
          </div>
        </div>
        <div
          className={
            "flex justify-center col-span-1 col-start-1 border-4 border-red-200 ml-16"
          }
        >
          <div>
            <div className={"flex flex-wrap px-4 justify-center"}>
              There is an ice cream & candy shop next door that is the same size
              as your bakery. How many thirtieths of the space does it take up?
              (think Equivalent Fractions)
            </div>
            <div className={"grid grid-col-3 gap-4 mt-4 mb-4 mx-4 "}>
              <div className={"col-start-1 col-span-2 "}> Equation:</div>
              <div className={"col-start-3 col-span-1 "}> Answer:</div>
              <input
                className={"bg-yellow-100 col-start-1 col-span-2 h-20"}
              ></input>
              <div className={"grid grid-rows-2 gap-2"}>
                <input
                  className={" bg-yellow-100 w-1/3 row-start-1 h-10 "}
                ></input>
                <input
                  className={" bg-yellow-100 w-1/3 row-start-2 h-10"}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "flex justify-center col-span-1 col-start-2 border-4 border-red-200 mr-16"
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
              <div className={"col-start-1 col-span-2 "}> Equation:</div>
              <div className={"col-start-3 col-span-1 "}> Answer:</div>
              <input
                className={"bg-yellow-100 col-start-1 col-span-2 h-20"}
              ></input>
              <div className={"grid grid-rows-2 gap-2"}>
                <input
                  className={" bg-yellow-100 w-1/3 row-start-1 h-10 "}
                ></input>
                <input
                  className={" bg-yellow-100 w-1/3 row-start-2 h-10"}
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
