import reducer, {
  EvaluateExpressionState,
  onNext,
  setInput,
  Stage,
} from "./evaluateExpressionSlice";

const initialState: EvaluateExpressionState[] = [
  {
    currentIndex: 0,
    inputExpression: "",
    operatorStack: [],
    stage: Stage.POPULATING_STACK,
    valueStack: [],
    message: "",
  },
];

test("should return the initial state", () => {
  expect(reducer(undefined, { type: "no action" })).toEqual(initialState);
});

const evaluate = (expression: string) => {
  let state = initialState;
  state = reducer(initialState, setInput(expression));

  while (
    state[state.length - 1].currentIndex < expression.length ||
    state[state.length - 1].operatorStack.length > 0 ||
    state[state.length - 1].simpleCalculatorState
  ) {
    state = reducer(state, onNext);
  }
  return state;
};

test("test (1+(4+5+2)-3)+(6+8)", () => {
  const history = evaluate("(1+(4+5+2)-3)+(6+8)");
  const last = history[history.length - 1];
  expect(last.valueStack[0]).toEqual(23);
});

test("test 1 + 1", () => {
  const history = evaluate("(1+1)");
  const last = history[history.length - 1];
  expect(last.valueStack[0]).toEqual(2);
});

test("test 2 - 1 +2", () => {
  const history = evaluate("(2-1+2)");
  const last = history[history.length - 1];
  expect(last.valueStack[0]).toEqual(3);
});
