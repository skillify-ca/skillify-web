import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserGoalsData } from "../graphql/fetchUserGoals";
import { isComplete } from "./evaluateExpressionSlice";

import { RootState } from "./rootReducer";

export type UserGoalsState = {
  userGoals: UserGoalsData[];
  // add goalsSections here with defined type
};

export type GoalSection = {
  sectionName: string;
  userGoals: UserGoalsData[];
};

const initialState: UserGoalsState = {
  userGoals: [],
  // add initial state for goalsSections here
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

    // add set goals sections reducer
  },
});

export const { setUserGoals } = userGoalsSlice.actions;

export default userGoalsSlice.reducer;

export const userGoalsSelector = (state: RootState) => state.userGoalsState;
