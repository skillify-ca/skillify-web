import { NextApiRequest, NextApiResponse } from "next";
import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";

export const quizData: QuizViewState = {
  title: "Career in Tech Personality Quiz?",
  body: "Take this free quiz to find out what coding language you should learn first.",
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
          isSelected: false,
        },
        {
          name: "Cybersecurity",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Digital Media",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Design ",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "E-commerce",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Entertainment",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Fashion",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Finance",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Healthcare",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Real Estate",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Technology",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Video Games",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Science",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Not Sure Yet",
          result: "Software Engineer",
          weight: 0,
          isSelected: false,
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
          isSelected: false,
        },
        {
          name: "Drawing",
          result: "UX/UI Designer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Design",
          result: "UX/UI Designer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Writing",
          result: "Digital Marketer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Leading a team",
          result: "Product Manager",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Organization",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Public speaking",
          result: "Product Manager",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Time Management",
          result: "Product Manager",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Math",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Analyzing data",
          result: "Data Scientist",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Critical thinking",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Planning",
          result: "Product Manager",
          weight: 1,
          isSelected: false,
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
          result: "Product Manager",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Analyze social media campaigns",
          result: "Digital Marketer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Find ways to automate processes",
          result: "DevOps Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Find trends in data",
          result: "Data Scientist",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Study how people use apps",
          result: "UX Researcher",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Build a company's brand",
          result: "Digital Marketer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Lead a project from start to finish",
          result: "Product Manager",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Spot patterns in data",
          result: "Data Scientist",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Write code to solve problems",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Review financial data and forecasts",
          result: "Data Scientist",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Shape how companies store data",
          result: "Data Scientist",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Design the way an app looks",
          result: "UX/UI Designer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Optimize search engine results",
          result: "Digital Marketer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Shape the user's app interactions",
          result: "UX/UI Designer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Use data to solve problems",
          result: "Data Scientist",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Build an app or product",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
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
    src: "/images/career-quiz/uxui-designer.png",
    alt: "UX/UI Designer",
    career: "UX/UI Designer",
  },
  "UX Researcher": {
    body: "The first coding careers you should learn are...",
    src: "/images/career-quiz/ux-researcher.png",
    alt: "UX Researcher",
    career: "UX Researcher",
  },
  "DevOps Engineer": {
    body: "The first coding careers you should learn are...",
    src: "/images/career-quiz/devops-engineer.png",
    alt: "DevOps Engineer",
    career: "DevOps Engineer",
  },
  "Digital Marketer": {
    body: "The first coding careers you should learn are...",
    src: "/images/career-quiz/digital-marketer.png",
    alt: "Digital Marketer",
    career: "Digital Marketer",
  },
  "Data Scientist": {
    body: "The first coding careers you should learn are...",
    src: "/images/career-quiz/data-scientist.png",
    alt: "Data Scientist",
    career: "Data Scientist",
  },
  "Quality Assurance": {
    body: "The first coding careers you should learn are...",
    src: "/images/career-quiz/quality-assurance.png",
    alt: "Quality Assurance",
    career: "Quality Assurance",
  },
};

// Define the route handler function
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Add router to careerQuiz quiz data
  return res.status(200).json(quizData);
};
