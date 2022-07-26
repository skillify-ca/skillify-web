import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type SkillRatingsState = {
  skillRatings: SkillRatingsRow[];
};

export type SkillRatingsRow = {
  userSkillId: string;
  skillId: string;
  skillName: string;
  unitName: string;
  studentRating: number;
};

const initialState: SkillRatingsState = {
  skillRatings: [],
};

export const skillRatingsSlice: Slice = createSlice({
  name: "skillRatings",
  initialState,
  reducers: {
    setSkillRatings: (
      state: SkillRatingsState,
      action: PayloadAction<SkillRatingsRow[]>
    ) => {
      if (action.type == "skillRatings/setSkillRatings") {
        return {
          skillRatings: [...action.payload],
        };
      }
    },

    updateSkillRatings: (
      state: SkillRatingsState,
      action: PayloadAction<{ newStudentRating: number; userSkillId: string }>
    ) => {
      if (action.type == "skillRatings/updateSkillRatings") {
        const index = state.skillRatings.findIndex(
          (obj) => obj.userSkillId == action.payload.userSkillId
        );
        state.skillRatings[index].studentRating =
          action.payload.newStudentRating;
      }
    },
  },
});

export const { setSkillRatings, updateSkillRatings } =
  skillRatingsSlice.actions;

export default skillRatingsSlice.reducer;

export const skillRatingsSelector = (state: RootState) =>
  state.skillRatingsState;
