import React from "react";
import { useSelector } from "react-redux";
import EvaluateExpression from "../../components/coding/EvaluateExpression";
import {
  evaluateExpressionSelector,
  onNext,
  reset,
  setInput,
} from "../../redux/evaluateExpressionSlice";

import { useAppDispatch } from "../../redux/store";

export default function EvaluateExpressionPage(props) {
  const dispatch = useAppDispatch();
  const state = useSelector(evaluateExpressionSelector);

  const handleOnInputChangeRequest = (val) => {
    dispatch(setInput(val));
  };
  const handleOnNextRequest = () => {
    dispatch(onNext(null));
  };
  const handleOnResetRequest = () => {
    dispatch(reset(null));
  };
  return (
    <div className="flex flex-col">
      {state && (
        <EvaluateExpression
          state={state}
          onNextRequested={handleOnNextRequest}
          onResetRequested={handleOnResetRequest}
          onInputChangeRequested={handleOnInputChangeRequest}
        />
      )}
    </div>
  );
}
