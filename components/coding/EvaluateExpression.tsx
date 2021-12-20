import React, { ReactNode } from "react";
import {
  EvaluateExpressionState,
  precedenceMap,
  Stage,
} from "../../redux/evaluateExpressionSlice";
import { useAppDispatch } from "../../redux/store";
import { Button } from "../ui/Button";
import Algorithm from "./Algorithm";
import Resources from "./Resources";
import SimpleCalculator from "./SimpleCalculator";
import Stack from "./Stack";

export interface EvaluateExpressionProps {
  stateHistory: EvaluateExpressionState[];
  onNextRequested: () => void;
  onPreviousRequested: () => void;
  onResetRequested: () => void;
  onInputChangeRequested: (val: string) => void;
}
const EvaluateExpression = ({
  stateHistory,
  onNextRequested,
  onPreviousRequested,
  onResetRequested,
  onInputChangeRequested,
}: EvaluateExpressionProps) => {
  const handleNextClick = () => {
    onNextRequested();
  };
  const handlePreviousClick = () => {
    onPreviousRequested();
  };
  const handleResetClick = () => {
    onResetRequested();
  };

  const state = stateHistory[stateHistory.length - 1];

  return (
    <div className="grid justify-center grid-cols-1 gap-8 p-8 lg:grid-cols-12">
      <div className="col-span-12 lg:col-span-8">
        <div className="grid grid-cols-12 col-span-12 gap-8">
          <div className="flex flex-col items-center justify-center col-span-12 gap-8 p-8 bg-white shadow-lg rounded-xl 2xl:col-span-6">
            <p>Evaluate an expression string and return a number value</p>
            <div>
              <input
                className="p-4 text-xl bg-gray-100"
                value={state.inputExpression}
                onChange={(e) => onInputChangeRequested(e.target.value)}
              />
            </div>

            <div className="flex gap-8">
              <Button
                label="Previous"
                backgroundColor="purple"
                textColor="white"
                onClick={handlePreviousClick}
              />
              <Button
                label="Next"
                backgroundColor="blue"
                textColor="white"
                onClick={handleNextClick}
              />
              <Button
                label="Reset"
                backgroundColor="green"
                textColor="white"
                onClick={handleResetClick}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center col-span-12 gap-8 p-8 bg-white shadow-lg rounded-xl 2xl:col-span-6">
            <SimpleCalculator
              value1={state.simpleCalculatorState?.value2}
              value2={state.simpleCalculatorState?.value1}
              operator={state.simpleCalculatorState?.operator}
              disabled={state.simpleCalculatorState ? false : true}
              answer={state.simpleCalculatorState?.answer}
            />
          </div>
          <div className="flex flex-col justify-center col-span-12 p-8 bg-white shadow-lg rounded-xl lg:col-span-6">
            <p className="font-bold">Algorithm</p>
            <Algorithm state={state} />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Interactive state={state} />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full col-span-12 gap-8 lg:col-span-4">
        <Resources />
        <History stateHistory={stateHistory} />
      </div>
    </div>
  );
};

const History = ({ stateHistory }) => {
  return (
    <div className="flex flex-col h-full gap-4 p-8 bg-white shadow-lg rounded-xl">
      <p className="font-bold">History</p>
      <ul className="flex flex-col-reverse">
        {stateHistory.map((it) => (
          <li>{it.message}</li>
        ))}
      </ul>
    </div>
  );
};

const Interactive = ({ state }) => {
  return (
    <div className="flex flex-col h-full col-span-1 gap-8">
      <div className="h-full p-8 bg-white shadow-lg rounded-xl">
        <div className="flex flex-col gap-8">
          <p className="">
            <span className="text-2xl font-bold">Stage: </span>
            {state.stage === Stage.POPULATING_STACK && (
              <span className="text-green-600">Processing String Input</span>
            )}
            {state.stage === Stage.CLEARING_STACK && (
              <span className="text-blue-500">Clearing the Operator Stack</span>
            )}
          </p>
          <p>
            <span className="text-2xl font-bold">Expression: </span>
            {state.inputExpression && state.inputExpression}
          </p>
          <p>
            <span className="text-2xl font-bold">Current Character: </span>
            {state.inputExpression &&
              state.inputExpression.substring(
                state.currentIndex,
                state.currentIndex + 1
              )}
          </p>
          <div className="grid justify-center grid-cols-2 gap-16 place-items-center">
            <div className="flex flex-col items-center">
              <Stack
                items={state.valueStack.map((it) => it.toString()).reverse()}
              />
              <p className="text-xl">Value Stack</p>
            </div>
            <div className="flex flex-col items-center">
              <Stack
                items={state.operatorStack.map((it) => it.toString()).reverse()}
              />
              <p className="text-xl">Operator Stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EvaluateExpression;
