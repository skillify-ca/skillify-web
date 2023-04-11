import { QuizViewState } from "../../../../components/resources/quizzes/shared/SkillSelections";

export const quizData: QuizViewState = {
  title: "Career in Tech Personality Quiz?",
  body: "Take this free quiz to find out what coding language you should learn first.",
  questions: [
    {
      title: "What industries are you interested in working?",
      body: "Select 1-3 choices.",
      maxSelections: 3,

      progress: 35,
      options: [
        {
          name: "Advertising",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Cybersecurity",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Digital Media",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Design",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "E-commerce",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Entertainment",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Fashion",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Finance",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Healthcare",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Real Estate",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Technology",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Video Games",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Science",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Not Sure Yet",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
      ],
    },
    {
      title: "What are your strongest skills?",
      body: "Select 1-3 choices.",
      maxSelections: 3,
      progress: 60,

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
          result: "Content Creator",
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
          result: "Project Manager",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Public speaking",
          result: "Marketing",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Time Management",
          result: "Project Manager",
          weight: 1,
          isSelected: false,
        },
        { name: "Math", result: "Data Analyst", weight: 1, isSelected: false },
        {
          name: "Analyzing data",
          result: "Data Analyst",
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
          result: "Project Manager",
          weight: 1,
          isSelected: false,
        },
      ],
    },

    {
      title: "What tasks would you prefer at work?",
      body: "Select 1-3 choices.",
      progress: 85,
      maxSelections: 3,
      options: [
        {
          name: "Coordinate the launch of a product",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Analyze social media campaigns",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Find ways to automate processes",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Find trends in data",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Study how people use apps",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Build a company's brand",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Lead a project from start to finish",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Spot patterns in data",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
        {
          name: "Write code to solve problems",
          result: "Software Engineer",
          weight: 1,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
};
