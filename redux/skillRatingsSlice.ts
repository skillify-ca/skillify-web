import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

// export type SidebarProps = {};

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
        state.skillRatings = action.payload;
      }
    },
  },
});

export const { setSkillRatings } = skillRatingsSlice.actions;

export const skillRatingsSelector = (state: RootState) =>
  state.skillRatingsState;
