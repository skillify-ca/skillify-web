import React from "react";
import {
  EvaluateExpressionState,
  isComplete,
  Stage,
} from "../../../../redux/evaluateExpressionSlice";

interface AlgorithmProps {
  state: EvaluateExpressionState;
}

const Algorithm = ({ state }: AlgorithmProps) => {
  // Helper functions to determine which steps are active
  const isProcessingInput = () => state.currentIndex < state.inputExpression.length;
  const isClearingStack = () => state.currentIndex >= state.inputExpression.length && state.operatorStack.length > 0;
  const isCompleteState = () => isComplete(state);
  
  const getCurrentChar = () => {
    if (state.currentIndex >= state.inputExpression.length) return null;
    return state.inputExpression[state.currentIndex];
  };
  
  const isNumber = () => {
    const char = getCurrentChar();
    return char && /\d/.test(char);
  };
  
  const isOpenParenthesis = () => {
    const char = getCurrentChar();
    return char === '(';
  };
  
  const isCloseParenthesis = () => {
    const char = getCurrentChar();
    return char === ')';
  };
  
  const isOperator = () => {
    const char = getCurrentChar();
    return char && '+-*/'.includes(char);
  };
  
  const shouldApplyOperatorPrecedence = () => {
    return isOperator() && 
           state.operatorStack.length > 0 && 
           state.operatorStack[state.operatorStack.length - 1] !== '(';
  };

  const Step = ({ children, isActive, className = "" }: { children: React.ReactNode; isActive: boolean; className?: string }) => (
    <li className={`${isActive ? "font-bold text-blue-600" : "text-gray-600"} ${className}`}>
      {children}
    </li>
  );

  const SubStep = ({ children, isActive, className = "" }: { children: React.ReactNode; isActive: boolean; className?: string }) => (
    <li className={`ml-4 ${isActive ? "font-bold text-blue-600" : "text-gray-500"} ${className}`}>
      {children}
    </li>
  );

  return (
    <div className="space-y-4">
      {/* Stage 1: Processing Input */}
      <div className={`border rounded-lg p-4 ${isProcessingInput() ? "border-blue-300 bg-blue-50" : "border-gray-200 bg-gray-50"}`}>
        <h3 className={`font-semibold mb-3 ${isProcessingInput() ? "text-blue-700" : "text-gray-500"}`}>
          Stage 1: Processing Input Tokens
        </h3>
        <ul className="space-y-2 text-sm">
          <Step isActive={isProcessingInput()}>
            While there are still tokens to be read:
          </Step>
          <SubStep isActive={isProcessingInput()}>
            Get the next token and handle based on type:
          </SubStep>
          
          {/* Number handling */}
          <SubStep isActive={isNumber()}>
            <span className="inline-flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-mono">NUMBER</span>
              Push onto value stack
            </span>
          </SubStep>
          
          {/* Open parenthesis handling */}
          <SubStep isActive={isOpenParenthesis()}>
            <span className="inline-flex items-center gap-2">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-mono">(</span>
              Push onto operator stack
            </span>
          </SubStep>
          
          {/* Close parenthesis handling */}
          <SubStep isActive={isCloseParenthesis()}>
            <span className="inline-flex items-center gap-2">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-mono">)</span>
              Pop operators until finding '('
            </span>
          </SubStep>
          
          {/* Operator handling */}
          <SubStep isActive={isOperator()}>
            <span className="inline-flex items-center gap-2">
              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-mono">OP</span>
              Handle operator precedence
            </span>
          </SubStep>
        </ul>
      </div>

      {/* Stage 2: Clearing Stack */}
      <div className={`border rounded-lg p-4 ${isClearingStack() ? "border-orange-300 bg-orange-50" : "border-gray-200 bg-gray-50"}`}>
        <h3 className={`font-semibold mb-3 ${isClearingStack() ? "text-orange-700" : "text-gray-500"}`}>
          Stage 2: Clearing Operator Stack
        </h3>
        <ul className="space-y-2 text-sm">
          <Step isActive={isClearingStack()}>
            While operator stack is not empty:
          </Step>
          <SubStep isActive={isClearingStack()}>
            Pop operator and two values
          </SubStep>
          <SubStep isActive={isClearingStack()}>
            Apply operation and push result
          </SubStep>
        </ul>
      </div>

      {/* Stage 3: Complete */}
      <div className={`border rounded-lg p-4 ${isCompleteState() ? "border-green-300 bg-green-50" : "border-gray-200 bg-gray-50"}`}>
        <h3 className={`font-semibold mb-3 ${isCompleteState() ? "text-green-700" : "text-gray-500"}`}>
          Stage 3: Complete
        </h3>
        <ul className="space-y-2 text-sm">
          <Step isActive={isCompleteState()}>
            Final result is the single value remaining in the value stack
          </Step>
        </ul>
      </div>

      {/* Current Operation Details */}
      {state.simpleCalculatorState && (
        <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
          <h3 className="font-semibold text-blue-700 mb-2">Current Operation:</h3>
          <div className="bg-white rounded p-3 font-mono text-center text-lg">
            {state.simpleCalculatorState.value2} {state.simpleCalculatorState.operator} {state.simpleCalculatorState.value1} = {state.simpleCalculatorState.answer}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-700 mb-2">Legend:</h4>
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Active Step</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded"></div>
            <span>Inactive Step</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithm;