import React from "react";
import {
  Food,
  getFood,
  hotDog,
  soupDumplings,
  tikka,
  Truck,
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
  const foods = [hotDog, soupDumplings, tikka];
  return (
    <div className="flex flex-col border-2 border-black border-dashed p-4">
      <h1 className="text-4xl text-black bold p-4 mb-8">
        What type of food do you want to serve?
      </h1>
      <div className="grid grid-cols-5 p-4">
        <p className="col-start-3 text-2xl">Type of Food</p>
        <p className="col-start-4 text-2xl">Selling Price</p>
      </div>
      {foods.map((f) => {
        return (
          <label className="grid grid-cols-5 items-center p-4">
            <input
              className="form-radio h-8 w-8"
              type="radio"
              value={f.name}
              checked={selectedFood.name === f.name}
              disabled={!selectedTruck.allowedItems.includes(f)}
              onChange={(e) => setSelectedFood(getFood(e.target.value) as Food)}
            />
            <img className="object-contain h-48 w-60 px-8" src={f.imageUrl} />
            <span className="text-2xl">{f.name}</span>
            <span className="text-2xl">${f.unitRevenue}</span>
          </label>
        );
      })}
    </div>
  );
};

export default ChooseFoodType;
