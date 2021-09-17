import React from "react";
import { getTruck, Truck, allTrucks } from "../../pages/api/foodtruck/food";

export interface ChooseTruckTypeProps {
  truck: Truck;
  setTruck: (truck: Truck) => void;
}

const ChooseTruckType = ({ truck, setTruck }: ChooseTruckTypeProps) => {
  return (
    <div className="flex flex-col border-2 border-black border-dashed p-4">
      <h1 className="text-4xl text-black bold p-4 mb-8">
        What kind of truck do you want to buy?
      </h1>
      <div className="grid grid-cols-5">
        <p className="col-start-3 text-2xl">Truck Type</p>
        <p className="col-start-4 text-2xl">Price</p>
        <p className="col-start-5 text-2xl">Allowed Items</p>
      </div>
      {allTrucks.map((t) => {
        return (
          <label className="grid grid-cols-5 items-center">
            <input
              className="form-radio h-8 w-8"
              type="radio"
              value={t.model}
              checked={truck.model === t.model}
              onChange={(e) => setTruck(getTruck(e.target.value) as Truck)}
            />
            <img className="object-contain h-48 w-60 px-8" src={t.imageUrl} />
            <span className="px-4 text-xl">{t.model}</span>
            <span className="px-4 text-2xl">${t.fixedCost}</span>
            <ul className="px-4 text-2xl">
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
