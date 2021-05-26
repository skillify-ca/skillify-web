import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Question } from "../pages/api/question";
import { Topic } from "../pages/api/skill";
import { RootState } from "./rootReducer";

export interface DiagnosticState {
  questions: Array<Question>;
  guessAns: Array<string>;
  grade: string;
}

const initialState: DiagnosticState = {
  questions: [],
  guessAns: [],
  grade: "", 
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
        state.grade = newDiagnosticState.grade;
      }
    },
  },
});

export const { setDiagnostic } = diagnosticSlice.actions;

export const diagnosticSelector = (state: RootState) => state.diagnostic;
