import { combineReducers, Reducer } from "@reduxjs/toolkit";
import assignmentsSlice, { AssignmentsState } from "./assignmentsSlice";
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
  assignmentsState: AssignmentsState;
};
const evaluateExpressionReducer = evaluateExpressionSlice;
const quizReducer = quizSlice.reducer;
const sidebarReducer = sidebarSlice.reducer;
const skillRatingsReducer = skillRatingsSlice;
const userGoalsReducer = userGoalsSlice;
const profileReducer = profileSlice;
const assignmentsReducer = assignmentsSlice;

const rootReducer = combineReducers({
  evaluateExpressionHistory: evaluateExpressionReducer,
  quizState: quizReducer,
  sidebarState: sidebarReducer,
  skillRatingsState: skillRatingsReducer,
  userGoalsState: userGoalsReducer,
  profileState: profileReducer,
  assignmentsState: assignmentsReducer,
});

export type RootState = State;

export default rootReducer;
