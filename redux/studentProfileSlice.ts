import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Grade, grades } from "../pages/api/skill";
import { RootState } from "./rootReducer";

export interface StudentProfileState {
  mathLevel: number;
  codingLevel: number;
  financeLevel: number;
}

const initialState: StudentProfileState = {
  mathLevel: 1,
  codingLevel: 1,
  financeLevel: 1,
};

export const studentProfileSlice: Slice = createSlice({
  name: "studentProfile",
  initialState,
  reducers: {
    setStudentProfile: (state, action: PayloadAction<string>) => {
      if (action.type == "studentProfile/setStudentProfile") {
        const newGradeTitle = action.payload as string;
        state.grade = getGrade(newGradeTitle);
      }
    },
    setMathLevel: (state, action: PayloadAction<number>) => {
      if (action.type == "studentProfile/setMathLevel") {
        const newMathLevel = action.payload as number;
        state.mathLevel = newMathLevel;
      }
    },
  },
});

const getGrade = (title: string) => {
  return grades.find((it) => it.title === title);
};

export const { setStudentProfile, setMathLevel } = studentProfileSlice.actions;

export const studentProfileSelector = (state: RootState) =>
  state.studentProfile;
