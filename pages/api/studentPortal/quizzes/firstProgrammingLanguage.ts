import { QuizData } from "../../../../components/resources/quizzes/shared/types";

export const quizData: QuizData = {
  title: "What Coding Language Should I Learn First?",
  body:
    "Take this free quiz to find out what coding language you should learn first.",
  questions: [
    {
      title: "Why do you want to learn coding?",
      body: "Select all that apply.",
      options: [
        { name: "Learn an in-demand skill" },
        { name: "Work in tech" },
        { name: "Build programs for fun" },
        { name: "I run a startup" },
        { name: "Become a professional developer" },
        { name: "Communicate better with technical coworkers" },
        { name: "Start a side hustle" },
      ],
    },
    {
      title: "What field of work are you interested in?",
      body: "Select 1-3 choices.",
      maxSelections: 3,
      options: [
        { name: "Front end development", result: "JavaScript", weight: 1 },
        { name: "Back end development", result: "JavaScript", weight: 1 },
        { name: "Game development", result: "JavaScript", weight: 1 },
        { name: "Mobile development", result: "JavaScript", weight: 1 },
        { name: "Data analytics", result: "Python", weight: 1 },
        { name: "Product management", result: "JavaScript", weight: 1 },
        { name: "Digital marketing", result: "JavaScript", weight: 1 },
        { name: "UX/UI design", result: "JavaScript", weight: 1 },
        {
          name: "I don't know / Not sure yet",
          result: "JavaScript",
          weight: 1,
        },
      ],
    },
    {
      title: "What are you interested in building?",
      body: "Select all that apply.",
      options: [
        { name: "Websites", result: "JavaScript", weight: 1 },
        { name: "Storefront", result: "HTML/CSS", weight: 1 },
        { name: "Mobile apps", result: "JavaScript", weight: 1 },
        { name: "Games", result: "JavaScript", weight: 1 },
        { name: "Email", result: "HTML/CSS", weight: 1 },
        {
          name: "Tools to automate your life",
          result: "JavaScript",
          weight: 1,
        },
        {
          name: "I don't know / Not sure yet",
          result: "JavaScript",
          weight: 1,
        },
      ],
    },
  ],
};
