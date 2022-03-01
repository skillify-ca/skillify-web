import React from "react";
import {
  Food,
  minimumWage,
  operatingHours,
  Truck,
} from "../../../pages/api/foodtruck/food";

export interface ProfitEquationProps {
  selectedFood: Food;
  selectedTruck: Truck;
  selectedNumWorkers: string;
  profitComponentComplete: boolean;
  setProfitComponentComplete: (profitComponentComplete: boolean) => void;
  profitEquationOneBoxOne: string;
  setProfitEquationOneBoxOne: (profitEquationOneBoxOne: string) => void;
  profitEquationOneBoxTwo: string;
  setProfitEquationOneBoxTwo: (profitEquationOneBoxTwo: string) => void;
  profitEquationOneBoxThree: string;
  setProfitEquationOneBoxThree: (profitEquationOneBoxThree: string) => void;
}

const ProfitEquation = ({
  selectedFood,
  selectedTruck,
  selectedNumWorkers,
  profitComponentComplete,
  setProfitComponentComplete,
  profitEquationOneBoxOne,
  setProfitEquationOneBoxOne,
  profitEquationOneBoxTwo,
  setProfitEquationOneBoxTwo,
  profitEquationOneBoxThree,
  setProfitEquationOneBoxThree,
}: ProfitEquationProps) => {
  const validateProfitEquationOneBoxOne = () => {
    return {
      isCorrect:
        Number.parseInt(profitEquationOneBoxOne) ===
        selectedFood.qtyProducedPerWorkerHour *
          Number.parseInt(selectedNumWorkers) *
          selectedFood.unitRevenue *
          operatingHours,
      value:
        selectedFood.qtyProducedPerWorkerHour *
        Number.parseInt(selectedNumWorkers) *
        selectedFood.unitRevenue *
        operatingHours,
    };
  };

  const validateProfitEquationOneBoxTwo = () => {
    return {
      isCorrect:
        Number.parseInt(profitEquationOneBoxTwo) ===
        selectedFood.qtyProducedPerWorkerHour *
          Number.parseInt(selectedNumWorkers) *
          operatingHours *
          selectedFood.unitCost +
          (selectedTruck.fixedCost +
            selectedTruck.variableCost * operatingHours) +
          Number.parseInt(selectedNumWorkers) * operatingHours * minimumWage, // value,
      value:
        selectedFood.qtyProducedPerWorkerHour *
          Number.parseInt(selectedNumWorkers) *
          operatingHours *
          selectedFood.unitCost +
        (selectedTruck.fixedCost +
          selectedTruck.variableCost * operatingHours) +
        Number.parseInt(selectedNumWorkers) * operatingHours * minimumWage, // value
    };
  };

  const validateProfitEquationAnswer = () => {
    return {
      isCorrect:
        Number.parseInt(profitEquationOneBoxThree) ===
        validateProfitEquationOneBoxOne().value -
          validateProfitEquationOneBoxTwo().value,
      value:
        validateProfitEquationOneBoxOne().value -
        validateProfitEquationOneBoxTwo().value,
    };
  };

  const passProfitComponent = () => {
    setProfitComponentComplete(validateProfitEquationAnswer().isCorrect);
  };

  const equationContainerCSS = (
    inputBox: string,
    validateFunction: boolean
  ) => {
    if (inputBox.length === 0) {
      return "border-2 border-black p-4 text-grey-darkest max-w-sm";
    } else if (validateFunction) {
      return "border-8 border-green-500 p-4 text-grey-darkest max-w-sm";
    } else return "border-8 border-red-500 p-4 text-grey-darkest max-w-sm";
  };

  const progressContainerCSS = () => {
    return validateProfitEquationAnswer().isCorrect
      ? "bg-green-300 w-1/6 text-center border-2 border-black border-double p-4"
      : "bg-yellow-300 w-1/6 text-center border-2 border-black border-double p-4";
  };

  const renderGameCompleteHTML = (
    <div>
      <h1 className="text-4xl mt-16">
        {validateProfitEquationAnswer().value < 0
          ? "Sorry. "
          : "Congratulations! "}
        You will{" "}
        {validateProfitEquationAnswer().value < 0
          ? "lose $" + validateProfitEquationAnswer().value * -1 + " every day."
          : "make $" + validateProfitEquationAnswer().value + " every day."}
      </h1>
      <h1 className="text-2xl mt-8">
        {validateProfitEquationAnswer().value < 0
          ? "Please start over and pick better options"
          : "You have earned a badge and can start your business!"}
      </h1>
    </div>
  );

  return (
    <div className="flex flex-col border-r-2 border-dashed border-black p-4">
      <div className="flex flex-cols-2 items-center">
        <h1 className="w-5/6 text-5xl py-4">
          Finally - will we make any money selling {selectedFood.name}
          {selectedFood.name === "Hot Dog" ? "s" : ""}?!
        </h1>
        <span className={progressContainerCSS()}>
          {validateProfitEquationAnswer().isCorrect === true
            ? "Correct!"
            : "Incorrect"}
        </span>
      </div>
      <h1 className="text-4xl pt-8 border-t-2 border-black border-dashed mt-8">
        Is our revenue greater than the costs?
      </h1>
      <h1 className="text-3xl font-bold p-4 mt-8">Equation 1:</h1>
      <div className="grid grid-cols-5 items-center justify-center py-4">
        <p className="text-3xl text-center">Total Revenue</p>
        <p className="text-4xl text-center">-</p>
        <p className="text-3xl text-center">Total Costs</p>
        <p className="text-4xl text-center">=</p>
        <p className="text-3xl text-center">Profit</p>
      </div>
      <div className="grid grid-cols-5 items-center justify-center pt-4">
        <input
          className={equationContainerCSS(
            profitEquationOneBoxOne,
            validateProfitEquationOneBoxOne().isCorrect
          )}
          value={profitEquationOneBoxOne}
          onChange={(e) => {
            setProfitEquationOneBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">-</p>
        <input
          className={equationContainerCSS(
            profitEquationOneBoxTwo,
            validateProfitEquationOneBoxTwo().isCorrect
          )}
          value={profitEquationOneBoxTwo}
          onChange={(e) => setProfitEquationOneBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className={equationContainerCSS(
            profitEquationOneBoxThree,
            validateProfitEquationAnswer().isCorrect
          )}
          value={profitEquationOneBoxThree}
          onChange={(e) => {
            setProfitEquationOneBoxThree(e.target.value);
            passProfitComponent();
          }}
          placeholder="2"
        />
      </div>
      <div>
        {validateProfitEquationAnswer().isCorrect
          ? renderGameCompleteHTML
          : " "}
      </div>
    </div>
  );
};
export default ProfitEquation;
