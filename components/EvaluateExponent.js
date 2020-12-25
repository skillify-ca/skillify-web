import React, { useState } from "react";
import Exponent from "./Exponent";

export default function EvaluateExponent() {
  const [base, setBase] = useState(2);
  const [power, setPower] = useState(3);
  const [expanded, setExpanded] = useState(false)

  const onClick = (x) => {
    setExpanded(!expanded)
  }

  return (
    <div className="divide-y p-4 container mx-auto bg-green-500">
      <div className="p-4">
        <p className="text-lg">
          Exponents are made up of two parts: a base and a power. Exponents can also be
          represented as multiplication expressions with a common base.
        </p>
      </div>
      <div>
        <label className="block mb-2 text-indigo-500">Base</label>
        <input
          className="p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
          type="number"
          name="x"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2 text-indigo-500">Power</label>
        <input
          className="p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
          type="number"
          name="y"
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />
      </div>
      <Exponent power={power} expanded={expanded} base={base} onClick={onClick}/>
      <div className="text-xl text-center">Answer: {Math.pow(base,power)}</div>
    </div>
  );
}
