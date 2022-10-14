import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserGoalsData } from "../graphql/fetchUserGoals";
import { isComplete } from "./evaluateExpressionSlice";

import { RootState } from "./rootReducer";

export type UserGoalsState = {
  userGoals: UserGoalsData[]
};


const initialState: UserGoalsState = {
    userGoals: [],
  };


export const userGoalsSlice: Slice = createSlice({
  name: "userGoals",
  initialState,
  reducers: {
    setUserGoals: (
      state: UserGoalsState,
      action: PayloadAction<UserGoalsData[]>
    ) => {
      if (action.type == "userGoals/setUserGoals") {
        return {
          userGoals: [...action.payload],
        };
      }
    },

    updateUserGoals: (
      state: UserGoalsState,
      action: PayloadAction<{ newTargetDate: Date; id: String; newIsComplete: boolean; newIsArchived: boolean }>
    ) => {
      if (action.type == "skillRatings/updateSkillRatings") {
        const index = state.userGoals.findIndex(
          (obj) => obj.id == action.payload.id
        );
        state.userGoals[index].targetDate =
          action.payload.newTargetDate;
        state.userGoals[index].isComplete =
          action.payload.newIsComplete;
        state.userGoals[index].isArchived =
          action.payload.newIsArchived;
      }
    },
  },
});

export const { setSkillRatings, updateSkillRatings } =
  userGoalsSlice.actions;

export default userGoalsSlice.reducer;

export const userGoalsSelector = (state: RootState) =>
  state.userGoalsSlice;
