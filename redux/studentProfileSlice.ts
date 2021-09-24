import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Grade } from "../pages/api/skill";
import { RootState } from "./rootReducer";

export interface StudentProfileState {
  grade: string;
}

const initialState: StudentProfileState = {
  grade: Grade.GRADE_1,
};

export const studentProfileSlice: Slice = createSlice({
  name: "studentProfile",
  initialState,
  reducers: {
    setStudentProfile: (state, action: PayloadAction<StudentProfileState>) => {
      if (action.type == "studentProfile/setStudentProfile") {
        const newStudentProfileState = action.payload as StudentProfileState;
        state.grade = newStudentProfileState.grade;
      }
    },
  },
});

export const { setStudentProfile } = studentProfileSlice.actions;

export const studentProfileSelector = (state: RootState) =>
  state.studentProfile;
