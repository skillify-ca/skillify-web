import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import { produce } from "immer";
import { act } from "react-three-fiber";

export type SkillRatingsState = {
  skillRatings: SkillRatingsRow[];
};

export type SkillRatingsRow = {
  skillId: String;
  skillName: String;
  unitName: String;
  studentRating: Number;
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
      action: PayloadAction<{ newStudentRating: Number; skillId: String }>
    ) => {
      if (action.type == "skillRatings/updateSkillRatings") {
        const index = state.skillRatings.findIndex(
          (obj) => obj.skillId == action.payload.skillId
        );
        state.skillRatings[index].studentRating =
          action.payload.newStudentRating;
      }
    },
  },
});

export const { setSkillRatings, updateSkillRatings, setSkillRatingsDos } =
  skillRatingsSlice.actions;

export default skillRatingsSlice.reducer;

export const skillRatingsSelector = (state: RootState) =>
  state.skillRatingsState;
