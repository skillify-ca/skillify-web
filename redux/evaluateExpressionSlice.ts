import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { SimpleCalculatorProps } from "../components/coding/SimpleCalculator";
import { RootState } from "./rootReducer";

export enum Stage {
  POPULATING_STACK,
  CLEARING_STACK,
}
export type EvaluateExpressionState = {
  currentIndex: number;
  inputExpression: string;
  valueStack: number[];
  operatorStack: string[];
  stage: Stage;
  simpleCalculatorState?: SimpleCalculatorProps;
  message: string;
};

const initialState: EvaluateExpressionState[] = [
  {
    currentIndex: 0,
    inputExpression: "",
    valueStack: [],
    operatorStack: [],
    stage: Stage.POPULATING_STACK,
    message: "",
  },
];

export const precedenceMap = [
  { operator: "+", precedence: 2 },
  { operator: "-", precedence: 2 },
  { operator: "*", precedence: 1 },
  { operator: "/", precedence: 1 },
  { operator: "(", precedence: 0 },
];

const getCurrentChar = (state: EvaluateExpressionState) => {
  const currentString = state.inputExpression.substring(state.currentIndex);
  const currentChar = currentString.charAt(0);
  return currentChar;
};

// A utility method to apply an
// operator 'op' on operands 'a'
// and 'b'. Return the result.
const applyOp = (op: string, b: number, a: number) => {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b !== 0) {
        return a / b;
      }
  }
  return 0;
};

// Returns true if 'op2' has higher
// or same precedence as 'op1',
// otherwise returns false.
const hasPrecedence = (op1: string, op2: string) => {
  if (op2 == "(" || op2 == ")") return false;
  if ((op1 == "*" || op1 == "/") && (op2 == "+" || op2 == "-")) return false;
  else return true;
};

export const evaluateExpressionSlice: Slice = createSlice({
  name: "evaluateExpression",
  initialState,
  reducers: {
    setInput: (
      stateHistory: EvaluateExpressionState[],
      action: PayloadAction<string>
    ) => {
      const state = stateHistory[stateHistory.length - 1];
      state.inputExpression = action.payload;
    },
    reset: (stateHistory: EvaluateExpressionState[], _: PayloadAction) => {
      const state = { ...stateHistory[stateHistory.length - 1] };
      state.currentIndex = 0;
      state.valueStack = [];
      state.operatorStack = [];
      state.stage = Stage.POPULATING_STACK;
      state.simpleCalculatorState = null;
      return [state];
    },
    onPrevious: (
      stateHistory: EvaluateExpressionState[],
      action: PayloadAction
    ) => {
      if (stateHistory[stateHistory.length - 1].currentIndex !== 0) {
        const newHistory = [...stateHistory];
        newHistory.pop();
        return newHistory;
      }
    },
    onNext: (
      stateHistory: EvaluateExpressionState[],
      action: PayloadAction
    ) => {
      const prevState = stateHistory[stateHistory.length - 1];
      const state = JSON.parse(JSON.stringify(prevState));
      let currentChar = getCurrentChar(state);
      if (isComplete(prevState)) {
        return;
      } else if (state.stage === Stage.CLEARING_STACK) {
        handleClearingStackStep(state);
      } else if (state.currentIndex >= state.inputExpression.length) {
        handleLastCharacter(state);
      } else if (currentChar >= "0" && currentChar <= "9") {
        handleDigit(currentChar, state);
      } else if (currentChar === "(") {
        handleOpenBracket(currentChar, state);
      } else if (currentChar === ")") {
        handleClosingBracket(state);
      } else if (
        currentChar == "+" ||
        currentChar == "-" ||
        currentChar == "*" ||
        currentChar == "/"
      ) {
        handleOperator(currentChar, state);
      } else {
        state.currentIndex = state.currentIndex + 1;
      }
      stateHistory.push(state);
    },
  },
});

export const { setInput, onNext, onPrevious, reset } =
  evaluateExpressionSlice.actions;

export default evaluateExpressionSlice.reducer;

export const evaluateExpressionSelector = (state: RootState) =>
  state.evaluateExpressionHistory;

const handleClearingStackStep = (state: EvaluateExpressionState) => {
  if (state.simpleCalculatorState) {
    state.valueStack.push(state.simpleCalculatorState.answer);
    state.simpleCalculatorState = null;
  } else if (state.operatorStack.length !== 0) {
    popPopAndPop(state);
  }
};

const handleClosingBracket = (state: EvaluateExpressionState) => {
  if (state.operatorStack[state.operatorStack.length - 1] === "(") {
    state.operatorStack.pop();
    state.currentIndex = state.currentIndex + 1;
  } else {
    if (state.simpleCalculatorState) {
      state.valueStack.push(state.simpleCalculatorState.answer);
      state.simpleCalculatorState = null;
    } else {
      popPopAndPop(state);
    }
  }
};
function handleDigit(currentChar: string, state: EvaluateExpressionState) {
  let digitString = "";
  while (
    state.currentIndex < state.inputExpression.length &&
    currentChar >= "0" &&
    currentChar <= "9"
  ) {
    digitString = digitString.concat(currentChar);
    state.currentIndex = state.currentIndex + 1;
    currentChar = getCurrentChar(state);
  }
  state.valueStack.push(Number.parseInt(digitString));
  state.message = "Push to value stack";
}

function handleOperator(currentChar: string, state: EvaluateExpressionState) {
  if (
    state.simpleCalculatorState ||
    (state.operatorStack.length !== 0 &&
      hasPrecedence(
        currentChar,
        state.operatorStack[state.operatorStack.length - 1]
      ))
  ) {
    if (state.simpleCalculatorState) {
      applySimpleCalculation(state);
    } else {
      popPopAndPop(state);
    }
  } else {
    state.operatorStack.push(currentChar);
    state.currentIndex = state.currentIndex + 1;
    state.message = "Push to operator stack";
  }
}
function handleLastCharacter(state: EvaluateExpressionState) {
  state.stage = Stage.CLEARING_STACK;
  state.currentIndex = state.currentIndex + 1;
  state.message = "Enter clearing stack stage";
}
function handleOpenBracket(
  currentChar: string,
  state: EvaluateExpressionState
) {
  state.operatorStack.push(currentChar);
  state.currentIndex = state.currentIndex + 1;
  state.message = "Push to operator stack";
}
function popPopAndPop(state: EvaluateExpressionState) {
  const value1 = state.valueStack.pop();
  const value2 = state.valueStack.pop();
  const operator = state.operatorStack.pop();
  state.simpleCalculatorState = {
    value1,
    value2,
    operator,
    answer: applyOp(operator, value1, value2),
  };
  state.message = "Pop Pop and Pop";
}
function applySimpleCalculation(state: EvaluateExpressionState) {
  state.valueStack.push(state.simpleCalculatorState.answer);
  state.simpleCalculatorState = null;
  state.message = "Apply simple calculation";
}
function isComplete(state: EvaluateExpressionState) {
  return (
    state.operatorStack.length === 0 &&
    state.currentIndex >= state.inputExpression.length &&
    state.valueStack.length === 1
  );
}
