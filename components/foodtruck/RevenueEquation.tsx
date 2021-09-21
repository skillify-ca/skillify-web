import React from "react";
import { Food, operatingHours } from "../../pages/api/foodtruck/food";

export interface RevenueEquationProps {
  selectedFood: Food;
  selectedNumWorkers: string;
  revEquationOneBoxOne: string;
  setRevEquationOneBoxOne: (revEquationOneBoxOne: string) => void;
  revEquationOneBoxTwo: string;
  setRevEquationOneBoxTwo: (revEquationOneBoxTwo: string) => void;
  revEquationOneBoxThree: string;
  setRevEquationOneBoxThree: (revEquationOneBoxThree: string) => void;
  revEquationTwoBoxOne: string;
  setRevEquationTwoBoxOne: (revEquationTwoBoxTwo: string) => void;
  revEquationTwoBoxTwo: string;
  setRevEquationTwoBoxTwo: (revEquationTwoBoxTwo: string) => void;
  revEquationTwoBoxThree: string;
  setRevEquationTwoBoxThree: (revEquationTwoBoxThree: string) => void;
  revEquationTwoBoxFour: string;
  setRevEquationTwoBoxFour: (revEquationTwoBoxFour: string) => void;
}

const RevenueEquation = ({
  selectedFood,
  selectedNumWorkers,
  revEquationOneBoxOne,
  setRevEquationOneBoxOne,
  revEquationOneBoxTwo,
  setRevEquationOneBoxTwo,
  revEquationOneBoxThree,
  setRevEquationOneBoxThree,
  revEquationTwoBoxOne,
  setRevEquationTwoBoxOne,
  revEquationTwoBoxTwo,
  setRevEquationTwoBoxTwo,
  revEquationTwoBoxThree,
  setRevEquationTwoBoxThree,
  revEquationTwoBoxFour,
  setRevEquationTwoBoxFour,
}: RevenueEquationProps) => {

  // Equation 1
  const platesPerWorkerPerHour = selectedFood.qtyProducedPerWorkerHour;
  const numberOfWorkers = Number.parseInt(selectedNumWorkers);
  
  // Equation 1 and 2
  const platesPerHour = platesPerWorkerPerHour * numberOfWorkers;

  // Equation 2
  const pricePerPlate = selectedFood.unitRevenue;
  const hoursPerDay = operatingHours;
  const revenuePerDay = platesPerHour * pricePerPlate * hoursPerDay;

  const validateRevEquationOneBoxOne = () => {
    return {
      isCorrect:
        Number.parseInt(revEquationOneBoxOne) ===
        selectedFood.qtyProducedPerWorkerHour,
    };
  };

  const validateRevEquationOneBoxTwo = () => {
    return {
      isCorrect:
        Number.parseInt(revEquationOneBoxTwo) ===
        Number.parseInt(selectedNumWorkers),
    };
  };

  const validateQuestionOneAnswer = () => {
    return {
      isCorrect:
        Number.parseInt(revEquationOneBoxThree) ===
        platesPerWorkerPerHour * numberOfWorkers,
    };
  };

  const validateRevEquationTwoBoxOne = () => {
    return {
      isCorrect: Number.parseInt(revEquationTwoBoxOne) === platesPerHour,
    };
  };

  const validateRevEquationTwoBoxTwo = () => {
    return {
      isCorrect: Number.parseInt(revEquationTwoBoxTwo) === pricePerPlate,
    };
  };

  const validateRevEquationTwoBoxThree = () => {
    return {
      isCorrect: Number.parseInt(revEquationTwoBoxThree) === hoursPerDay,
    };
  };

  const validateQuestionTwoAnswer = () => {
    return {
      isCorrect: Number.parseInt(revEquationTwoBoxFour) === revenuePerDay,
    };
  };

  const validateComponent = () => {
    return (
      validateQuestionOneAnswer().isCorrect &&
      validateQuestionTwoAnswer().isCorrect
    );
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
    return validateComponent()
      ? "bg-green-300 w-1/6 text-center border-2 border-black border-double p-4"
      : "bg-yellow-300 w-1/6 text-center border-2 border-black border-double p-4";
  };

  return (
    <div className="flex flex-col border-2 border-dashed border-black p-4">
      <div className="flex flex-cols-2 items-center">
        <h1 className="w-5/6 text-4xl p-4">
          How much money can we make every day selling {selectedFood.name}
          {selectedFood.name === "Hot Dog" ? "s" : ""}?
        </h1>
        <span className={progressContainerCSS()}>
          {validateComponent() === true ? "Correct" : "Incorrect"}
        </span>
      </div>

      <h1 className="text-2xl p-4">
        First - let's figure out how many plates of{" "}
        {selectedFood.name === "Hot Dog"
          ? selectedFood.name + "s"
          : selectedFood.name}{" "}
        we can make in an hour
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
          className={equationContainerCSS(
            revEquationOneBoxOne,
            validateRevEquationOneBoxOne().isCorrect
          )}
          value={revEquationOneBoxOne}
          onChange={(e) => {
            setRevEquationOneBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            revEquationOneBoxTwo,
            validateRevEquationOneBoxTwo().isCorrect
          )}
          value={revEquationOneBoxTwo}
          onChange={(e) => setRevEquationOneBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className={equationContainerCSS(
            revEquationOneBoxThree,
            validateQuestionOneAnswer().isCorrect
          )}
          value={revEquationOneBoxThree}
          onChange={(e) => setRevEquationOneBoxThree(e.target.value)}
          placeholder="2"
        />
      </div>

      <h1 className="text-2xl pt-8">
        Now - let's figure out how much money we can make in an hour
      </h1>

      <h1 className="text-2xl font-bold pt-8 pl-4">Equation 2:</h1>
      <div className="grid grid-cols-7 items-center justify-center pt-4">
        <p className="text-2xl text-center m-4">Plates per Hour</p>
        <p className="text-4xl text-center m-4">x</p>
        <p className="text-2xl text-center m-4">Price per Plate</p>
        <p className="text-4xl text-center m-4">x</p>
        <p className="text-2xl text-center m-4">Hours per Day</p>
        <p className="text-4xl text-center m-4">=</p>
        <p className="text-2xl text-center m-4">$$$ per Day</p>
        <input
          className={equationContainerCSS(
            revEquationTwoBoxOne,
            validateRevEquationTwoBoxOne().isCorrect
          )}
          value={revEquationTwoBoxOne}
          onChange={(e) => {
            setRevEquationTwoBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            revEquationTwoBoxTwo,
            validateRevEquationTwoBoxTwo().isCorrect
          )}
          value={revEquationTwoBoxTwo}
          onChange={(e) => setRevEquationTwoBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            revEquationTwoBoxThree,
            validateRevEquationTwoBoxThree().isCorrect
          )}
          value={revEquationTwoBoxThree}
          onChange={(e) => setRevEquationTwoBoxThree(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className={equationContainerCSS(
            revEquationTwoBoxFour,
            validateQuestionTwoAnswer().isCorrect
          )}
          value={revEquationTwoBoxFour}
          onChange={(e) => setRevEquationTwoBoxFour(e.target.value)}
          placeholder="2"
        />
      </div>
    </div>
  );
};

export default RevenueEquation;
