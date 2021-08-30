import React, { ReactNode } from "react";
import {
  getTruck,
  largeTruck,
  mediumTruck,
  smallTruck,
  Truck,
} from "../../pages/api/foodtruck/food";

export interface ChooseTruckTypeProps {
  truck: Truck;
  setTruck: (truck: Truck) => void;
}

const ChooseTruckType = ({ truck, setTruck }: ChooseTruckTypeProps) => {
  const trucks = [smallTruck, mediumTruck, largeTruck];
  return (
    <div className="flex flex-col border-2 border-black border-dashed p-4">
      <h1 className="text-4xl text-black bold p-4">
        What kind of truck do you want to buy?
      </h1>
      {trucks.map((t) => {
        return (
          <label className="flex flex-row space-x-8 items-center p-4">
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

      {/* <label className="flex flex-row space-x-8 items-center p-4">
        <input
          className="form-radio h-8 w-8"
          type="radio"
          value={smallTruck.model}
          checked={truck === smallTruck}
          onChange={(e) => setTruck(getTruck(e.target.value) as Truck)}
        />
        <img
          className="object-contain h-48 w-60 px-8"
          src={
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/25675/222-1033-traditional-culinary-vector-up-clipart-md.png"
          }
        />
        <span className="px-4 text-xl">{smallTruck.model}</span>
        <span className="px-4 text-2xl">${smallTruck.fixedCost}</span>
        <ul className="px-4 text-2xl">
          {smallTruck.allowedItems.map((it) => (
            <li>{it}</li>
          ))}
        </ul>
      </label>
      <label className="flex flex-row space-x-8 items-center p-4">
        <input
          className="form-radio h-8 w-8"
          type="radio"
          value={mediumTruck.model}
          checked={truck === mediumTruck}
          onChange={(e) => setTruck(getTruck(e.target.value) as Truck)}
        />
        <img
          className="object-contain h-48 w-60 px-8"
          src={
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/69034/food-truck-clipart-xl.png"
          }
        />
        <span className="px-4 text-xl">{mediumTruck.model}</span>
        <span className="px-4 text-2xl">${mediumTruck.fixedCost}</span>
        <ul className="px-4 text-2xl">
          {mediumTruck.allowedItems.map((it) => (
            <li>{it}</li>
          ))}
        </ul>
      </label>
      <label className="flex flex-row space-x-8 items-center p-4">
        <input
          className="form-radio h-8 w-8"
          type="radio"
          value={largeTruck.model}
          checked={truck === largeTruck}
          onChange={(e) => setTruck(getTruck(e.target.value) as Truck)}
        />
        <img
          className="object-contain h-48 w-60 px-8"
          src={
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1723241/food-truck-clipart.svg"
          }
        />
        <span className="px-4 text-xl">{largeTruck.model}</span>
        <span className="px-4 text-2xl">${largeTruck.fixedCost}</span>
        <ul className="px-4 text-2xl">
          {largeTruck.allowedItems.map((it) => (
            <li>{it}</li>
          ))}
        </ul>
      </label>
     */}
    </div>
  );
};

export default ChooseTruckType;
