import React from "react";
import { useSelector } from "react-redux";
import EvaluateExpression from "../../components/coding/evaluateExpression/EvaluateExpression";
import {
  evaluateExpressionSelector,
  onNext,
  onPrevious,
  reset,
  setInput,
} from "../../redux/evaluateExpressionSlice";

import { useAppDispatch } from "../../redux/store";

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
  return (
    <div className="flex flex-col">
      {stateHistory && (
        <EvaluateExpression
          stateHistory={stateHistory}
          onPreviousRequested={handleOnPreviousRequest}
          onNextRequested={handleOnNextRequest}
          onResetRequested={handleOnResetRequest}
          onInputChangeRequested={handleOnInputChangeRequest}
        />
      )}
    </div>
  );
}
