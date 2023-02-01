import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

import { Users } from "../graphql/fetchUserProfileCard";
import { RootState } from "./rootReducer";

export type userState = {
  userList: Users[];

};

const initialState: userState = { userList: []};

export const userSlice: Slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserList: (state: userState, action: PayloadAction<Users[]>) => {
      if (action.type == "users/setUserList") {
        return { userList: [...action.payload]};
      }
    },
  },
});

export const { setUserList } = userSlice.actions;
export default userSlice.reducer;
export const userSelector = (state: RootState) => state.userState;
