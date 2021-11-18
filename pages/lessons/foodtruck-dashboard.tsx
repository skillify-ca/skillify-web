import React from "react";

export default function FoodTruckProfile() {
  return (
    <div>
      <h1 className="text-4xl text-center mb-8">Foodtruck Dashboard</h1>
      <div className="grid grid-cols-5 border-2 border-black rounded-md bg-blue-300 text-center font-bold mb-1">
        <p>Name</p>
        <p>Date</p>
        <p>Profit</p>
        <p>Time Taken</p>
        <p>Grade</p>
      </div>
      <div className="grid grid-cols-5 divide-x-2 divide-black border-separate border-2 border-black rounded-md text-center">
        <p>Raveen</p>
        <p>10/19/21</p>
        <p>$1042</p>
        <p>2:04</p>
        <p>A</p>
        <p>Jesus</p>
        <p>10/20/21</p>
        <p>$6900</p>
        <p>2:54</p>
        <p>A+</p>
        <p>Pepe</p>
        <p>10/20/21</p>
        <p>$-200</p>
        <p>1:30</p>
        <p>F</p>
      </div>
    </div>
  );
}

FoodTruckProfile.auth = true;
