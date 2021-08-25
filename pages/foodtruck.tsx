import React, { useState } from "react";
import BuildAFoodTruck from "../components/foodtruck/BuildAFoodTruck";
import PickALocation from "../components/foodtruck/PickALocation";

export enum TruckType {
  smallTruck = "small",
  mediumTruck = "medium",
  largeTruck = "large",
}

export default function Bakery(props) {
  const [userName, setUserName] = useState("");
  const [truckName, setTruckName] = useState("");
  const [truckSlogan, setTruckSlogan] = useState("");
  const [dollarAmount, setDollarAmount] = useState("");
  const [numWorkers, setNumWorkers] = useState("");
  const [truckType, setTruckType] = useState(TruckType.smallTruck);

  return (
    <div>
      <div className="flex flex-cols-3 border-2 border-bottom border-dashed border-black p-12">
        <img
          className="object-left object-contain h-28"
          src={
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77310/food-truck-clipart-md.png"
          }
        />
        <h1 className="p-8 text-black bold text-6xl">
          Let's Build Your Own Fucking Food Truck!!!
        </h1>
        <img
          className="object-right object-contain h-28 invert"
          src={
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77310/food-truck-clipart-md.png"
          }
        />
      </div>

      <div className="grid grid-cols-2 p-4">
        <div className="flex items-center">
          <p className="col-span-3 text-black text-2xl">
            You have been saving money for several years in hopes of starting
            your very own food truck. Let's walk through all the things you'll
            need to start your new food truck business and see whether you have
            saved enough money!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <BuildAFoodTruck
          userName={userName}
          setUserName={setUserName}
          truckName={truckName}
          setTruckName={setTruckName}
          truckSlogan={truckSlogan}
          setTruckSlogan={setTruckSlogan}
          dollarAmount={dollarAmount}
          setDollarAmount={setDollarAmount}
          numWorkers={numWorkers}
          setNumWorkers={setNumWorkers}
        />

        <PickALocation truckType={truckType} setTruckType={setTruckType} />
        <PickALocation truckType={truckType} setTruckType={setTruckType} />
        <PickALocation truckType={truckType} setTruckType={setTruckType} />
        <PickALocation truckType={truckType} setTruckType={setTruckType} />
        <PickALocation truckType={truckType} setTruckType={setTruckType} />
      </div>
    </div>
  );
}
