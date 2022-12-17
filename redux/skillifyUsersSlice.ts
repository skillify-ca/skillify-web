import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import SkillCard from "../components/math/stories/SkillCard";
import { Users } from "../graphql/fetchUserProfileCard";
import { RootState } from "./rootReducer";

export type SkillifyUsersState = {
  userList: Users[];
};

// Create new type for skillifyUsers?

const initialState: SkillifyUsersState = { userList: [] };

export const skillifyUsersSlice: Slice = createSlice({
  name: "skillifyUsers",
  initialState,
  reducers: {
    setUserList: (
      state: SkillifyUsersState,
      action: PayloadAction<Users[]>
    ) => {
      state.userList = action.payload;
    },
  },
});

export const { setUserList } = skillifyUsersSlice.actions;
export default skillifyUsersSlice.reducer;
export const userListSelector = (state: RootState) => state.skillifyUsersState;
