import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserGoalsData } from "../graphql/fetchUserGoals";

import { RootState } from "./rootReducer";

export type UserGoalsState = {
  userGoals: UserGoalsData[];
  goalsSections: GoalSection[];
  goalApproaching: boolean;
};

export type GoalSection = {
  sectionName: string;
  userGoals: UserGoalsData[];
};

const initialState: UserGoalsState = {
  userGoals: [],
  goalsSections: [],
  goalApproaching: false,
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
        state.userGoals = action.payload;
      }
    },

    isGoalApproaching: (state, action: PayloadAction<boolean>) => {
      if (action.type == "userGoals/isGoalApproaching") {
        state.goalApproaching = action.payload;
      }
    },

    setGoalsSections: (
      state: UserGoalsState,
      action: PayloadAction<GoalSection[]>
    ) => {
      if (action.type == "userGoals/setGoalsSections") {
        state.goalsSections = action.payload;
      }
    },
  },
});

export const { setUserGoals, setGoalsSections, isGoalApproaching } = userGoalsSlice.actions;

export default userGoalsSlice.reducer;

export const userGoalsSelector = (state: RootState) => state.userGoalsState;
