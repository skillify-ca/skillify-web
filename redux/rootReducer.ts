import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { bakersRackBSlice, BakersRackBState } from "./bakerBSlice";
import { diagnosticSlice, DiagnosticState } from "./diagnosticSlice";
import {
  studentProfileSlice,
  StudentProfileState,
} from "./studentProfileSlice";


type State = {
  diagnostic: DiagnosticState;
  studentProfile: StudentProfileState;
  bakersRackB: BakersRackBState;

};
const diagnosticReducer: Reducer = diagnosticSlice.reducer;
const studentProfileReducer = studentProfileSlice.reducer;
const bakersRackBReducer = bakersRackBSlice.reducer;
const rootReducer = combineReducers({
  diagnostic: diagnosticReducer,
  studentProfile: studentProfileReducer,
  bakersRackB: bakersRackBReducer,
});

export type RootState = State;

export default rootReducer;
