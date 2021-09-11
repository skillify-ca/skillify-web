import React from "react";
import {
  Food,
  getFood,
  hotDog,
  soupDumplings,
  tikka,
  Truck,
} from "../../pages/api/foodtruck/food";

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
      <h1 className="text-4xl text-black bold p-4">
        What type of food do you want to serve?
      </h1>
      {foods.map((f) => {
        return (
          <label className="flex flex-row space-x-8 items-center p-4">
            <input
              className="form-radio h-8 w-8"
              type="radio"
              value={f.name}
              checked={selectedFood.name === f.name}
              disabled={!selectedTruck.allowedItems.includes(f)}
              onChange={(e) => setSelectedFood(getFood(e.target.value) as Food)}
            />
            <img className="object-contain h-48 w-60 px-8" src={f.imageUrl} />
            <span className="px-4 text-xl">{f.name}</span>
            <span className="px-4 text-2xl">${f.unitRevenue}</span>
          </label>
        );
      })}
    </div>
  );
};

export default ChooseFoodType;
