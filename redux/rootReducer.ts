import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { diagnosticSlice, DiagnosticState } from "./diagnosticSlice";
import {
  studentProfileSlice,
  StudentProfileState,
} from "./studentProfileSlice";

type State = {
  diagnostic: DiagnosticState;
  studentProfile: StudentProfileState;
};
const diagnosticReducer: Reducer = diagnosticSlice.reducer;
const studentProfileReducer = studentProfileSlice.reducer;
const rootReducer = combineReducers({
  diagnostic: diagnosticReducer,
  studentProfile: studentProfileReducer,
});

export type RootState = State;

export default rootReducer;
