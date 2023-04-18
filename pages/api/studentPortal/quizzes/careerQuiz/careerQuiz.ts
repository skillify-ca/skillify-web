import { QuizData } from "../../../../../components/resources/quizzes/shared/types";

export const quizData: QuizData = {
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
          weight: 1,
        },
        {
          name: "Cybersecurity",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Digital Media",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Design",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "E-commerce",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Entertainment",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Fashion",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Finance",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Healthcare",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Real Estate",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Technology",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Video Games",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Science",
          result: "Software Engineer",
          weight: 1,
        },
        {
          name: "Not Sure Yet",
          result: "Software Engineer",
          weight: 1,
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
          result: "Content Creator",
          weight: 1,
        },
        {
          name: "Leading a team",
          result: "Product Manager",
          weight: 1,
        },
        {
          name: "Organization",
          result: "Project Manager",
          weight: 1,
        },
        {
          name: "Public speaking",
          result: "Marketing",
          weight: 1,
        },
        {
          name: "Time Management",
          result: "Project Manager",
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
          result: "Project Manager",
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
type QuizResultData = {
  body: string;
  src: string;
  alt: string;
  language: string;
};

export const quizResultsData: { [key: string]: QuizResultData } = {
  JavaScript: {
    body: "The first coding language you should learn is...",
    src: "/images/quiz/languages-quiz/javascript.png",
    alt: "JavaScript",
    language: "JavaScript",
  },
  Python: {
    body: "The first coding language you should learn is...",
    src: "/images/quiz/languages-quiz/python.png",
    alt: "Python",
    language: "Python",
  },
  "HTML/CSS": {
    body: "The first coding languages you should learn are...",
    src: "/images/quiz/languages-quiz/htmlcss.png",
    alt: "HTML/CSS",
    language: "HTML/CSS",
  },
};