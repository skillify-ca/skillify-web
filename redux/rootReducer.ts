import { combineReducers, Reducer } from "@reduxjs/toolkit";

import assignmentsSlice, { AssignmentsState } from "./assignmentsSlice";
import { Users } from "../graphql/fetchUserProfileCard";
import evaluateExpressionSlice, {
  EvaluateExpressionState,
} from "./evaluateExpressionSlice";
import profileSlice, { ProfileState } from "./profileSlice";
import { QuizState, quizSlice } from "./quizSlice";
import { SidebarState, sidebarSlice } from "./sidebarSlice";
import userSlice, { userState } from "./userSlice";
import skillRatingsSlice, { SkillRatingsState } from "./skillRatingsSlice";
import userGoalsSlice, { UserGoalsState } from "./userGoalsSlice";

type State = {
  [x: string]: any;
  evaluateExpressionHistory: EvaluateExpressionState[];
  quizState: QuizState;
  sidebarState: SidebarState;
  skillRatingsState: SkillRatingsState;
  userGoalsState: UserGoalsState;
  profileState: ProfileState;
  assignmentsState: AssignmentsState;
  skillifyUsersState: SkillifyUsersState;
  userState: userState;
};
const evaluateExpressionReducer = evaluateExpressionSlice;
const quizReducer = quizSlice.reducer;
const sidebarReducer = sidebarSlice.reducer;
const skillRatingsReducer = skillRatingsSlice;
const userGoalsReducer = userGoalsSlice;
const profileReducer = profileSlice;
const assignmentsReducer = assignmentsSlice;
const skillifyUsersReducer = skillifyUsersSlice;
const userReducer = userSlice;

const rootReducer = combineReducers({
  evaluateExpressionHistory: evaluateExpressionReducer,
  quizState: quizReducer,
  sidebarState: sidebarReducer,
  skillRatingsState: skillRatingsReducer,
  userGoalsState: userGoalsReducer,
  profileState: profileReducer,
  assignmentsState: assignmentsReducer,
  skillifyUsersState: skillifyUsersReducer,
  userState: userReducer,
});

export type RootState = State;

export default rootReducer;
