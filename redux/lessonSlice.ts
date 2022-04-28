import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type Question = {
  text: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: string;
  image?: string;
};

export interface LessonState {
  totalSteps: number;
  currentStep: number;
}

const initialState: LessonState = {
  totalSteps: 0,
  currentStep: 0,
};

export const lessonSlice: Slice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    setTotalSteps: (state: LessonState, action: PayloadAction<number>) => {
      if (action.type == "lesson/setTotalSteps") {
        state.totalSteps = action.payload;
      }
    },
    incrementProgress: (state: LessonState, action: PayloadAction) => {
      if (action.type == "lesson/incrementProgress") {
        state.currentStep = state.currentStep + 1;
      }
    },
    resetCurrentSteps: (state: LessonState, action: PayloadAction) => {
      if (action.type == "lesson/resetCurrentSteps") {
        state.currentStep = 0;
      }
    },
  },
});

export const { setTotalSteps, incrementProgress, resetCurrentSteps } =
  lessonSlice.actions;

export const lessonSelector = (state: RootState) => state.lessonState;
