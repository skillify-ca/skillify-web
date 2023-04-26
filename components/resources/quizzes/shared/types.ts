//Types for quiz data structure
export type QuizData = {
  title: string;
  body: string;
  questions: QuizQuestion[];
};

export type QuizQuestion = {
  title: string;
  body: string;
  options: QuizOption[];
};

export type QuizOption = {
  name: string;
  result?: string;
  weight?: number;
};

//Types for ViewState
export type QuizViewState = {
  title: string;
  body: string;
  questions: QuizQuestionViewState[];
  currentQuestion: number;
  progress: number;
};

export type QuizQuestionViewState = {
  title: string;
  body: string;
  maxSelections?: number;
  options: QuizOptionViewState[];
};

export type QuizOptionViewState = QuizOption & {
  isSelected: boolean;
};
