import { Slice, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfileData } from "../graphql/fetchUserProfile";
import { RootState } from "./rootReducer";


export type ProfileState = {
  userProfileData: UserProfileData;
  userBadgeCount: number;
  totalBadgeCount: number;
};



const initialState: ProfileState = {
  userProfileData: {
    typeName: "",
    createdAt: new Date(),
    email: "",
    lastSeen: new Date(),
    name: "",
    profileImage: "",
  },
  totalBadgeCount: 0,
  userBadgeCount: 0,
};

export const profileSlice: Slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserProfile: (
      state: ProfileState,
      action: PayloadAction<UserProfileData>
    ) => {
      if (action.type === "profile/setUserProfile") {
        return {
          ...state,
          userProfileData: action.payload,
        };
      }
    },

    setTotalBadgeCount: (
      state: ProfileState,
      action: PayloadAction<number>
    ) => {
      if (action.type === "profile/setTotalBadgeCount") {
        return {
          ...state,
          totalBadgeCount: action.payload,
        };
      }
    },

    setUserBadgeCount: (
      state: ProfileState,
      action: PayloadAction<number>
    ) => {
      if (action.type === "profile/setUserBadgeCount") {
        return {
          ...state,
          userBadgeCount: action.payload,
        };
      }
    },
  
   
   

  },
});

export const { setUserProfile, setUserBadgeCount, setTotalBadgeCount } =
  profileSlice.actions;

export default profileSlice.reducer;

export const profileSelector = (state: RootState) =>
  state.profileState;