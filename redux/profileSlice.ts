import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserProfileData } from "../graphql/studentPortal/profile/fetchUserProfile";
import { RootState } from "./rootReducer";

export enum UserRole {
  STUDENT = "student",
  COACH = "coach",
  FREEMIUM = "freemium",
}

export type ProfileState = {
  userProfileData: UserProfileData;
  userBadgeCount: number;
  totalBadgeCount: number;
  userRole: UserRole;
  createdAt: Date;
};

const initialState: ProfileState = {
  userProfileData: {
    id: "",
    createdAt: new Date(),
    email: "",
    lastSeen: new Date(),
    name: "",
  },
  totalBadgeCount: 0,
  userBadgeCount: 0,
  userRole: UserRole.FREEMIUM,
  createdAt: new Date(),
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

    setUserBadgeCount: (state: ProfileState, action: PayloadAction<number>) => {
      if (action.type == "profile/setUserBadgeCount") {
        return {
          ...state,
          userBadgeCount: action.payload,
        };
      }
    },

    setUserRole: (state: ProfileState, action: PayloadAction<UserRole>) => {
      if (action.type == "profile/setUserRole") {
        return {
          ...state,
          userRole: action.payload,
        };
      }
    },

    setCreatedAt: (state: ProfileState, action: PayloadAction<Date>) => {
      if (action.type == "profile/setCreatedAt") {
        return {
          ...state,
          createdAt: action.payload,
        };
      }
    },
  },
});

export const {
  setUserProfile,
  setUserBadgeCount,
  setTotalBadgeCount,
  setUserRole,
  setCreatedAt,
} = profileSlice.actions;

export default profileSlice.reducer;

export const profileSelector = (state: RootState) => state.profileState;
