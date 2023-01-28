import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { EarnedBadges } from "../graphql/fetchEarnedBadges";

import { Users } from "../graphql/fetchUserProfileCard";
import { RootState } from "./rootReducer";

export type userState = {
  userList: Users[];
  earnedBadges: EarnedBadges[]
};

const initialState: userState = { userList: [], earnedBadges:[] };

export const userSlice: Slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserList: (state: userState, action: PayloadAction<Users[]>) => {
      if (action.type == "users/setUserList") {
        return { userList: [...action.payload], earnedBadges: state.earnedBadges, };
      }
    },

    setEarnedBadges: (state: userState, action: PayloadAction<EarnedBadges[]>) => {
      if (action.type == "users/setEarnedBadges") {
        return { earnedBadges: [...action.payload], userList: state.userList };
      }
    },
  },
});

export const { setUserList, setEarnedBadges } = userSlice.actions;
export default userSlice.reducer;
export const userSelector = (state: RootState) => state.userState;
