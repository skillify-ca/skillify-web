import {
  EvaluateExpressionState,
  isComplete,
} from "../../../redux/evaluateExpressionSlice";

interface AlgorithmProps {
  state: EvaluateExpressionState;
}

const Algorithm = ({ state }: AlgorithmProps) => {
  return (
    <div>
      <ul className="list-disc list-inside">
        <li
          className={`${
            state.currentIndex < state.inputExpression.length ? "font-bold" : ""
          }`}
        >
          While there are still tokens to be read in
        </li>
        <ul className="ml-4 list-disc list-inside">
          <li
            className={`${
              state.currentIndex < state.inputExpression.length
                ? "font-bold"
                : ""
            }`}
          >
            Get the next token.
          </li>
          <li
            className={`${
              state.currentIndex < state.inputExpression.length
                ? "font-bold"
                : ""
            }`}
          >
            If the token is:
          </li>
          <ul className="ml-4 list-disc list-inside">
            <li
              className={`${
                state.currentIndex < state.inputExpression.length &&
                "0123456789".includes(state.inputExpression[state.currentIndex])
                  ? "font-bold"
                  : ""
              }`}
            >
              A number: push it onto the value stack.
            </li>
            <li
              className={`${
                state.currentIndex < state.inputExpression.length &&
                "(".includes(state.inputExpression[state.currentIndex])
                  ? "font-bold"
                  : ""
              }`}
            >
              A left parenthesis: push it onto the operator stack.
            </li>
            <li
              className={`${
                state.currentIndex < state.inputExpression.length &&
                ")".includes(state.inputExpression[state.currentIndex])
                  ? "font-bold"
                  : ""
              }`}
            >
              A right parenthesis:
            </li>
            <li className="ml-4">
              While the thing on top of the operator stack is not a left
              parenthesis:
            </li>
            <ul className="ml-8 list-disc">
              <ul className="ml-4 list-disc">
                <li>Pop the operator from the operator stack.</li>
                <li>Pop the value stack twice, getting two operands.</li>
                <li>
                  Apply the operator to the operands, in the correct order.
                </li>
                <li>Push the result onto the value stack.</li>
              </ul>
              <li>
                Else pop the left parenthesis from the operator stack, and
                discard it.
              </li>
            </ul>

            <li
              className={`${
                state.currentIndex < state.inputExpression.length &&
                "+-*/".includes(state.inputExpression[state.currentIndex])
                  ? "font-bold"
                  : ""
              }`}
            >
              An operator (call it thisOp):
            </li>
            <ul className="ml-8 list-disc">
              <li
                className={`${
                  state.currentIndex < state.inputExpression.length &&
                  state.operatorStack.length > 0 &&
                  "+-*/".includes(state.inputExpression[state.currentIndex])
                    ? "font-bold"
                    : ""
                }`}
              >
                While the operator stack is not empty, and the top thing on the
                operator stack has the same or greater precedence as thisOp,
              </li>
              <ul
                className={`ml-4 list-disc ${
                  state.currentIndex < state.inputExpression.length &&
                  state.operatorStack.length > 0 &&
                  "+-*/".includes(state.inputExpression[state.currentIndex])
                    ? "font-bold"
                    : ""
                }`}
              >
                <li>Pop the operator from the operator stack.</li>
                <li>Pop the value stack twice, getting two operands.</li>
                <li>
                  Apply the operator to the operands, in the correct order.
                </li>
                <li>Push the result onto the value stack.</li>
              </ul>
              <li
                className={` ${
                  state.currentIndex < state.inputExpression.length &&
                  state.operatorStack.length === 0 &&
                  "+-*/".includes(state.inputExpression[state.currentIndex])
                    ? "font-bold"
                    : ""
                }`}
              >
                Push thisOp onto the operator stack.
              </li>
            </ul>
          </ul>
        </ul>
      </ul>
      <ul className="list-disc list-inside">
        <li
          className={`${
            state.currentIndex >= state.inputExpression.length &&
            state.operatorStack.length > 0
              ? "font-bold"
              : ""
          }`}
        >
          While the operator stack is not empty,
        </li>
        <ul
          className={`ml-4 list-disc list-inside ${
            (state.currentIndex >= state.inputExpression.length &&
              state.operatorStack.length > 0) ||
            state.simpleCalculatorState
              ? "font-bold"
              : ""
          }`}
        >
          <li> Pop the operator from the operator stack.</li>
          <li> Pop the value stack twice, getting two operands.</li>
          <li> Apply the operator to the operands, in the correct order.</li>
          <li>Push the result onto the value stack.</li>
        </ul>
      </ul>
      <ul className="list-disc list-inside">
        <li
          className={`ml-4 list-disc list-inside ${
            isComplete(state) ? "font-bold" : ""
          }`}
        >
          At this point the operator stack should be empty, and the value stack
          should have only one value in it, which is the final result.
        </li>
      </ul>
    </div>
  );
};

export default Algorithm;
