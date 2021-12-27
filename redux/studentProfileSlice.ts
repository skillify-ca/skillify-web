import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Unit } from "../pages/api/explore";
import { Grade, grades } from "../pages/api/skill";
import { RootState } from "./rootReducer";

export interface PracticeTrackerState {
  mathLevel: number;
  codingLevel: number;
  financeLevel: number;
  selectedUnit?: Unit;
}

const initialState: PracticeTrackerState = {
  mathLevel: 1,
  codingLevel: 1,
  financeLevel: 1,
};

export const practiceTrackerSlice: Slice = createSlice({
  name: "practiceTracker",
  initialState,
  reducers: {
    selectUnit: (state, action: PayloadAction<Unit>) => {
      if (action.type == "practiceTracker/selectUnit") {
        const unit = action.payload as Unit;
        state.selectedUnit = unit;
      }
    },
    deselectUnit: (state, action: PayloadAction) => {
      if (action.type == "practiceTracker/deselectUnit") {
        state.selectedUnit = undefined;
      }
    },
    setStudentProfile: (state, action: PayloadAction<string>) => {
      if (action.type == "practiceTracker/setStudentProfile") {
        const newGradeTitle = action.payload as string;
        state.grade = getGrade(newGradeTitle);
      }
    },
    setMathLevel: (state, action: PayloadAction<number>) => {
      if (action.type == "practiceTracker/setMathLevel") {
        const newMathLevel = action.payload as number;
        state.mathLevel = newMathLevel;
      }
    },
  },
});

const getGrade = (title: string) => {
  return grades.find((it) => it.title === title);
};

export const { setStudentProfile, setMathLevel, selectUnit, deselectUnit } =
  practiceTrackerSlice.actions;

export const practiceTrackerSelector = (state: RootState) =>
  state.practiceTracker;
