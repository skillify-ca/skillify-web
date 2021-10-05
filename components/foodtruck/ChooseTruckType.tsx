import React from "react";
import { getTruck, Truck, allTrucks } from "../../pages/api/foodtruck/food";

export interface ChooseTruckTypeProps {
  truck: Truck;
  setTruck: (truck: Truck) => void;
}

const ChooseTruckType = ({ truck, setTruck }: ChooseTruckTypeProps) => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-6xl text-black text-center bold p-4 mb-16">
        What kind of stand do you want to buy?
      </h1>
      <div className="grid grid-cols-5 border-b-2 border-black border-dashed pb-8">
        <p className="col-start-2 text-4xl">Stand Type</p>
        <p className="col-start-3 text-4xl">Purchase Price</p>
        <p className="col-start-4 text-4xl">Daily Cost</p>
        <p className="col-start-5 text-4xl">Allowed Food</p>
      </div>
      {allTrucks.map((t) => {
        return (
          <label className="grid grid-cols-5 items-center py-8 border-b-2 border-black border-dashed p-8">
            <input
              className="form-radio h-6 w-6"
              type="radio"
              value={t.model}
              checked={truck.model === t.model}
              onChange={(e) => setTruck(getTruck(e.target.value) as Truck)}
            />
            <figure>
              <img className="object-contain h-48 w-60" src={t.imageUrl} />
              <figcaption className="text-3xl text-justify">
                {t.model}
              </figcaption>
            </figure>
            <span className="px-4 text-3xl">${t.fixedCost}</span>
            <span className="px-4 text-3xl">${t.variableCost}</span>
            <ul className="px-4 text-3xl">
              {t.allowedItems.map((it) => (
                <li>{it.name}</li>
              ))}
            </ul>
          </label>
        );
      })}
    </div>
  );
};

export default ChooseTruckType;
