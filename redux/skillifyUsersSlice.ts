import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Users } from "../graphql/fetchUserProfileCard";
import { RootState } from "./rootReducer";

export type skillifyUsersState = {
  userList: Users[];
};

const initialState: skillifyUsersState = { userList: [] };

export const skillifyUsersSlice: Slice = createSlice({
  name: "skillifyUsers",
  initialState,
  reducers: {
    setUserList: (
      state: skillifyUsersState,
      action: PayloadAction<Users[]>
    ) => {
      state.userList = action.payload;
    },
  },
});

export const { setUserList } = skillifyUsersSlice.actions;
export default skillifyUsersSlice.reducer;
export const userListSelector = (state: RootState) => state.skillifyUsers;
