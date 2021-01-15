import React, { useState } from "react";

export default function AreaMethodMultiplication() {
  const [x, setX] = useState(12);
  const [y, setY] = useState(34);

  const xTens = Math.floor(x / 10) * 10;
  const xOnes = x % 10;

  const yTens = Math.floor(y / 10) * 10;
  const yOnes = y % 10;

  const square1 = xTens * yTens;
  const square2 = xOnes * yTens;
  const square3 = xTens * yOnes;
  const square4 = xOnes * yOnes;

  const sum = square1 + square2 + square3 + square4;

  const minSize = 160;

  return (
    <div className="divide-y container mx-auto">
      <div className="p-4">
        <p className="text-lg">
          You can use the area method to multiply two-digit numbers. The area
          method is a great example of breaking a problem down into smaller
          easier problems and then combining the answers to the easier problems
          to figure out the answer to the harder problem.
        </p>
        <br />
        <p className="text-lg">
          Change the inputs below to multiply any two-digit numbers together.
        </p>
      </div>
      <div className="p-4 grid grid-cols-2">
        <div>
          <label className="block mb-2 text-indigo-500">X</label>
          <input
            className="p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="number"
            name="x"
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-indigo-500">Y</label>
          <input
            className="p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="number"
            name="y"
            value={y}
            onChange={(e) => setY(e.target.value)}
          />
        </div>
      </div>
      <div className="container flex justify-center">
        <div className="flex flex-col flex-nowrap">
          <div className="flex flex-nowrap">
            <p
              style={{
                width: xTens + minSize + "px",
              }}
              className="p-4 text-center"
            >
              {xTens}
            </p>
            <p
              style={{
                width: xOnes + minSize + "px",
              }}
              className="p-4 w-20 text-center"
            >
              {xOnes}
            </p>
          </div>
          <div className="flex flex-nowrap">
            <div
              style={{
                width: xTens + minSize + "px",
                height: yTens + minSize + "px",
              }}
              className="bg-green-500 flex justify-center items-center"
            >
              {square1}
            </div>
            <div
              style={{
                width: xOnes + minSize + "px",
                height: yTens + minSize + "px",
              }}
              className="w-20 h-20 bg-red-500 flex justify-center items-center"
            >
              {square2}
            </div>
            <div className="items-center justify-center flex p-4">{yTens}</div>
          </div>
          <div className="flex flex-nowrap">
            <div
              style={{
                width: xTens + minSize + "px",
                height: yOnes + minSize + "px",
              }}
              className="w-20 h-20 bg-blue-500 flex justify-center items-center"
            >
              {square3}
            </div>
            <div
              style={{
                width: xOnes + minSize + "px",
                height: yOnes + minSize + "px",
              }}
              className="w-20 h-20 bg-purple-500 flex justify-center items-center"
            >
              {square4}
            </div>
            <div className="items-center justify-center flex p-4">{yOnes}</div>
          </div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-2 justify-items-center">
        <p className="text-lg flex-auto">
          {xTens} x {yTens} = {square1}
        </p>
        <p className="text-lg flex-auto">
          {xOnes} x {yTens} = {square2}
        </p>
        <p className="text-lg flex-auto">
          {xTens} x {yOnes} = {square3}
        </p>
        <p className="text-lg flex-auto">
          {xOnes} x {yOnes} = {square4}
        </p>
      </div>
      <div className="p-4 text-center">
        <p className="text-xl">
          {square1} + {square2} + {square3} + {square4} = {sum}
        </p>
        <p className="text-xl">so</p>
        <p className="text-xl">
          {x} X {y} = {sum}
        </p>
      </div>
    </div>
  );
}
