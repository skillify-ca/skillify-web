import React from "react";
import { Food, Truck } from "../../pages/api/foodtruck/food";

export interface ProgressBarProps {
  selectedFood: Food;
  selectedNumWorkers: string;
  selectedTruck: Truck;
}

const ProgressBar = ({
  selectedFood,
  selectedTruck,
  selectedNumWorkers,
}: ProgressBarProps) => {
  const RevEquationHTML = (
    <div className="flex flex-col p-4">
      <h1 className="text-4xl text-center mb-8">Useful Inputs</h1>
      <p className="text-2xl text-center text-bold">
        Food Type: {selectedFood.name}
      </p>
      <p className="text-2xl text-center">
        Food Price: {selectedFood.unitRevenue}
      </p>
      <p className="text-2xl text-center">Num Workers: {selectedNumWorkers}</p>
    </div>
  );
  return RevEquationHTML;
};
export default ProgressBar;
