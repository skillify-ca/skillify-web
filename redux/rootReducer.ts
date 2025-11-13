import { combineReducers } from "@reduxjs/toolkit";

import evaluateExpressionSlice, {
  EvaluateExpressionState,
} from "./evaluateExpressionSlice";
import profileSlice, { ProfileState } from "./profileSlice";
import { QuizState, quizSlice } from "./quizSlice";
import { SidebarState, sidebarSlice } from "./sidebarSlice";
import themeSlice, { ThemeState } from "./themeSlice";
import userGoalsSlice, { UserGoalsState } from "./userGoalsSlice";
import userSlice, { userState } from "./userSlice";

type State = {
  [x: string]: any;
  evaluateExpressionHistory: EvaluateExpressionState[];
  quizState: QuizState;
  sidebarState: SidebarState;
  userGoalsState: UserGoalsState;
  profileState: ProfileState;
  userState: userState;
  themeState: ThemeState;
};
const evaluateExpressionReducer = evaluateExpressionSlice;
const quizReducer = quizSlice.reducer;
const sidebarReducer = sidebarSlice.reducer;
const userGoalsReducer = userGoalsSlice;
const profileReducer = profileSlice;
const userReducer = userSlice;
const themeReducer = themeSlice;

const rootReducer = combineReducers({
  evaluateExpressionHistory: evaluateExpressionReducer,
  quizState: quizReducer,
  sidebarState: sidebarReducer,
  userGoalsState: userGoalsReducer,
  profileState: profileReducer,
  userState: userReducer,
  themeState: themeReducer,
});

export type RootState = State;

export default rootReducer;
