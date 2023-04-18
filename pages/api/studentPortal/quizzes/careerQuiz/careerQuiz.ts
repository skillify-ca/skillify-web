import { QuizData } from "../../../../../components/resources/quizzes/shared/types";

export const quizData: QuizData = {
  title: "Career in Tech Personality Quiz?",
  body: "Take this free quiz to find out what coding career you should learn first.",
  questions: [
    {
      title: "What industries are you interested in working?",
      body: "Select 1-3 choices.",
      maxSelections: 3,
      options: [
        {
          name: "Advertising",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Cybersecurity",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Digital Media",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Design",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "E-commerce",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Entertainment",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Fashion",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Finance",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Healthcare",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Real Estate",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Technology",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Video Games",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Science",
          result: "Software Engineer",
          weight: 0,
        },
        {
          name: "Not Sure Yet",
          result: "Software Engineer",
          weight: 0,
        },
      ],
    },
    {
      title: "What are your strongest skills?",
      body: "Select 1-3 choices.",
      maxSelections: 3,

      options: [
        {
          name: "Writing code",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Drawing",
          result: "UX/UI Designer",
          weight: 1,
        },
        {
          name: "Design",
          result: "UX/UI Designer",
          weight: 1,
        },
        {
          name: "Writing",
          result: "UX/UI Designer",
          weight: 1,
        },
        {
          name: "Leading a team",
          result: "Product Manager",
          weight: 1,
        },
        {
          name: "Organization",
          result: "Product Manager",
          weight: 1,
        },
        {
          name: "Public speaking",
          result: "Marketing",
          weight: 1,
        },
        {
          name: "Time Management",
          result: "Product Manager",
          weight: 1,
        },
        { name: "Math", result: "Data Analyst", weight: 1 },
        {
          name: "Analyzing data",
          result: "Data Analyst",
          weight: 1,
        },
        {
          name: "Critical thinking",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Planning",
          result: "Product Manager",
          weight: 1,
        },
      ],
    },

    {
      title: "What tasks would you prefer at work?",
      body: "Select 1-3 choices.",
      maxSelections: 3,
      options: [
        {
          name: "Coordinate the launch of a product",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Analyze social media campaigns",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Find ways to automate processes",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Find trends in data",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Study how people use apps",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Build a company's brand",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Lead a project from start to finish",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Spot patterns in data",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Write code to solve problems",
          result: "Software Engineer",
          weight: 1,
        },
      ],
    },
  ],
};
export type QuizResultData = {
  body: string;
  src: string;
  alt: string;
  career: string;
};

export const quizResultsData: { [key: string]: QuizResultData } = {
  "Software Engineer": {
    body: "The first coding career you should learn is...",
    src: "/images/career-quiz/software-engineer.png",
    alt: "Software Engineer",
    career: "Software Engineer",
  },
  "Product Manager": {
    body: "The first coding career you should learn is...",
    src: "/images/career-quiz/product-manager.png",
    alt: "Product Manager",
    career: "Product Manager",
  },
  "UX/UI Designer": {
    body: "The first coding careers you should learn are...",
    src: "/images/career-quiz/designer.png",
    alt: "UX/UI Designer",
    career: "UX/UI Designer",
  },
};
