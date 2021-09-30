import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Question } from "../pages/api/question";
import { RootState } from "./rootReducer";

export interface DiagnosticState {
  questions: Array<Question>;
  guessAns: Array<string>;
  guesses: Array<string>;
  grade: string;
  email: string;
  firstName: string;
  lastName: string;
}

const initialState: DiagnosticState = {
  questions: [],
  guessAns: [],
  guesses: [],
  grade: "",
  email: "",
  firstName: "",
  lastName: "",
};

export const diagnosticSlice: Slice = createSlice({
  name: "diagnostic",
  initialState,
  reducers: {
    setDiagnostic: (state, action: PayloadAction<DiagnosticState>) => {
      if (action.type == "diagnostic/setDiagnostic") {
        const newDiagnosticState = action.payload as DiagnosticState;
        state.questions = newDiagnosticState.questions;
        state.guessAns = newDiagnosticState.guessAns;
        state.guesses = newDiagnosticState.guesses;
        state.grade = newDiagnosticState.grade;
        state.email = newDiagnosticState.email;
        state.firstName = newDiagnosticState.firstName;
        state.lastName = newDiagnosticState.lastName;
      }
    },
  },
});

export const { setDiagnostic } = diagnosticSlice.actions;

export const diagnosticSelector = (state: RootState) => state.diagnostic;
