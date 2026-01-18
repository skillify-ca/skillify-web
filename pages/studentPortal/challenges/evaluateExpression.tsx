import React from "react";
import { useSelector } from "react-redux";
import EvaluateExpression from "../../../components/studentPortal/challenges/evaluateExpression/EvaluateExpression";
import {
  evaluateExpressionSelector,
  onNext,
  onPrevious,
  reset,
  setInput,
} from "../../../redux/evaluateExpressionSlice";
import { useAppDispatch } from "../../../redux/store";

export default function EvaluateExpressionPage(props) {
  const dispatch = useAppDispatch();
  const stateHistory = useSelector(evaluateExpressionSelector);

  const handleOnInputChangeRequest = (val) => {
    dispatch(setInput(val));
  };
  const handleOnNextRequest = () => {
    dispatch(onNext(null));
  };
  const handleOnPreviousRequest = () => {
    dispatch(onPrevious(null));
  };
  const handleOnResetRequest = () => {
    dispatch(reset(null));
  };

  const handleOnRandomExpressionRequest = () => {
    const validExpressions = [
      // Simple expressions
      "3+2*2",
      "4+5*6",
      "8/2+3",
      "7*4-2",
      "9+6/3",
      
      // Medium complexity
      "3+2*2-1",
      "4*5+6/2",
      "8-3*2+1",
      "7+8/4*2",
      "9*2-3+1",
      
      // Complex with parentheses
      "(3+2)*2",
      "4*(5+6)",
      "(8+2)/2",
      "3*(4+2)-1",
      "(7-3)*2+1",
      
      // Very complex
      "(3+2)*(4-1)",
      "2*(3+4)-5",
      "(8+2)*(3-1)",
      "4+(5*2)-3",
      "(6/2)+3*4"
    ];

    const randomIndex = Math.floor(Math.random() * validExpressions.length);
    const randomExpression = validExpressions[randomIndex];
    
    dispatch(setInput(randomExpression));
    dispatch(reset(null)); // Reset to start with the new expression
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Learning Objectives */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Evaluate Expression</h1>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">🎯</span> Learning Objectives
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <p className="text-white/80">Understand how to parse mathematical expressions using stack-based algorithms</p>
              </div>              
              <div className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <p className="text-white/80">Implement the Shunting Yard algorithm for expression evaluation</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <p className="text-white/80">Solve{" "}
                  <a
                    className="text-blue-300 underline hover:text-blue-200"
                    href="https://leetcode.com/problems/basic-calculator/description/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LeetCode problem 224
                  </a>
                  {" "} - Basic Calculator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-100 min-h-screen">
        {stateHistory && (
          <EvaluateExpression
            stateHistory={stateHistory}
            onPreviousRequested={handleOnPreviousRequest}
            onNextRequested={handleOnNextRequest}
            onResetRequested={handleOnResetRequest}
            onInputChangeRequested={handleOnInputChangeRequest}
            onRandomExpressionRequested={handleOnRandomExpressionRequest}
          />
        )}
      </div>
    </div>
  );
}
