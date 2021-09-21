import Link from "next/link";
import React, { useState } from "react";

export default function Money(props) {
  return (
    <div className="flex flex-col items-center p-4 gap-4 heropattern-piefactory-blue-100 bg-gray-100 h-screen ">
      <h1 className="text-center font-bold">Interactive Lessons</h1>
      <div className="flex gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4 transition duration-500 ease-in-out transform hover:scale-110">
          <Link href="/finance-profile">Balance a Budget</Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 transition duration-500 ease-in-out transform hover:scale-110">
          <Link href="/foodtruck">Food Truck</Link>
        </div>
      </div>
    </div>
  );
}

Money.auth = true;
