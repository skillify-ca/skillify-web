import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { bakersRackBSlice, BakersRackBState } from "./bakerBSlice";
import { diagnosticSlice, DiagnosticState } from "./diagnosticSlice";
import {
  studentProfileSlice,
  StudentProfileState,
} from "./studentProfileSlice";
import { assignmentSessionSlice, assignmentSessionState } from "./assignmentSession"


type State = {
  diagnostic: DiagnosticState;
  studentProfile: StudentProfileState;
  bakersRackB: BakersRackBState;
  assignmentSession: assignmentSessionState;
};
const diagnosticReducer: Reducer = diagnosticSlice.reducer;
const studentProfileReducer = studentProfileSlice.reducer;
const bakersRackBReducer = bakersRackBSlice.reducer;
const assignmentSessionReducer = assignmentSessionSlice.reducer;
const rootReducer = combineReducers({
  diagnostic: diagnosticReducer,
  studentProfile: studentProfileReducer,
  bakersBRack: bakersRackBReducer,
  assignmentSession: assignmentSessionReducer
});

export type RootState = State;

export default rootReducer;
