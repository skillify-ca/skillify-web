import React, { ReactNode } from "react";
import {
  largeTruckFoodItems,
  mediumTruckFoodItems,
  smallTruckFoodItems,
} from "../../pages/api/foodtruck/food";
import { TruckType } from "../../pages/foodtruck";

export interface PickALocationProps {
  truckType: TruckType;
  setTruckType: (truckType: TruckType) => void;
}

const PickALocation = ({ truckType, setTruckType }: PickALocationProps) => {
  return (
    <div className="flex flex-col border-2 border-black border-dashed p-4">
      <h1 className="text-4xl text-black bold p-4">
        What kind of truck do you want to buy?
      </h1>
      <label className="flex flex-row space-x-8 items-center p-4">
        <input
          className="form-radio h-8 w-8"
          type="radio"
          value={TruckType.smallTruck}
          checked={truckType === TruckType.smallTruck}
          onChange={(e) => setTruckType(e.target.value as TruckType)}
        />
        <img
          className="object-contain h-48 w-60 px-8"
          src={
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/25675/222-1033-traditional-culinary-vector-up-clipart-md.png"
          }
        />
        <span className="px-4 text-xl">The Regular Ass Cart</span>
        <span className="px-4 text-2xl">$500</span>
        <ul className="px-4 text-2xl">
          {smallTruckFoodItems.map((it) => (
            <li>{it}</li>
          ))}
        </ul>
      </label>
      <label className="flex flex-row space-x-8 items-center p-4">
        <input
          className="form-radio h-8 w-8"
          type="radio"
          value={TruckType.mediumTruck}
          checked={truckType === TruckType.mediumTruck}
          onChange={(e) => setTruckType(e.target.value as TruckType)}
        />
        <img
          className="object-contain h-48 w-60 px-8"
          src={
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/69034/food-truck-clipart-xl.png"
          }
        />
        <span className="px-4 text-xl">Some Euro Trash Van</span>
        <span className="px-4 text-2xl">$1000</span>
        <ul className="px-4 text-2xl">
          {mediumTruckFoodItems.map((it) => (
            <li>{it}</li>
          ))}
        </ul>
      </label>

      <label className="flex flex-row space-x-8 items-center p-4">
        <input
          className="form-radio h-8 w-8"
          type="radio"
          value={TruckType.largeTruck}
          checked={truckType === TruckType.largeTruck}
          onChange={(e) => setTruckType(e.target.value as TruckType)}
        />
        <img
          className="object-contain h-48 w-60 px-8"
          src={
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1723241/food-truck-clipart.svg"
          }
        />
        <span className="px-4 text-xl">That Real Real Truck</span>
        <span className="px-4 text-2xl">$2000</span>
        <ul className="px-4 text-2xl">
          {largeTruckFoodItems.map((it) => (
            <li>{it}</li>
          ))}
        </ul>
      </label>
    </div>
  );
};

export default PickALocation;
