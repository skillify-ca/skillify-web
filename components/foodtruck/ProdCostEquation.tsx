import React from "react";
import { Food, operatingHours, Truck } from "../../pages/api/foodtruck/food";

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
  prodCostEquationOneBoxFour: string;
  setProdCostEquationOneBoxFour: (prodCostEquationOneBoxFour: string) => void;

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
  prodCostEquationOneBoxFour,
  setProdCostEquationOneBoxFour,
  prodCostEquationTwoBoxOne,
  setProdCostEquationTwoBoxOne,
  prodCostEquationTwoBoxTwo,
  setProdCostEquationTwoBoxTwo,
  prodCostEquationTwoBoxThree,
  setProdCostEquationTwoBoxThree,
  prodCostEquationTwoBoxFour,
  setProdCostEquationTwoBoxFour,
}: ProdCostEquationProps) => {
  // Equation 1
  const platesPerHour =
    selectedFood.qtyProducedPerWorkerHour * Number.parseInt(selectedNumWorkers);
  const costPerPlate = selectedFood.unitCost;
  const totalIngredientCostPerDay =
    platesPerHour * costPerPlate * operatingHours;

  // Equation 2
  const dailyRentalCost = selectedTruck.fixedCost;
  const hourlyOperatingCost = selectedTruck.variableCost;
  const truckCostPerDay =
    dailyRentalCost + hourlyOperatingCost * operatingHours;

  const validateProdCostEquationOneBoxOne = () =>
    Number.parseInt(prodCostEquationOneBoxOne) === platesPerHour;

  const validateProdCostEquationOneBoxTwo = () =>
    Number.parseInt(prodCostEquationOneBoxTwo) === costPerPlate;

  const validateProdCostEquationOneBoxThree = () =>
    Number.parseInt(prodCostEquationOneBoxThree) === operatingHours;

  const validateProdCostEquationOneAnswer = () =>
    Number.parseInt(prodCostEquationOneBoxFour) === totalIngredientCostPerDay;

  const validateProdCostEquationTwoBoxOne = () =>
    Number.parseInt(prodCostEquationTwoBoxOne) === dailyRentalCost;

  const validateProdCostEquationTwoBoxTwo = () =>
    Number.parseInt(prodCostEquationTwoBoxTwo) === hourlyOperatingCost;

  const validateProdCostEquationTwoBoxThree = () =>
    Number.parseInt(prodCostEquationTwoBoxThree) === operatingHours;

  const validateProdCostEquationTwoAnswer = () =>
    Number.parseInt(prodCostEquationTwoBoxFour) === truckCostPerDay;

  const validateComponent = () => {
    return (
      validateProdCostEquationOneAnswer() &&
      validateProdCostEquationTwoAnswer()
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
        <h1 className="w-5/6 text-4xl py-4">
          How much will it cost us every day to sell {selectedFood.name}
          {selectedFood.name === "Hot Dog" ? "s" : ""}?
        </h1>
        <span className={progressContainerCSS()}>
          {validateComponent() === true ? "Correct!" : "Incorrect"}
        </span>
      </div>
      <h1 className="text-2xl mt-8">
        First - let's figure out how much the ingredients cost to make{" "}
        {selectedFood.name}
        {selectedFood.name === "Hot Dog" ? "s" : ""}
      </h1>
      <h1 className="text-2xl font-bold p-4">Equation 1:</h1>
      <div className="grid grid-cols-7 items-center justify-center py-4">
        <p className="text-2xl text-center">Plates per Hour</p>
        <p className="text-4xl text-center">x</p>
        <p className="text-2xl text-center">Cost per Plate</p>
        <p className="text-4xl text-center">x</p>
        <p className="text-2xl text-center">Operating Hours</p>
        <p className="text-4xl text-center">=</p>
        <p className="text-2xl text-center">Total Ingredient Cost per Day</p>
        <p></p>
        <p></p>
      </div>
      <div className="grid grid-cols-7 items-center justify-center pt-8">
        <input
          className={equationContainerCSS(
            prodCostEquationOneBoxOne,
            validateProdCostEquationOneBoxOne()
          )}
          value={prodCostEquationOneBoxOne}
          onChange={(e) => {
            setProdCostEquationOneBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            prodCostEquationOneBoxTwo,
            validateProdCostEquationOneBoxTwo()
          )}
          value={prodCostEquationOneBoxTwo}
          onChange={(e) => setProdCostEquationOneBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            prodCostEquationOneBoxThree,
            validateProdCostEquationOneBoxThree()
          )}
          value={prodCostEquationOneBoxThree}
          onChange={(e) => setProdCostEquationOneBoxThree(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className={equationContainerCSS(
            prodCostEquationOneBoxFour,
            validateProdCostEquationOneAnswer()
          )}
          value={prodCostEquationOneBoxFour}
          onChange={(e) => setProdCostEquationOneBoxFour(e.target.value)}
          placeholder="2"
        />
      </div>
      <h1 className="text-2xl mt-12">
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
          className={equationContainerCSS(
            prodCostEquationTwoBoxOne,
            validateProdCostEquationTwoBoxOne()
          )}
          value={prodCostEquationTwoBoxOne}
          onChange={(e) => {
            setProdCostEquationTwoBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">+</p>
        <input
          className={equationContainerCSS(
            prodCostEquationTwoBoxTwo,
            validateProdCostEquationTwoBoxTwo()
          )}
          value={prodCostEquationTwoBoxTwo}
          onChange={(e) => setProdCostEquationTwoBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            prodCostEquationTwoBoxThree,
            validateProdCostEquationTwoBoxThree()
          )}
          value={prodCostEquationTwoBoxThree}
          onChange={(e) => setProdCostEquationTwoBoxThree(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className={equationContainerCSS(
            prodCostEquationTwoBoxFour,
            validateProdCostEquationTwoAnswer()
          )}
          value={prodCostEquationTwoBoxFour}
          onChange={(e) => setProdCostEquationTwoBoxFour(e.target.value)}
          placeholder="2"
        />
      </div>
    </div>
  );
};

export default ProdCostEquation;
