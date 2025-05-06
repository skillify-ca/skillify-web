import React from "react";
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";

function Calculator() {
  const [expression, setExpression] = React.useState("");
  const [number, setNumber] = React.useState(0);
  const [operatorStack, setOperatorStack] = React.useState<string[]>([]);
  const [numberStack, setNumberStack] = React.useState<number[]>([]);
  const [currentIndex, setIndex] = React.useState(0);

  function nextStep() {
    if (currentIndex >= expression.length) {
      setNumberStack((prev) => [...prev, number]);
      return;
    }

    const char = expression[currentIndex];
    if (char === "+" || char === "-" || char === "*" || char === "/") {
      // is an operator
      setNumberStack((prev) => [...prev, number]);
      setNumber(0);
      setOperatorStack((prev) => [...prev, char]);
    } else {
      // is a number
      const num = parseInt(char);
      setNumber(num + number * 10);
    }

    setIndex(currentIndex + 1);
  }

  function reset() {
    setNumberStack([]);
    setOperatorStack([]);
    setIndex(0);
    setNumber(0);
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Calculator</h1>

      <h2>Number: {number}</h2>
      <Input
        placeholder="Enter expression"
        value={expression}
        setValue={setExpression}
      />

      <h2>Expression</h2>
      <div className="flex gap-4 p-8">
        {expression.split("").map((it, index) => (
          <div
            key={index}
            className={`w-16 h-16 text-lg flex justify-center items-center p-2 border-2 rounded ${
              index === currentIndex ? "bg-blue-200" : "bg-gray-200"
            }`}
          >
            {it}
          </div>
        ))}
      </div>

      <h2>Character Stack</h2>
      <div className="flex gap-4 p-8">
        {numberStack.map((it, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-16 h-16 p-2 text-lg bg-gray-200 border-2 rounded"
          >
            {it}
          </div>
        ))}
      </div>

      <h2>Operator Stack</h2>
      <div className="flex gap-4 p-8">
        {operatorStack.map((it, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-16 h-16 p-2 text-lg bg-gray-200 border-2 rounded"
          >
            {it}
          </div>
        ))}
      </div>

      <div className="flex gap-4 p-8">
        <Button label={"Next"} onClick={nextStep} />
        <Button label={"Reset"} onClick={reset} />
      </div>
    </div>
  );
}

export default Calculator;
