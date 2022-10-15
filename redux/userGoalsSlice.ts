import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserGoalsData } from "../graphql/fetchUserGoals";
import { isComplete } from "./evaluateExpressionSlice";

import { RootState } from "./rootReducer";

export type UserGoalsState = {
  userGoals: UserGoalsSelected[];
};

export type UserGoalsSelected = {
  createdAt: Date;
  goalName: string;
  id: string;
  updatedAt: Date;
  userId: string;
  isComplete: boolean;
  targetDate: Date;
  isArchived: boolean;
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

    
  },
});

export const { setUserGoals } =
  userGoalsSlice.actions;

export default userGoalsSlice.reducer;

export const userGoalsSelector = (state: RootState) =>
  state.userGoalsState;
