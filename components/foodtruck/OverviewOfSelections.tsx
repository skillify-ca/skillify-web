import React from "react";
import { Food, Truck, minWage } from "../../pages/api/foodtruck/food";
export interface OverviewOfSelectionsProps {
  selectedTruck: Truck;
  selectedFood: Food;
  selectedNumWorkers: string;
  setSelectedNumWorkers: (selectedNumWorkers: string) => void;
  minWage: number;
}

const OverviewOfSelections = ({
  selectedTruck,
  selectedFood,
  selectedNumWorkers,
  setSelectedNumWorkers,
  minWage,
}: OverviewOfSelectionsProps) => {
  const dailyWage = minWage * parseInt(selectedNumWorkers) * 8;
  const monthlyWage = minWage * parseInt(selectedNumWorkers) * 8 * 5 * 4;
  return (
    <div className="flex flex-col border-2 border-dashed border-black p-4">
      <h1 className="text-4xl py-4 text-black bold">
        Overview of your Selections
      </h1>
      <div className="grid grid-cols-3 items-center justify-center space-x-8 border-2 border-black p-4">
        <p className="px-8">Truck Type: </p>
        <figure>
          <img
            className="object-contain h-48 w-60 px-8"
            src={selectedTruck.imageUrl}
          />
          <figcaption className="text-center">{selectedTruck.model}</figcaption>
        </figure>
        <p>
          This will cost you ${selectedTruck.fixedCost} per month to rent. It
          will also cost ${selectedTruck.variableCost} per day to operate{" "}
        </p>
        <span className="px-8">Food Type: </span>
        <figure>
          <img
            className="object-contain h-48 w-60 px-8"
            src={selectedFood.imageUrl}
          />
          <figcaption className="text-center">{selectedFood.name}</figcaption>
        </figure>
        <p>
          You will sell each {selectedFood.name} for ${selectedFood.unitRevenue}
          . Each {selectedFood.name} will cost ${selectedFood.unitCost} per
          plate
        </p>
        <span className="px-8">Number of Workers: </span>
        <figure>
          <img
            className="object-contain px-8"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
          />
          <figcaption className="text-center">{selectedNumWorkers}</figcaption>
        </figure>
        <p>
          You will employ {selectedNumWorkers}{" "}
          {selectedNumWorkers === "1" ? "worker" : "workers"} at your stand.
          This will cost ${dailyWage} per day and ${monthlyWage} per month
        </p>
      </div>
    </div>
  );
};

export default OverviewOfSelections;
