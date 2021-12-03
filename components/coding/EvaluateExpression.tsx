import React, { ReactNode } from "react";
import {
  EvaluateExpressionState,
  precedenceMap,
  Stage,
} from "../../redux/evaluateExpressionSlice";
import { useAppDispatch } from "../../redux/store";
import { Button } from "../ui/Button";
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
    <div className="grid items-center justify-center min-h-screen grid-cols-1 gap-8 p-8 sm:grid-cols-6">
      <div className="flex flex-col h-screen col-span-1 gap-8 sm:col-span-3">
        <div className="flex flex-col items-center justify-center gap-8 p-8 bg-white shadow-lg rounded-xl">
          <p>Evaluate an expression string and return a number</p>
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

        <div className="flex flex-col items-center justify-center gap-8 p-8 bg-white shadow-lg rounded-xl">
          {state.simpleCalculatorState ? (
            <SimpleCalculator
              value1={state.simpleCalculatorState?.value2}
              value2={state.simpleCalculatorState?.value1}
              operator={state.simpleCalculatorState?.operator}
              answer={state.simpleCalculatorState?.answer}
            />
          ) : (
            <SimpleCalculator
              disabled={true}
              value1={0}
              value2={0}
              operator={""}
              answer={0}
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-8 p-8 bg-white shadow-lg rounded-xl">
          <p className="p-4">Message: {state.message}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 p-8 bg-white shadow-lg rounded-xl">
          <p>Resources</p>
          <a
            href="https://leetcode.com/problems/basic-calculator/"
            className="text-blue-500 underline"
          >
            Leetcode #224
          </a>
          <a
            href="https://www.geeksforgeeks.org/expression-evaluation/"
            className="text-blue-500 underline"
          >
            GeeksForGeeks Article
          </a>
        </div>
      </div>
      <div className="h-screen col-span-1 p-8 bg-white shadow-lg sm:col-span-3 rounded-xl">
        <div className="flex flex-col items-center gap-8">
          <p className="">
            <span className="text-2xl font-bold">Stage: </span>
            {state.stage === Stage.POPULATING_STACK && (
              <span className="text-green-600">Processing String Input</span>
            )}
            {state.stage === Stage.CLEARING_STACK && (
              <span className="text-blue-500">Clearing the Operator Stack</span>
            )}
          </p>
          <p className="text-2xl font-bold">
            {state.inputExpression &&
              state.inputExpression.substring(state.currentIndex)}
          </p>
          <div className="grid justify-center grid-cols-2 gap-16 place-items-end">
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
