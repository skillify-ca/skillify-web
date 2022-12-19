import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserGoalsData } from "../graphql/fetchUserGoals";

import { RootState } from "./rootReducer";

export type UserGoalsState = {
  userGoals: UserGoalsData[];
  goalsSections: GoalSection[];
};

export type GoalSection = {
  sectionName: string;
  userGoals: UserGoalsData[];
};

const initialState: UserGoalsState = {
  userGoals: [],
  goalsSections: [],
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
          userGoals: action.payload,
          goalsSections: state.goalsSections,
        };
      }
    },

    setGoalsSections: (
      state: UserGoalsState,
      action: PayloadAction<GoalSection[]>
    ) => {
      if (action.type == "userGoals/setGoalsSections") {
        return {
          userGoals: state.userGoals,
          goalsSections: action.payload,
        };
      }
    },
  },
});

export const { setUserGoals, setGoalsSections } = userGoalsSlice.actions;

export default userGoalsSlice.reducer;

export const userGoalsSelector = (state: RootState) => state.userGoalsState;
