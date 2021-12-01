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
};

const initialState: EvaluateExpressionState = {
  currentIndex: 0,
  inputExpression: "2+4*5",
  valueStack: [],
  operatorStack: [],
  stage: Stage.POPULATING_STACK,
};

export const precedenceMap = [
  { operator: "+", precedence: 2 },
  { operator: "-", precedence: 2 },
  { operator: "*", precedence: 1 },
  { operator: "/", precedence: 1 },
  { operator: "(", precedence: 0 },
];

const getPrecedence = (operator: string) => {
  return precedenceMap.filter((it) => it.operator === operator).pop()
    .precedence;
};

const getCurrentChar = (state: EvaluateExpressionState) => {
  const currentString = state.inputExpression.substring(state.currentIndex);
  const currentChar = currentString.charAt(0);
  return currentChar;
};

const applyOp = (operator: string, value1: number, value2: number) => {
  if (operator === "+") {
    return value1 + value2;
  } else if (operator === "-") {
    return value1 - value2;
  } else if (operator === "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
};

export const evaluateExpressionSlice: Slice = createSlice({
  name: "evaluateExpression",
  initialState,
  reducers: {
    setInput: (
      state: EvaluateExpressionState,
      action: PayloadAction<string>
    ) => {
      state.inputExpression = action.payload;
    },
    reset: (state: EvaluateExpressionState, action: PayloadAction<string>) => {
      state.currentIndex = 0;
      state.valueStack = [];
      state.operatorStack = [];
      state.stage = Stage.POPULATING_STACK;
      state.simpleCalculatorState = null;
    },
    onNext: (state: EvaluateExpressionState, action: PayloadAction) => {
      let currentChar = getCurrentChar(state);
      if (state.stage === Stage.CLEARING_STACK) {
        if (state.simpleCalculatorState) {
          state.valueStack.push(state.simpleCalculatorState.answer);
          state.simpleCalculatorState = null;
        } else if (state.operatorStack.length !== 0) {
          const value1 = state.valueStack.pop();
          const value2 = state.valueStack.pop();
          const operator = state.operatorStack.pop();
          state.simpleCalculatorState = {
            value1,
            value2,
            operator,
            answer: applyOp(operator, value1, value2),
          };
        }
      } else if (state.currentIndex >= state.inputExpression.length) {
        state.stage = Stage.CLEARING_STACK;
        state.currentIndex = state.currentIndex + 1;
      }
      // is digit
      else if (currentChar >= "0" && currentChar <= "9") {
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
      } else if (currentChar === "(") {
        state.operatorStack.push(currentChar);
        state.currentIndex = state.currentIndex + 1;
      } else if (currentChar === ")") {
        if (state.operatorStack[state.operatorStack.length - 1] === "(") {
          state.operatorStack.pop();
          state.currentIndex = state.currentIndex + 1;
        } else {
          if (state.simpleCalculatorState) {
            state.valueStack.push(state.simpleCalculatorState.answer);
            state.simpleCalculatorState = null;
          } else {
            const value2 = state.valueStack.pop();
            const value1 = state.valueStack.pop();
            const operator = state.operatorStack.pop();
            state.simpleCalculatorState = {
              value1,
              value2,
              operator,
              answer: applyOp(operator, value1, value2),
            };
          }
        }
      } else if (
        currentChar == "+" ||
        currentChar == "-" ||
        currentChar == "*" ||
        currentChar == "/"
      ) {
        if (
          state.simpleCalculatorState ||
          (state.operatorStack.length !== 0 &&
            getPrecedence(currentChar) >=
              getPrecedence(
                state.operatorStack[state.operatorStack.length - 1]
              ))
        ) {
          if (state.simpleCalculatorState) {
            state.valueStack.push(state.simpleCalculatorState.answer);
            state.simpleCalculatorState = null;
          } else {
            const value1 = state.valueStack.pop();
            const value2 = state.valueStack.pop();
            const operator = state.operatorStack.pop();
            state.simpleCalculatorState = {
              value1,
              value2,
              operator,
              answer: applyOp(operator, value1, value2),
            };
          }
        } else {
          state.operatorStack.push(currentChar);
          state.currentIndex = state.currentIndex + 1;
        }
      } else {
        state.currentIndex = state.currentIndex + 1;
      }
    },
  },
});

export const { setInput, onNext, reset } = evaluateExpressionSlice.actions;

export default evaluateExpressionSlice.reducer;

export const evaluateExpressionSelector = (state: RootState) =>
  state.evaluateExpression;
