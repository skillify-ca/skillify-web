import React from "react";

export interface SimpleCalculatorProps {
  value1?: number;
  value2?: number;
  operator?: string;
  answer?: number;
  disabled?: boolean;
}

const SimpleCalculator = ({
  value1,
  value2,
  operator,
  answer,
  disabled = false,
}: SimpleCalculatorProps) => {
  return (
    <div className="space-y-6">
      {/* Status Information */}
      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
        <p className="text-sm font-semibold text-gray-600 mb-1">Current Operation:</p>
        <p className="text-lg font-bold">
          {disabled ? (
            <span className="text-gray-400">⏸️ No Active Operation</span>
          ) : (
            <span className="text-green-600">⚡ Performing Calculation</span>
          )}
        </p>
      </div>

      {/* Calculator Display */}
      <div className="space-y-4">
        {disabled ? (
          <div className="text-center py-8 text-gray-500">
            <div className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
              <p className="text-lg mb-2">No operation in progress</p>
              <p className="text-sm">Continue stepping through the expression to see calculations</p>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* Value 1 */}
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-lg shadow-md border-2 border-blue-300 w-20 h-20 flex items-center justify-center transform transition-all duration-300 hover:scale-105">
                  <span className="text-2xl font-bold text-blue-600 font-mono">
                    {value1 ?? '?'}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2 font-semibold">First Value</p>
              </div>

              {/* Operator */}
              <div className="flex flex-col items-center">
                <div className="bg-orange-500 rounded-lg shadow-md border-2 border-orange-600 w-16 h-16 flex items-center justify-center transform transition-all duration-500 hover:scale-105">
                  <span className="text-2xl font-bold text-white">
                    {operator ?? '?'}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2 font-semibold">Operator</p>
              </div>

              {/* Value 2 */}
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-lg shadow-md border-2 border-blue-300 w-20 h-20 flex items-center justify-center transform transition-all duration-700 hover:scale-105">
                  <span className="text-2xl font-bold text-blue-600 font-mono">
                    {value2 ?? '?'}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2 font-semibold">Second Value</p>
              </div>

              {/* Equals */}
              <div className="flex items-center px-2">
                <span className="text-3xl font-bold text-gray-700">=</span>
              </div>

              {/* Answer */}
              <div className="flex flex-col items-center">
                <div className="bg-green-500 rounded-lg shadow-md border-2 border-green-600 w-24 h-20 flex items-center justify-center transform transition-all duration-1000 hover:scale-105">
                  <span className="text-2xl font-bold text-white font-mono">
                    {answer ?? '?'}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2 font-semibold">Result</p>
              </div>
            </div>

            {/* Operation Details */}
            <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Operation being performed:</p>
                <div className="bg-gray-900 text-green-400 rounded-lg p-3 font-mono text-lg">
                  {value1} {operator} {value2} = {answer}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="flex flex-wrap gap-3 text-xs justify-center">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-gray-600">Values</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span className="text-gray-600">Operator</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-gray-600">Result</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculator;
