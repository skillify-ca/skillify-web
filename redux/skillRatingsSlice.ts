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
    updateSkillRatings: (
      state: SkillRatingsState,
      action: PayloadAction<{ newStudentRating: Number; skillId: String }>
    ) => {
      if (action.type == "skillRatings/updateSkillRatings") {
        const skillRatingsCopy = [...state.skillRatings];

        const index = skillRatingsCopy.findIndex(
          (obj) => obj.skillId == action.payload.skillId
        );

        skillRatingsCopy[index].studentRating = action.payload.newStudentRating;
      }
    },
  },
});

export const { setSkillRatings, updateSkillRatings } =
  skillRatingsSlice.actions;

export const skillRatingsSelector = (state: RootState) =>
  state.skillRatingsState;
