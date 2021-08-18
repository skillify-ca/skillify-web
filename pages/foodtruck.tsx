import React, { useState } from "react";
import BuildAFoodTruck from "../components/foodtruck/BuildAFoodTruck";
import { Button } from "../components/ui/Button";

export default function Bakery(props) {
  const [userName, setUserName] = useState("");
  const [truckName, setTruckName] = useState("");
  const [truckSlogan, setTruckSlogan] = useState("");
  const [dollarAmount, setDollarAmount] = useState("");
  const [numWorkers, setNumWorkers] = useState("");

  return (
    <div className="grid grid-cols-1">
      <div>
        {" "}
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
        />{" "}
      </div>
    </div>
  );
}
