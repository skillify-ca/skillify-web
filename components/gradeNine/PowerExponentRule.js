import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

export default function PowerExponentRule() {
  /**
   * increment / decrement power button
   * combine one exponent into two exponents
   * break two exponents into one
   */

  const initialData = {
    exponents: [
      { id: "exp-1", power: 1, expanded: false },
      { id: "exp-2", power: 2, expanded: false },
      { id: "exp-3", power: 3, expanded: false },
    ],
    columns: {
      "column-1": {
        id: "column-1",
        title: "To do",
        taskIds: ["exp-1", "exp-2", "exp-3"],
      },
    },
  };

  const [base, setBase] = useState(2);
  const [inputList, setInputList] = useState(initialData.exponents);
  const [a, setA] = useState(3);
  const [b, setB] = useState(3);

  return (
    <div className="divide-y p-4 container mx-auto">
      <div className="text-xl text-center p-4">
        You can simplify exponent expressions by combining terms with the same
        base. The following terms all have the same base (X) and they are all
        being multiplied together.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-4">
        <div className="p-4">
          <label className="block mb-2 text-indigo-500">Base</label>
          <input
            className="p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="number"
            name="x"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
        </div>
        <div className="p-4">
          <label className="block mb-2 text-indigo-500">A</label>
          <input
            className="p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="number"
            name="y"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </div>
        <div className="p-4">
          <label className="block mb-2 text-indigo-500">B</label>
          <input
            className="p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="number"
            name="y"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
      </div>
 
      <div className="text-xl text-center p-4">
        ({base} ^ {a})^{b} = {Math.pow(base, a*b)}
      </div>
    
 
   
      <div className="text-xl text-center p-4">
        How can you generally simplify expressions that look like (X^a)^b?
      </div>
    </div>
  );
}
