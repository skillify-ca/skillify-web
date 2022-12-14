import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Users } from "../graphql/fetchUserProfileCard";
import { RootState } from "./rootReducer";

const initialState: Users[] = [];

export const skillifyUsersSlice: Slice = createSlice({
  name: "skillifyUsers",
  initialState,
  reducers: {
    setUserList: (state: Users[], action: PayloadAction<Users[]>) => {
      if (action.type == "skillifyUsers/setUserList") {
        return {
          skillifyUsersSlice: [...action.payload],
        };
      }
    },
  },
});
