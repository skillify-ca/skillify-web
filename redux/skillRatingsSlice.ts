import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type SkillRatingsState = {
  skillRatings: SkillRatingsRow[];
};

// both number and string types are needed for proper working of functions transformSkillRatings and transformSkillRatingsForDB
//transformSkillRatingForDB function checks type of userSkillId and sends it to DB to update skillRating if a string, but skips sending it if a number 
//and allows the DB to generate userSkillId correctly.
export type SkillRatingsRow = {
  userSkillId: string|number;
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
