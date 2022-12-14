import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { Users } from "../graphql/fetchUserProfileCard";
import evaluateExpressionSlice, {
  EvaluateExpressionState,
} from "./evaluateExpressionSlice";
import profileSlice, { ProfileState } from "./profileSlice";
import { QuizState, quizSlice } from "./quizSlice";
import { SidebarState, sidebarSlice } from "./sidebarSlice";
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
  skillifyUsers: Users;
};
const evaluateExpressionReducer = evaluateExpressionSlice;
const quizReducer = quizSlice.reducer;
const sidebarReducer = sidebarSlice.reducer;
const skillRatingsReducer = skillRatingsSlice;
const userGoalsReducer = userGoalsSlice;
const profileReducer = profileSlice;

const rootReducer = combineReducers({
  evaluateExpressionHistory: evaluateExpressionReducer,
  quizState: quizReducer,
  sidebarState: sidebarReducer,
  skillRatingsState: skillRatingsReducer,
  userGoalsState: userGoalsReducer,
  profileState: profileReducer,
});

export type RootState = State;

export default rootReducer;
