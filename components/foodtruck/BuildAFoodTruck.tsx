import React, { ReactNode } from "react";

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
    <div className="flex flex-col border-2 border-dashed border-black p-4">
      <h1 className="text-4xl py-4 text-black bold">
        Let's answer a few questions to get started!
      </h1>

      <label className="pb-4">1) What is your name?</label>
      <input
        className="border-2 border-black p-4 text-grey-darkest max-w-sm"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="ex: Praveen"
      />
      <label className="py-4">
        2) What do you want to call your food truck?
      </label>

      <input
        className="border-2 border-black p-4 text-grey-darkest max-w-sm"
        value={truckName}
        onChange={(e) => setTruckName(e.target.value)}
        placeholder="ex: Praveen's Titilating Tikka"
      />

      <label className="py-4">3) What's your food truck's slogan?</label>
      <input
        className="border-2 border-black p-4 text-grey-darkest max-w-sm"
        value={truckSlogan}
        onChange={(e) => setTruckSlogan(e.target.value)}
        placeholder="ex: Tikka so good, you'll scream TIKKA!"
      />

      <label className="py-4">4) How much money did you save?</label>
      <input
        className="border-2 border-black p-4 text-grey-darkest max-w-sm"
        value={dollarAmount}
        onChange={(e) => setDollarAmount(e.target.value)}
        placeholder="ex: 1000"
      />
      <h2 className="text-2xl py-4 pb-4 text-black bold">
        Let's see what we have so far:
      </h2>
      <p>
        Ok {userName === "" ? "Praveen" : userName}, your food truck will be
        named:
        <p className="font-bold text-2xl p-4">
          {truckName === "" ? "Praveen's Tittilating Tikka" : truckName}
        </p>
        Your food truck's slogan is:
        <p className="font-bold text-2xl p-4">
          "
          {truckSlogan === ""
            ? "Tikka so good, you'll scream TIKKA!"
            : truckSlogan}
          "
        </p>
        You have saved ${dollarAmount === "" ? "1000" : dollarAmount} and with
        that money you will try to employ $
        {numWorkers === "" ? "69" : numWorkers} workers. <br />
        Good luck! You're going to need it.
      </p>
    </div>
  );
};

export default BuildAFoodTruck;
