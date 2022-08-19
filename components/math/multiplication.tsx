import React, { useEffect, useState } from "react";
import { randomize } from "../../pages/api/questions/questionGenerator";
import { getRandomItemFromArray } from "../../pages/api/random";

export function getRndBlock() {
  let x = randomize(1, 10);
  let y = randomize(1, 10);
  let z = x + y;
  let blockArray = [x + " x " + y, z];
  let block = getRandomItemFromArray(blockArray);
  return block;
}

export default function MultiplicationGame() {
  return (
    <div>
      {" "}
      <ul className="w-20 h-20 bg-green-400 flex justify-center items-center border-2 text-green-50 float-left ">
        <p>{getRndBlock()}</p>
      </ul>
      <ul className="w-20 h-20 bg-green-400 flex justify-center items-center border-2 text-green-50 float-left ">
        <p>{getRndBlock()}</p>
      </ul>
      <ul className="w-20 h-20 bg-green-400 flex justify-center items-center float-left border-2 text-green-50">
        <p>8</p>
      </ul>
    </div>
  );
}
