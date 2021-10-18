import React from "react";
import { getTruck, Truck, allTrucks } from "../../pages/api/foodtruck/food";

export interface ChooseTruckTypeProps {
  truck: Truck;
  setTruck: (truck: Truck) => void;
}

const ChooseTruckType = ({ truck, setTruck }: ChooseTruckTypeProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-black text-center bold p-4 mb-8">
        What kind of stand do you want to buy?
      </h1>
      <div className="grid grid-cols-5 border-b-2 border-black border-dashed pb-8">
        <p className="col-start-2 text-center text-xl">Stand Type</p>
        <p className="col-start-3 text-center text-xl">Purchase Price</p>
        <p className="col-start-4 text-center text-xl">Daily Cost</p>
        <p className="col-start-5 text-center text-xl">Allowed Food</p>
      </div>
      {allTrucks.map((t) => {
        return (
          <label className="grid grid-cols-5 text-center items-center border-b-2 border-black border-dashed p-4">
            <input
              className="form-radio h-6 w-6"
              type="radio"
              value={t.model}
              checked={truck.model === t.model}
              onChange={(e) => setTruck(getTruck(e.target.value) as Truck)}
            />
            <figure>
              <img className="object-contain w-60" src={t.imageUrl} />
              <figcaption className="">{t.model}</figcaption>
            </figure>
            <span className="text-center ">${t.fixedCost}</span>
            <span className="text-center">${t.variableCost}</span>
            <ul className="text-center">
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
