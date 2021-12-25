import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Grade, grades } from "../pages/api/skill";
import { RootState } from "./rootReducer";

export interface StudentProfileState {
  grade: Grade;
}

const initialState: StudentProfileState = {
  grade: {title: "Grade 1", ordinal: 1},
};

export const studentProfileSlice: Slice = createSlice({
  name: "studentProfile",
  initialState,
  reducers: {
    setStudentProfile: (state, action: PayloadAction<string>) => {
      if (action.type == "studentProfile/setStudentProfile") {
        const newGradeTitle = action.payload as string;
        state.grade = getGrade(newGradeTitle)};
      }
    },
});

const getGrade = (title: string) => {
  return grades.find(it => it.title === title)
}

export const { setStudentProfile } = studentProfileSlice.actions;

export const studentProfileSelector = (state: RootState) =>
  state.studentProfile;
