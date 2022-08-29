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
});

export type RootState = State;

export default rootReducer;
