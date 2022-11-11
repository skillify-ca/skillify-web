import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

type Course = "intro" | "react" | "interview";
export type CourseState = {
  currentCourse: Course;
};

const initialState: CourseState = {
  currentCourse: "intro",
};

export const courseSlice: Slice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state: CourseState, action: PayloadAction<Course>) => {
      if (action.type == "course/setCourse") {
        return {
          currentCourse: action.payload,
        };
      }
    },
  },
});

export const { setCourse } = courseSlice.actions;

export default courseSlice.reducer;

export const courseSelector = (state: RootState) => state.courseState;
