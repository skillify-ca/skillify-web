import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

type Question = {
  text: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: string;
  anyImage: boolean;
  image: string;
};

const q1 = {
  text: "Which element is used to display text?",
  A: "<a>",
  B: "<img>",
  C: "<p>",
  D: "<div>",
  answer: "C",
  anyImage: false,
  image: "",
};
const q2 = {
  text: "Which elements are used to display lists?",
  A: "<ul> and <ol>",
  B: "<ul> and <li>",
  C: "<ol> and <li>",
  D: "None of the above",
  answer: "A",
  anyImage: false,
  image: "",
};
const q3 = {
  text: "What is the difference between <h1> and <h2> tags?",
  A: "<h1> tags are ranked higher in significance than <h2> and thus are slightly larger",
  B: "<h2> is larger than <h1>",
  C: "There is no difference in significance",
  D: "None of the above",
  answer: "A",
  anyImage: false,
  image: "",
};
const q4 = {
  text: "What is the correct way to implement tags on a HTML page?",
  A: '<img from="skillify.jpg"',
  B: '<img src="skillify.jpg">',
  C: '<image src="skillify.jpg">',
  D: "All of the above",
  answer: "B",
  anyImage: false,
  image: "",
};
const q5 = {
  text: "How can we implement square points in an unordered list?",
  A: '<ol style="list-style-type:square;">',
  B: '<ul type="box">',
  C: '<ul style="list-style-type:square;">',
  D: '<ol type="box">',
  answer: "C",
  anyImage: false,
  image: "",
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
  questions: [q1, q2, q3, q4, q5],
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
    setQuizQuestions: (state: QuizState, action: PayloadAction<QuizState>) => {
      if (action.type == "quiz/setQuestions") {
        state.questions = [q1, q2, q3, q4, q5];
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

export const {
  setQuizQuestions,
  selectOptionRequested,
  submitGuess,
  continueRequested,
} = quizSlice.actions;

export const quizSelector = (state: RootState) => state.quizState;
