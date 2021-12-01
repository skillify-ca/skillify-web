import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
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
};

const initialState: EvaluateExpressionState = {
  currentIndex: 0,
  inputExpression: "2+4*5",
  valueStack: [],
  operatorStack: [],
  stage: Stage.POPULATING_STACK,
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
      state.inputExpression = "2+4*5";
      state.operatorStack = [];
      state.stage = Stage.POPULATING_STACK;
    },
    onNext: (state: EvaluateExpressionState, action: PayloadAction) => {
      let currentChar = getCurrentChar(state);
      if (state.stage === Stage.CLEARING_STACK) {
        while (state.operatorStack.length !== 0) {
          state.valueStack.push(
            applyOp(
              state.operatorStack.pop(),
              state.valueStack.pop(),
              state.valueStack.pop()
            )
          );
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
      } else if (
        currentChar == "+" ||
        currentChar == "-" ||
        currentChar == "*" ||
        currentChar == "/"
      ) {
        while (state.operatorStack.length !== 0) {
          state.valueStack.push(
            applyOp(
              state.operatorStack.pop(),
              state.valueStack.pop(),
              state.valueStack.pop()
            )
          );
        }

        state.operatorStack.push(currentChar);
        state.currentIndex = state.currentIndex + 1;
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
