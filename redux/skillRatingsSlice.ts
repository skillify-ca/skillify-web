import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

// export type SidebarProps = {};

export type SkillRatingsState = {
  skillRatings: SkillRating[];
};

export type SkillRatings = {
  skillId: string;
  skillName: string;
  unitId: string;
  unitName: string;
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
      action: PayloadAction<SkillRatings[]>
    ) => {
      if (action.type == "skillRatings/setSkillsRatings") {
        state.skillRatings = action.payload;
      }
    },
  },
});

export const { setSkillRatings } = skillRatingsSlice.actions;

export const skillRatingsSelector = (state: RootState) =>
  state.skillRatingsState;
