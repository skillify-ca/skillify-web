import React from "react";
import { Food, Truck } from "../../pages/api/foodtruck/food";

export interface ProdCostEquationProps {
  selectedFood: Food;
  selectedTruck: Truck;
  selectedNumWorkers: string;

  prodCostEquationOneBoxOne: string;
  setProdCostEquationOneBoxOne: (prodCostEquationOneBoxOne: string) => void;
  prodCostEquationOneBoxTwo: string;
  setProdCostEquationOneBoxTwo: (prodCostEquationOneBoxTwo: string) => void;
  prodCostEquationOneBoxThree: string;
  setProdCostEquationOneBoxThree: (prodCostEquationOneBoxThree: string) => void;

  prodCostEquationTwoBoxOne: string;
  setProdCostEquationTwoBoxOne: (prodCostEquationTwoBoxOne: string) => void;
  prodCostEquationTwoBoxTwo: string;
  setProdCostEquationTwoBoxTwo: (prodCostEquationTwoBoxTwo: string) => void;
  prodCostEquationTwoBoxThree: string;
  setProdCostEquationTwoBoxThree: (prodCostEquationTwoBoxThree: string) => void;
  prodCostEquationTwoBoxFour: string;
  setProdCostEquationTwoBoxFour: (prodCostEquationTwoBoxFour: string) => void;
}

const ProdCostEquation = ({
  selectedFood,
  selectedTruck,
  selectedNumWorkers,
  prodCostEquationOneBoxOne,
  setProdCostEquationOneBoxOne,
  prodCostEquationOneBoxTwo,
  setProdCostEquationOneBoxTwo,
  prodCostEquationOneBoxThree,
  setProdCostEquationOneBoxThree,
  prodCostEquationTwoBoxOne,
  setProdCostEquationTwoBoxOne,
  prodCostEquationTwoBoxTwo,
  setProdCostEquationTwoBoxTwo,
  prodCostEquationTwoBoxThree,
  setProdCostEquationTwoBoxThree,
  prodCostEquationTwoBoxFour,
  setProdCostEquationTwoBoxFour,
}: ProdCostEquationProps) => {
  const validateQuestionOneInputs = () => {
    return Number.parseInt(prodCostEquationOneBoxOne) ===
      selectedFood.qtyProducedPerWorkerHour *
        Number.parseInt(selectedNumWorkers) &&
      Number.parseInt(prodCostEquationOneBoxTwo) === selectedFood.unitCost
      ? "Correct Inputs"
      : "Incorrect Inputs";
  };
  const validateQuestionOneAnswer = () => {
    return Number.parseInt(prodCostEquationOneBoxThree) ===
      selectedFood.qtyProducedPerWorkerHour *
        Number.parseInt(selectedNumWorkers) *
        selectedFood.unitCost
      ? "Correct Answer"
      : "Incorrect Answer";
  };

  const validateQuestionTwoInputs = () => {
    return Number.parseInt(prodCostEquationTwoBoxOne) ===
      selectedTruck.fixedCost / 30 &&
      Number.parseInt(prodCostEquationTwoBoxTwo) ===
        selectedTruck.variableCost / 6 &&
      Number.parseInt(prodCostEquationTwoBoxThree) === 6
      ? "Correct Inputs"
      : "Incorrect Inputs";
  };

  const validateQuestionTwoAnswer = () => {
    return Number.parseInt(prodCostEquationTwoBoxFour) === 69
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
          How much will it cost us every day to sell {selectedFood.name}
          {selectedFood.name === "Hot Dog" ? "s" : ""}?
        </h1>
        <span className={progressContainerCSS()}>{validateComponent()}</span>
      </div>
      <h1 className="text-2xl p-4">
        First - how much do the ingredients for {selectedFood.name} cost?
      </h1>
      <h1 className="text-2xl font-bold p-4">Equation 1:</h1>
      <div className="grid grid-cols-7 items-center justify-center py-4">
        <p className="text-2xl text-center">Plates per Hour</p>
        <p className="text-4xl text-center">x</p>
        <p className="text-2xl text-center">Cost per Plate</p>
        <p className="text-4xl text-center">=</p>
        <p className="text-2xl text-center">Total Ingredient Cost per Hour</p>
        <p></p>
        <p></p>
      </div>
      <div className="grid grid-cols-7 items-center justify-center pt-8">
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={prodCostEquationOneBoxOne}
          onChange={(e) => {
            setProdCostEquationOneBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">x</p>
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={prodCostEquationOneBoxTwo}
          onChange={(e) => setProdCostEquationOneBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={prodCostEquationOneBoxThree}
          onChange={(e) => setProdCostEquationOneBoxThree(e.target.value)}
          placeholder="2"
        />
        <p className="border-double border-4 border-black text-center col-start-5 mt-4">
          {validateQuestionOneInputs()} {validateQuestionOneAnswer()}
        </p>
        <p></p>
        <p></p>
      </div>
      <h1 className="text-2xl p-4">
        Next - how much does our {selectedTruck.model} cost to operate daily?
      </h1>
      <h1 className="text-2xl font-bold pt-8 pl-4">Equation 2:</h1>
      <div className="grid grid-cols-7 items-center justify-center pt-4">
        <p className="text-2xl text-center m-4">Daily Rental Cost</p>
        <p className="text-4xl text-center m-4">+</p>
        <p className="text-2xl text-center m-4">Hourly Operating Cost</p>
        <p className="text-4xl text-center m-4">x</p>
        <p className="text-2xl text-center m-4">Hours Operating Per Day</p>
        <p className="text-4xl text-center m-4">=</p>
        <p className="text-2xl text-center m-4">Truck Cost per Day</p>

        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={prodCostEquationTwoBoxOne}
          onChange={(e) => {
            setProdCostEquationTwoBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">+</p>
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={prodCostEquationTwoBoxTwo}
          onChange={(e) => setProdCostEquationTwoBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">x</p>
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={prodCostEquationTwoBoxThree}
          onChange={(e) => setProdCostEquationTwoBoxThree(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className="border-2 border-black p-4 text-grey-darkest max-w-sm"
          value={prodCostEquationTwoBoxFour}
          onChange={(e) => setProdCostEquationTwoBoxFour(e.target.value)}
          placeholder="2"
        />
        <p className="text-center col-start-1">(hint: monthly cost / 30)</p>
        <p className="text-center col-start-3">(hint: daily cost / 6)</p>
        <p className="text-center col-start-5">(hint: 6 hours per day)</p>
        <p className="border-double border-4 border-black text-center col-start-7 mt-4">
          {validateQuestionTwoInputs()} {validateQuestionTwoAnswer()}
        </p>
      </div>
    </div>
  );
};

export default ProdCostEquation;
