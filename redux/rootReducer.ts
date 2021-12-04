import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { bakersRackBSlice, BakersRackBState } from "./bakerBSlice";
import { diagnosticSlice, DiagnosticState } from "./diagnosticSlice";
import { warGameSlice, WarGameState } from "./warGameSlice";
import {
  studentProfileSlice,
  StudentProfileState,
} from "./studentProfileSlice";
import {
  assignmentSessionSlice,
  assignmentSessionState,
} from "./assignmentSession";
import {
  evaluateExpressionSlice,
  EvaluateExpressionState,
} from "./evaluateExpressionSlice";

type State = {
  diagnostic: DiagnosticState;
  studentProfile: StudentProfileState;
  bakersRackB: BakersRackBState;
  assignmentSession: assignmentSessionState;
  warGame: WarGameState;
  evaluateExpression: EvaluateExpressionState;
};
const diagnosticReducer: Reducer = diagnosticSlice.reducer;
const studentProfileReducer = studentProfileSlice.reducer;
const bakersRackBReducer = bakersRackBSlice.reducer;
const assignmentSessionReducer = assignmentSessionSlice.reducer;
const warGameReducer = warGameSlice.reducer;
const evaluateExpressionReducer = evaluateExpressionSlice.reducer;

const rootReducer = combineReducers({
  diagnostic: diagnosticReducer,
  studentProfile: studentProfileReducer,
  bakersBRack: bakersRackBReducer,
  assignmentSession: assignmentSessionReducer,
  warGame: warGameReducer,
  evaluateExpression: evaluateExpressionReducer,
});

export type RootState = State;

export default rootReducer;
