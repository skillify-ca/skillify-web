import { combineReducers, Reducer } from "@reduxjs/toolkit";
import courseSlice, { CourseState } from "./courseSlice";
import evaluateExpressionSlice, {
  EvaluateExpressionState,
} from "./evaluateExpressionSlice";
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
  courseState: CourseState;
};
const evaluateExpressionReducer = evaluateExpressionSlice;
const quizReducer = quizSlice.reducer;
const sidebarReducer = sidebarSlice.reducer;
const skillRatingsReducer = skillRatingsSlice;
const userGoalsReducer = userGoalsSlice;
const courseReducer = courseSlice;

const rootReducer = combineReducers({
  evaluateExpressionHistory: evaluateExpressionReducer,
  quizState: quizReducer,
  sidebarState: sidebarReducer,
  skillRatingsState: skillRatingsReducer,
  userGoalsState: userGoalsReducer,
  courseState: courseReducer,
});

export type RootState = State;

export default rootReducer;
