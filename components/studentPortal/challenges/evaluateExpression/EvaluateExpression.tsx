import React from "react";
import {
  EvaluateExpressionState,
  Stage,
} from "../../../../redux/evaluateExpressionSlice";
import { Button } from "../../../ui/Button";
import Stack from "../dataStructures/Stack";
import Algorithm from "./Algorithm";
import Resources from "./Resources";
import SimpleCalculator from "./SimpleCalculator";

export interface EvaluateExpressionProps {
  stateHistory: EvaluateExpressionState[];
  onNextRequested: () => void;
  onPreviousRequested: () => void;
  onResetRequested: () => void;
  onInputChangeRequested: (val: string) => void;
  onRandomExpressionRequested?: () => void;
}
const EvaluateExpression = ({
  stateHistory,
  onNextRequested,
  onPreviousRequested,
  onResetRequested,
  onInputChangeRequested,
  onRandomExpressionRequested,
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

  const handleRandomExpressionClick = () => {
    if (onRandomExpressionRequested) {
      onRandomExpressionRequested();
    }
  };

  const state = stateHistory[stateHistory.length - 1];

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Expression Input</h2>
          <p className="text-gray-600">Enter a mathematical expression to evaluate step by step</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="relative">
              <input
                className="w-full p-4 text-xl border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none bg-gray-50 text-center font-mono pr-32"
                value={state.inputExpression}
                onChange={(e) => onInputChangeRequested(e.target.value)}
                placeholder="Enter expression (e.g., 3+2*2)"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Button
                  label="🎲 Random"
                  backgroundColor="purple"
                  onClick={handleRandomExpressionClick}
                  size="small"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              label="← Previous"
              backgroundColor="purple"
              onClick={handlePreviousClick}
              size="medium"
            />
            <Button
              label="Next →"
              backgroundColor="blue"
              onClick={handleNextClick}
              size="medium"
            />
            <Button
              label="↺ Reset"
              backgroundColor="green"
              onClick={handleResetClick}
              size="medium"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Interactive Visualization */}
        <div className="lg:col-span-1">
          <Interactive state={state} />
        </div>

        {/* Simple Calculator */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Current Operation</h3>
            <SimpleCalculator
              value1={state.simpleCalculatorState?.value2}
              value2={state.simpleCalculatorState?.value1}
              operator={state.simpleCalculatorState?.operator}
              disabled={state.simpleCalculatorState ? false : true}
              answer={state.simpleCalculatorState?.answer}
            />
          </div>
        </div>

        {/* Algorithm Explanation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Algorithm Steps</h3>
            <Algorithm state={state} />
          </div>
        </div>

        {/* History */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Execution History</h3>
            <div className="overflow-auto max-h-96">
              <History stateHistory={stateHistory} />
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="lg:col-span-2">
          <Resources />
        </div>
      </div>
    </div>
  );
};

const History = ({ stateHistory }) => {
  const getStepTypeColor = (message: string) => {
    if (message.includes("Push to value stack")) return "bg-blue-100 border-blue-300 text-blue-700";
    if (message.includes("Push to operator stack")) return "bg-green-100 border-green-300 text-green-700";
    if (message.includes("Pop Pop and Pop")) return "bg-orange-100 border-orange-300 text-orange-700";
    if (message.includes("Apply simple calculation")) return "bg-purple-100 border-purple-300 text-purple-700";
    if (message.includes("Clearing stack")) return "bg-red-100 border-red-300 text-red-700";
    if (message.includes("Processing String")) return "bg-indigo-100 border-indigo-300 text-indigo-700";
    return "bg-gray-50 border-gray-200 text-gray-700";
  };

  const getStepIcon = (message: string) => {
    if (message.includes("Push to value stack")) return "📊";
    if (message.includes("Push to operator stack")) return "⚡";
    if (message.includes("Pop Pop and Pop")) return "🔄";
    if (message.includes("Apply simple calculation")) return "✅";
    if (message.includes("Clearing stack")) return "🧹";
    if (message.includes("Processing String")) return "🔍";
    return "📍";
  };

  const formatStepDetails = (state: any, stepNumber: number) => {
    const currentChar = state.inputExpression?.[state.currentIndex];
    const charDisplay = currentChar ? `"${currentChar}"` : "∅";
    
    return {
      position: `${state.currentIndex + 1}/${state.inputExpression?.length || 0}`,
      currentChar: charDisplay,
      valueStack: state.valueStack.length,
      operatorStack: state.operatorStack.length,
      stage: state.stage === 'POPULATING_STACK' ? '🔄 Processing' : '⚡ Clearing'
    };
  };

  return (
    <div className="space-y-4">
      {stateHistory.length === 0 ? (
        <div className="text-center py-8">
          <div className="bg-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300">
            <div className="text-4xl mb-4">📝</div>
            <p className="text-lg font-semibold text-gray-600 mb-2">No execution history yet</p>
            <p className="text-sm text-gray-500">Enter an expression and click "Next" to start stepping through the algorithm</p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Summary Stats */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{stateHistory.length}</div>
                <div className="text-gray-600">Total Steps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {stateHistory[stateHistory.length - 1]?.currentIndex || 0}/{stateHistory[stateHistory.length - 1]?.inputExpression?.length || 0}
                </div>
                <div className="text-gray-600">Progress</div>
              </div>
            </div>
          </div>

          {/* Step-by-step history */}
          <div className="max-h-80 overflow-y-auto space-y-2 pr-2">
            {stateHistory.slice().reverse().map((state, index) => {
              const stepNumber = stateHistory.length - index;
              const details = formatStepDetails(state, stepNumber);
              const stepColor = getStepTypeColor(state.message || "");
              const stepIcon = getStepIcon(state.message || "");
              
              return (
                <div
                  key={index}
                  className={`rounded-lg border p-3 transition-all duration-200 hover:shadow-md ${stepColor}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{stepIcon}</span>
                      <span className="font-bold text-sm">Step {stepNumber}</span>
                    </div>
                    <span className="text-xs opacity-75">{details.stage}</span>
                  </div>
                  
                  <div className="text-sm font-medium mb-2">
                    {state.message || "Algorithm step completed"}
                  </div>
                  
                  {/* Detailed state information */}
                  <div className="grid grid-cols-2 gap-2 text-xs opacity-90">
                    <div className="flex items-center gap-1">
                      <span>📍</span>
                      <span>Pos: {details.position}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🔤</span>
                      <span>Char: {details.currentChar}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📊</span>
                      <span>Values: {details.valueStack}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⚡</span>
                      <span>Ops: {details.operatorStack}</span>
                    </div>
                  </div>

                  {/* Stack preview for complex steps */}
                  {(state.message?.includes("Pop") || state.message?.includes("Apply")) && (
                    <div className="mt-2 pt-2 border-t border-current/20">
                      <div className="text-xs">
                        <div className="font-semibold mb-1">Stack State:</div>
                        <div className="flex gap-4">
                          <div>
                            <span className="opacity-75">Values:</span>
                            <span className="ml-1 font-mono">
                              [{state.valueStack.slice(-3).join(", ")}{state.valueStack.length > 3 ? "..." : ""}]
                            </span>
                          </div>
                          <div>
                            <span className="opacity-75">Ops:</span>
                            <span className="ml-1 font-mono">
                              [{state.operatorStack.slice(-3).join("")}{state.operatorStack.length > 3 ? "..." : ""}]
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="border-t pt-3">
            <div className="text-xs text-gray-600 font-semibold mb-2">Step Types:</div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded"></span>
                <span>Value</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded"></span>
                <span>Operator</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-orange-500 rounded"></span>
                <span>Pop</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-500 rounded"></span>
                <span>Calculate</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to determine character type
const getCharacterType = (char: string | undefined): string => {
  if (!char) return 'None';
  if (char === ' ') return 'Space';
  if (/\d/.test(char)) return 'Number';
  if (['+', '-', '*', '/'].includes(char)) return 'Operator';
  if (['(', ')'].includes(char)) return 'Parenthesis';
  return 'Unknown';
};

const Interactive = ({ state }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 h-full">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Interactive Visualization</h3>

      <div className="space-y-6">
        {/* Stage Information */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <p className="text-sm font-semibold text-gray-600 mb-1">Current Stage:</p>
          <p className="text-lg font-bold">
            {state.stage === Stage.POPULATING_STACK && (
              <span className="text-green-600">🔄 Processing String Input</span>
            )}
            {state.stage === Stage.CLEARING_STACK && (
              <span className="text-blue-600">⚡ Clearing the Operator Stack</span>
            )}
          </p>
        </div>

        {/* Expression String Visualization */}
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-semibold text-gray-600 mb-3">Expression String Visualization:</p>

            {state.inputExpression ? (
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-lg overflow-x-auto border border-gray-300">
                {state.inputExpression.split('').map((char, index) => {
                  let bgColor = 'bg-gray-100';
                  let textColor = 'text-gray-800';

                  if (index < state.currentIndex) {
                    // Already processed characters
                    bgColor = 'bg-gray-200';
                    textColor = 'text-gray-500';
                  } else if (index === state.currentIndex) {
                    // Current character (highlighted)
                    bgColor = 'bg-yellow-400';
                    textColor = 'text-gray-900';
                  }
                  // Unprocessed characters keep default gray-100 background

                  return (
                    <span
                      key={index}
                      className={`${bgColor} ${textColor} px-1 py-0.5 rounded transition-colors duration-200`}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-4 text-gray-500">
                No expression entered
              </div>
            )}

            {/* Legend */}
            <div className="mt-3 flex flex-wrap gap-3 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-yellow-400 rounded"></div>
                <span className="text-gray-600">Current</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-200 rounded"></div>
                <span className="text-gray-600">Processed</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-100 rounded border border-gray-300"></div>
                <span className="text-gray-600">Upcoming</span>
              </div>
            </div>
          </div>

          {/* Current Character Detail */}
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-sm font-semibold text-gray-600 mb-1">Current Character Detail:</p>
            <div className="flex items-center gap-3">
              <div className="bg-yellow-500 text-gray-900 px-3 py-2 rounded font-mono text-xl font-bold">
                {state.inputExpression && state.currentIndex < state.inputExpression.length
                  ? state.inputExpression.substring(state.currentIndex, state.currentIndex + 1)
                  : "∅"}
              </div>
              <div className="text-sm text-gray-600">
                {getCharacterType(state.inputExpression?.[state.currentIndex]) !== "None" && <p>Position: {state.currentIndex + 1} / {state.inputExpression?.length || 0}</p>}
                <p>Type: {getCharacterType(state.inputExpression?.[state.currentIndex])}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stacks Visualization */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 border border-gray-300">
            <div className="flex flex-col items-center">
              <Stack
                items={state.valueStack.map((it) => it.toString()).reverse()}
              />
              <p className="text-lg font-bold text-gray-700 mt-3">Value Stack</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-300">
            <div className="flex flex-col items-center">
              <Stack
                items={state.operatorStack.map((it) => it.toString()).reverse()}
              />
              <p className="text-lg font-bold text-gray-700 mt-3">Operator Stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EvaluateExpression;
