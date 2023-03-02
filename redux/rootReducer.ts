import { combineReducers, Reducer } from "@reduxjs/toolkit";

import assignmentsSlice, { AssignmentsState } from "./assignmentsSlice";
import { Users } from "../graphql/studentPortal/admin/fetchUserProfileCard";
import evaluateExpressionSlice, {
  EvaluateExpressionState,
} from "./evaluateExpressionSlice";
import profileSlice, { ProfileState } from "./profileSlice";
import { QuizState, quizSlice } from "./quizSlice";
import { SidebarState, sidebarSlice } from "./sidebarSlice";
import userSlice, { userState } from "./userSlice";
import skillRatingsSlice, { SkillRatingsState } from "./skillRatingsSlice";
import userGoalsSlice, { UserGoalsState } from "./userGoalsSlice";
import themeSlice, { ThemeState } from "./themeSlice";

type State = {
  [x: string]: any;
  evaluateExpressionHistory: EvaluateExpressionState[];
  quizState: QuizState;
  sidebarState: SidebarState;
  skillRatingsState: SkillRatingsState;
  userGoalsState: UserGoalsState;
  profileState: ProfileState;
  assignmentsState: AssignmentsState;
  userState: userState;
  themeState: ThemeState;
};
const evaluateExpressionReducer = evaluateExpressionSlice;
const quizReducer = quizSlice.reducer;
const sidebarReducer = sidebarSlice.reducer;
const skillRatingsReducer = skillRatingsSlice;
const userGoalsReducer = userGoalsSlice;
const profileReducer = profileSlice;
const assignmentsReducer = assignmentsSlice;
const userReducer = userSlice;
const themeReducer = themeSlice;

const rootReducer = combineReducers({
  evaluateExpressionHistory: evaluateExpressionReducer,
  quizState: quizReducer,
  sidebarState: sidebarReducer,
  skillRatingsState: skillRatingsReducer,
  userGoalsState: userGoalsReducer,
  profileState: profileReducer,
  assignmentsState: assignmentsReducer,
  userState: userReducer,
  themeState: themeReducer,
});

export type RootState = State;

export default rootReducer;
