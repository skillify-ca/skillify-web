import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { bakersRackBSlice, BakersRackBState } from "./bakerBSlice";
import { diagnosticSlice, DiagnosticState } from "./diagnosticSlice";
import { warGameSlice, WarGameState } from "./warGameSlice";
import {
  practiceTrackerSlice,
  PracticeTrackerState,
} from "./studentProfileSlice";
import {
  assignmentSessionSlice,
  assignmentSessionState,
} from "./assignmentSession";
import {
  evaluateExpressionSlice,
  EvaluateExpressionState,
} from "./evaluateExpressionSlice";
import { quizSlice, QuizState } from "./quizSlice";
import { lessonSlice, LessonState } from "./lessonSlice";
import { sidebarSlice, SidebarState } from "./sidebarSlice";
import { skillRatingsSlice, SkillRatingsState } from "./skillRatingsSlice";
import { longestStreakSlice, LongestStreakState } from "./longestStreakSlice";
import {
  multiplicationConnectSlice,
  MultiplicationConnectState,
} from "./multiplicationConnectSlice";
import { UserGoalsState, userGoalsSlice } from "./userGoalsSlice";
import { courseSlice, CourseState } from "./courseSlice";


type State = {
  [x: string]: any;
  diagnostic: DiagnosticState;
  practiceTracker: PracticeTrackerState;
  bakersRackB: BakersRackBState;
  assignmentSession: assignmentSessionState;
  warGame: WarGameState;
  evaluateExpressionHistory: EvaluateExpressionState[];
  quizState: QuizState;
  lessonState: LessonState;
  sidebarState: SidebarState;
  skillRatingsState: SkillRatingsState;
  longestStreakState: LongestStreakState;
  multiplicationConnect: MultiplicationConnectState;
  userGoalsState: UserGoalsState;
  courseState: CourseState;
};
const diagnosticReducer: Reducer = diagnosticSlice.reducer;
const practiceTrackerReducer = practiceTrackerSlice.reducer;
const bakersRackBReducer = bakersRackBSlice.reducer;
const assignmentSessionReducer = assignmentSessionSlice.reducer;
const warGameReducer = warGameSlice.reducer;
const evaluateExpressionReducer = evaluateExpressionSlice.reducer;
const quizReducer = quizSlice.reducer;
const lessonReducer = lessonSlice.reducer;
const sidebarReducer = sidebarSlice.reducer;
const skillRatingsReducer = skillRatingsSlice.reducer;
const longestStreakReducer = longestStreakSlice.reducer;
const multiplicationConnectReducer = multiplicationConnectSlice.reducer;
const userGoalsReducer = userGoalsSlice.reducer;
const courseReducer = courseSlice.reducer;

const rootReducer = combineReducers({
  diagnostic: diagnosticReducer,
  practiceTracker: practiceTrackerReducer,
  bakersBRack: bakersRackBReducer,
  assignmentSession: assignmentSessionReducer,
  warGame: warGameReducer,
  evaluateExpressionHistory: evaluateExpressionReducer,
  quizState: quizReducer,
  lessonState: lessonReducer,
  sidebarState: sidebarReducer,
  skillRatingsState: skillRatingsReducer,
  longestStreakState: longestStreakReducer,
  multiplicationConnect: multiplicationConnectReducer,
  userGoalsState: userGoalsReducer,
  courseState: courseReducer,
});

export type RootState = State;

export default rootReducer;
