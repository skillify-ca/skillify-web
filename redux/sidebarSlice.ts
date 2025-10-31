import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type SidebarPage =
  | "dashboard"
  | "coaches"
  | "goals"
  | "accountability"
  | "jobs"
  | "profile"
  | "admin"
  | "coding_basics"
  | "frontend_development"
  | "interviewPrep1"
  | "interviewPrep2"
  | "crypto"
  | "financialLiteracy"
  | "vibe_coding"
  | "technology_and_mental_health"
  | "mockInterview"
  | "jobExplorer"
  | "challenges"
  | "jobBoard"

export interface SidebarState {
  activePage: SidebarPage;
  goalApproaching: boolean;
}

const initialState: SidebarState = {
  activePage: "dashboard",
  goalApproaching: false,
};

export const sidebarSlice: Slice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActivePage: (
      state: SidebarState,
      action: PayloadAction<SidebarPage>
    ) => {
      if (action.type == "sidebar/setActivePage") {
        state.activePage = action.payload;
      }
    },

    setIsGoalApproaching: (state, action: PayloadAction<boolean>) => {
      if (action.type == "sidebar/setIsGoalApproaching") {
        state.goalApproaching = action.payload;
      }
    },
  },
});

export const { setActivePage, setIsGoalApproaching } = sidebarSlice.actions;

export const activePageSelector = (state: RootState) => state.sidebarState;
