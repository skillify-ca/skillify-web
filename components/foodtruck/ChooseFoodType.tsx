import React from "react";
import {
  Food,
  getFood,
  allFoods,
  hotDog,
  kebab,
  soupDumplings,
  curry,
  Truck,
  okonomiyaki,
} from "../../pages/api/foodtruck/food";

import FoodReferenceTable from "./FoodReferenceTable";

export interface ChooseFoodTypeProps {
  selectedFood: Food;
  setSelectedFood: (food: Food) => void;
  selectedTruck: Truck;
}

const ChooseFoodType = ({
  selectedFood,
  setSelectedFood,
  selectedTruck,
}: ChooseFoodTypeProps) => {
  // const foods = [hotDog, soupDumplings, tikka, kebab];
  const imageCSS = (isDisabled: boolean) => {
    return isDisabled
      ? "object-contain h-1/2 w-1/2 filter grayscale"
      : "object-contain h-1/2 w-1/2";
  };
  return (
    <div className="flex flex-col py-4">
      <h1 className="text-6xl text-center text-black bold p-4 mb-8">
        What type of food do you want to serve?
      </h1>
      <div className="grid grid-cols-5 items-center pb-12 border-b-2 border-dashed border-black">
        <p className="col-start-2 text-4xl">Type of Food</p>
        <p className="col-start-3 text-4xl text-center">Cost / Plate</p>
        <p className="col-start-4 text-4xl text-center">Price / Plate</p>
        <p className="col-start-5 text-4xl text-center">Plates / Hour</p>
      </div>
      {allFoods.map((f) => {
        return (
          <label className="grid grid-cols-5 items-center py-8 border-b-2 border-black border-dashed">
            <input
              className="form-radio h-8 w-8"
              type="radio"
              value={f.name}
              checked={selectedFood.name === f.name}
              disabled={!selectedTruck.allowedItems.includes(f)}
              onChange={(e) => setSelectedFood(getFood(e.target.value) as Food)}
            />
            <figure className="items-center">
              <img
                className={imageCSS(!selectedTruck.allowedItems.includes(f))}
                src={f.imageUrl}
              />
              <figcaption className="text-3xl italic mt-8">{f.name}</figcaption>
            </figure>
            <span className="text-4xl text-center">${f.unitCost}</span>
            <span className="text-4xl text-center">${f.unitRevenue}</span>
            <span className="text-4xl text-center">
              {f.qtyProducedPerWorkerHour}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default ChooseFoodType;
