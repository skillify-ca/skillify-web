import React, { ReactNode } from "react";
import {
  ApartmentTable,
  CityLoftTable,
  FarmHouseTable,
  SuburbHouseTable,
} from "../finance/BuyAHomeTables";

export interface BuildAFoodTruckProps {
  userName: string;
  setUserName: (userName: string) => void;
  truckName: string;
  setTruckName: (truckName: string) => void;
  truckSlogan: string;
  setTruckSlogan: (truckSlogan: string) => void;
  dollarAmount: string;
  setDollarAmount: (dollarAmount: string) => void;
  numWorkers: string;
  setNumWorkers: (numWorkers: string) => void;
}

const BuildAFoodTruck = ({
  userName,
  setUserName,
  truckName,
  setTruckName,
  truckSlogan,
  setTruckSlogan,
  dollarAmount,
  setDollarAmount,
  numWorkers,
  setNumWorkers,
}: BuildAFoodTruckProps) => {
  return (
    <div className="grid grid-cols-1 border-2 border-black p-3 max-w-3xl">
      <div className="row-start-1 border-b-1 border-black">
        <h1 className="text-4xl col-span-3 pb-4 text-black bold">
          Start your own food truck!
        </h1>
        <p>
          You have been saving money for several years in hopes of starting your
          very own food truck. Let's walk through all the things you'll need to
          start your new food truck business and see whether you have saved
          enough money!
        </p>
        <div className="p-10">
          <img
            className="object-left object-contain h-40 w-full"
            src={
              "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77310/food-truck-clipart-md.png"
            }
          />
        </div>
        <h2 className="text-2xl col-span-3 pb-1 text-black bold">
          Let's start with the fun stuff!
        </h2>
        <div className="p-4 flex flex-col mb-4">
          <label>What is your name?</label>
          <div className="py-1 ..." />
          <input
            className="border p-1 px-3 text-grey-darkest"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="ex: Praveen"
          />
          <label>What do you want to call your food truck?</label>
          <div className="py-1 ..." />
          <input
            className="border p-1 px-3 text-grey-darkest"
            value={truckName}
            onChange={(e) => setTruckName(e.target.value)}
            placeholder="ex: Praveen's Titilating Tikka"
          />
          <div className="py-1 ..." />
          <label>What's your food truck's slogan?</label>
          <div className="py-1 ..." />
          <input
            className="border p-1 px-3 text-grey-darkest"
            value={truckSlogan}
            onChange={(e) => setTruckSlogan(e.target.value)}
            placeholder="ex: Tikka so good, you'll scream TIKKA!"
          />
        </div>
        <h2 className="p-1 text-2xl col-span-3 pb-4 text-black bold">
          Okay let's start some real planning!
        </h2>
        <div className="p-1 flex flex-col mb-4">
          <label>How much money did you save?</label>
          <input
            className="border py-3 px-3 text-grey-darkest"
            value={dollarAmount}
            onChange={(e) => setDollarAmount(e.target.value)}
            placeholder="ex: 1000"
          />
          <label>How many people will work at your stand?</label>
          <div className="py-1 ..." />
          <input
            className="border py-3 px-3 text-grey-darkest"
            value={numWorkers}
            onChange={(e) => setNumWorkers(e.target.value)}
            placeholder="ex: 69"
          />

          <div className="py-3 flex flex-col">
            <h2 className="p-1 text-2xl col-span-3 pb-4 text-black bold">
              Let's see what we have so far:
            </h2>
            <div className="py-1 ..." />
            <p>
              Ok {userName}, your food truck will be named {truckName} and your
              slogan is:
            </p>
            <p className="py-4 text-black bold">"{truckSlogan}"</p>
            <p>
              You have saved ${dollarAmount} and with that money you will try to
              employ {numWorkers} workers. Good luck, you're going to need it.
            </p>
            <img
              className="p-4 object-left object-contain h-14 w-full"
              src={
                "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3390636/japanese-curry-rice-boy-clipart-md.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildAFoodTruck;
