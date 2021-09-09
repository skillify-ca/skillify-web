import React from "react";
import { Food } from "../../pages/api/foodtruck/food";

export interface RevenueEquationProps {
  selectedFood: Food;
  selectedNumWorkers: string;
  equationBoxOne: string;
  setEquationBoxOne: (equationBoxOne: string) => void;
  equationBoxTwo: string;
  setEquationBoxTwo: (equationBoxTwo: string) => void;
  equationBoxThree: string;
  setEquationBoxThree: (equationBoxThree: string) => void;
  revEquationTwoBoxOne: string;
  setRevEquationTwoBoxOne: (revEquationTwoBoxTwo: string) => void;
  revEquationTwoBoxTwo: string;
  setRevEquationTwoBoxTwo: (revEquationTwoBoxTwo: string) => void;
  revEquationTwoBoxThree: string;
  setRevEquationTwoBoxThree: (revEquationTwoBoxThree: string) => void;
}

const RevenueEquation = ({
  selectedFood,
  selectedNumWorkers,
  equationBoxOne,
  setEquationBoxOne,
  equationBoxTwo,
  setEquationBoxTwo,
  equationBoxThree,
  setEquationBoxThree,
  revEquationTwoBoxOne,
  setRevEquationTwoBoxOne,
  revEquationTwoBoxTwo,
  setRevEquationTwoBoxTwo,
  revEquationTwoBoxThree,
  setRevEquationTwoBoxThree,
}: RevenueEquationProps) => {
  const validateQuestionOneInputs = () => {
    return equationBoxOne ===
      selectedFood.qtyProducedPerWorkerHour.toString() &&
      equationBoxTwo === selectedNumWorkers
      ? "Correct Inputs"
      : "Incorrect Inputs";
  };
  const validateQuestionOneAnswer = () => {
    return Number.parseInt(equationBoxThree) ===
      selectedFood.qtyProducedPerWorkerHour *
        Number.parseInt(selectedNumWorkers)
      ? "Correct Answer"
      : "Incorrect Answer";
  };
  const validateQuestionTwoInputs = () => {
    return Number.parseInt(revEquationTwoBoxOne) ===
      selectedFood.qtyProducedPerWorkerHour *
        Number.parseInt(selectedNumWorkers) &&
      Number.parseInt(revEquationTwoBoxTwo) === selectedFood.unitRevenue
      ? "Correct Inputs"
      : "Incorrect Inputs";
  };

  const validateQuestionTwoAnswer = () => {
    return Number.parseInt(revEquationTwoBoxThree) ===
      selectedFood.qtyProducedPerWorkerHour *
        Number.parseInt(selectedNumWorkers) *
        selectedFood.unitRevenue
      ? "Correct Answer"
      : "Incorrect Answer";
  };

  const validateComponent = () => {
    return validateQuestionOneAnswer() === "Correct Answer" &&
      validateQuestionTwoAnswer() === "Correct Answer"
      ? "Complete!"
      : "Incomplete";
  };

  const progressContainerCSS = () => {
    return validateComponent() === "Complete!"
      ? "bg-green-300 w-1/6 text-center border-2 border-black border-double p-4"
      : "bg-yellow-300 w-1/6 text-center border-2 border-black border-double p-4";
  };
  return (
    <div className="flex flex-col border-2 border-dashed border-black p-4">
      <div className="flex flex-cols-2 items-center">
        <h1 className="w-5/6 text-4xl text-center p-4">
          How much money can we make every day selling {selectedFood.name}
          {selectedFood.name === "Hot Dog" ? "s" : ""}?
        </h1>
        <span className={progressContainerCSS()}>{validateComponent()}</span>
      </div>

      <h1 className="text-2xl p-4">
        First - how many plates of{" "}
        {selectedFood.name === "Hot Dog"
          ? selectedFood.name + "s"
          : selectedFood.name}{" "}
        can we make in an hour?
      </h1>
      <h1 className="text-2xl font-bold p-4">Equation 1:</h1>
      <div className="grid grid-cols-5 items-center justify-center py-4">
        <p className="text-2xl text-center">Plates per Worker per Hour</p>
        <p className="text-4xl text-center">x</p>
        <p className="text-2xl text-center"># of Workers</p>
        <p className="text-4xl text-center">=</p>
        <p className="text-2xl text-center">Plates per Hour</p>
      </div>
      <div className="grid grid-cols-5 items-center justify-center pt-8">
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={equationBoxOne}
          onChange={(e) => {
            setEquationBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">x</p>
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={equationBoxTwo}
          onChange={(e) => setEquationBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={equationBoxThree}
          onChange={(e) => setEquationBoxThree(e.target.value)}
          placeholder="2"
        />
        <p className="border-double border-4 border-black text-center col-start-5 mt-4">
          {validateQuestionOneInputs()} {validateQuestionOneAnswer()}
        </p>
      </div>

      <h1 className="text-2xl pt-8">
        Now - let's figure out how much money we can make in an hour
      </h1>

      <h1 className="text-2xl font-bold pt-8 pl-4">Equation 2:</h1>
      <div className="grid grid-cols-5 items-center justify-center pt-4">
        <p className="text-2xl text-center m-4">Plates per Hour</p>
        <p className="text-4xl text-center m-4">x</p>
        <p className="text-2xl text-center m-4">Price per Plate</p>
        <p className="text-4xl text-center m-4">=</p>
        <p className="text-2xl text-center m-4">$$$ per Hour</p>
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={revEquationTwoBoxOne}
          onChange={(e) => {
            setRevEquationTwoBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">x</p>
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={revEquationTwoBoxTwo}
          onChange={(e) => setRevEquationTwoBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={revEquationTwoBoxThree}
          onChange={(e) => setRevEquationTwoBoxThree(e.target.value)}
          placeholder="2"
        />
        <p className="border-double border-4 border-black text-center col-start-5 mt-4">
          {validateQuestionTwoInputs()} {validateQuestionTwoAnswer()}
        </p>
      </div>
    </div>
  );
};

export default RevenueEquation;
