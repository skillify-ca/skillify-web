import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserProfileData } from "../graphql/fetchUserProfile";
import { RootState } from "./rootReducer";

export type ProfileState = {
  userProfileData: UserProfileData;
  userBadgeCount: number;
  totalBadgeCount: number;
};



const initialState: ProfileState = {
  userProfileData: {} as UserProfileData,
  userBadgeCount: 0,
  totalBadgeCount: 0,
};

export const profileSlice: Slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserProfile: (
      state: ProfileState,
      action: PayloadAction<UserProfileData>
    ) => {
      if (action.type == "profile/setUserProfile") {
        return {
          userProfile: action.payload,
          userBadgeCount: state.userBadgeCount,
          totalBadgeCount: state.totalBadgeCount,
        };
      }
      return state;
    },

    setUserBadgeCount: (
      state: ProfileState,
      action: PayloadAction<number>
    ) => {
      if (action.type == "profile/setUserBadgeCount") {
        return {
          userProfile: state.userBadgeCount,
          userBadgeCount: action.payload,
          totalBadgeCount: state.totalBadgeCount,
        };
      }
      return state;
    },
    
    setTotalBadgeCount: (
      state: ProfileState,
      action: PayloadAction<number>
    ) => {
      if (action.type == "profile/setTotalBadgeCount") {
        return {
          userProfile: state.userProfileData,
          userBadgeCount: state.userBadgeCount,
          totalBadgeCount: action.payload,
        };
      }
      return state;
    },

  },
});

export const { setUserProfile, setUserBadgeCount, setTotalBadgeCount } =
  profileSlice.actions;

export default profileSlice.reducer;

export const profileSelector = (state: RootState) =>
  state.profileState;