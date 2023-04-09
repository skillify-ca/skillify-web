export type QuizQuestion = {
    title: string;
    body: string;
    options: QuizOption[];
    maxSelections?: number;
  };
  
  export type QuizOption = {
    name: string;
    result?: string;
    weight?: number;
  };
  
  export type QuizData = {
    title: string;
    body: string;
    questions: QuizQuestion[];
  };