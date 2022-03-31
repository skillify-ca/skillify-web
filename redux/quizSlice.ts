import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type Question = {
  text: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: string;
};

export interface QuizState {
  questions: Question[];
  currentQuestion: number;
  shouldShowCorrectGrade: boolean;
  shouldShowIncorrectGrade: boolean;
  selectedOption?: string;
  isGraded: boolean;
  showSessionEnd: boolean;
}

const initialState: QuizState = {
  questions: [],
  currentQuestion: 0,
  shouldShowCorrectGrade: false,
  shouldShowIncorrectGrade: false,
  isGraded: false,
  showSessionEnd: false,
};

export const quizSlice: Slice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizQuestions: (state: QuizState, action: PayloadAction<Question[]>) => {

      if (action.type == "quiz/setQuizQuestions") {

        state.questions = action.payload;
      }
    },
    selectOptionRequested: (state, action: PayloadAction<string>) => {
      if (action.type === "quiz/selectOptionRequested") {
        state.selectedOption = action.payload;
      }
    },
    continueRequested: (state, action) => {
      if (action.type == "quiz/continueRequested") {
        if (state.isGraded) {
          state.isGraded = false;
          if (state.shouldShowCorrectGrade) {
            state.shouldShowCorrectGrade = false;
          }
          if (state.shouldShowIncorrectGrade) {
            state.shouldShowIncorrectGrade = false;
          }
          if (state.currentQuestion === state.questions.length - 1) {
            state.showSessionEnd = true;
          } else {
            state.currentQuestion = state.currentQuestion + 1;
          }
          state.selectedOption = undefined;
        } else {
          state.isGraded = true;
          if (
            state.selectedOption ===
            state.questions[state.currentQuestion].answer
          ) {
            state.shouldShowCorrectGrade = true;
          } else {
            state.shouldShowIncorrectGrade = true;
          }
        }
      }
    },
  },
});

export const { setQuizQuestions, selectOptionRequested, continueRequested } =
  quizSlice.actions;

export const quizSelector = (state: RootState) => state.quizState;
