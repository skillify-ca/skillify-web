import { SET_DIAGNOSTIC_RESULTS } from "./actionTypes";

export const setDiagnosticResults = (results) => ({
  type: SET_DIAGNOSTIC_RESULTS,
  payload: { results },
});
