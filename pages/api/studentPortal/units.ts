export interface UnitNode {
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
}
export interface Unit {
  title: string;
  nodes: UnitNode[];
}

// TOOD: fetch this from the backend instead
const units: Unit[] = [
  {
    title: "Introduction",
    nodes: [
      {
        title: "Lesson",
        description: "Intro to Skillify",
        completed: true,
        locked: false,
      },
    ],
  },
  {
    title: "HTML",
    nodes: [
      {
        title: "Lesson",
        description: "HTML Basics",
        completed: true,
        locked: false,
      },
      {
        title: "Quiz",
        description: "HTML Basics",
        completed: false,
        locked: false,
      },
      {
        title: "Assignment",
        description: "Build an HTML Blog",
        completed: false,
        locked: true,
      },
    ],
  },
  {
    title: "CSS",
    nodes: [
      {
        title: "Lesson",
        description: "CSS Basics",
        completed: false,
        locked: true,
      },
      {
        title: "Quiz",
        description: "CSS Basics",
        completed: false,
        locked: true,
      },
      {
        title: "Assignment",
        description: "Style an HTML Blog",
        completed: false,
        locked: true,
      },
    ],
  },
  {
    title: "JavaScript",
    nodes: [
      {
        title: "Lesson 1",
        description: "Variables",
        completed: false,
        locked: true,
      },
      {
        title: "Lesson 2",
        description: "Functions",
        completed: false,
        locked: true,
      },
      {
        title: "Lesson 3",
        description: "Conditionals",
        completed: false,
        locked: true,
      },
      {
        title: "Quiz 1",
        description: "Variables, Functions and Conditionals",
        completed: false,
        locked: true,
      },
      {
        title: "Lesson 4",
        description: "Arrays",
        completed: false,
        locked: true,
      },
      {
        title: "Lesson 5",
        description: "Loops",
        completed: false,
        locked: true,
      },
      {
        title: "Lesson 6",
        description: "Objects",
        completed: false,
        locked: true,
      },
      {
        title: "Lesson 7",
        description: "Iterators",
        completed: false,
        locked: true,
      },
      {
        title: "Quiz",
        description: "Arrays, Loops, Objects, Iterators",
        completed: false,
        locked: true,
      },
      {
        title: "Assignment",
        description: "Build a server application",
        completed: false,
        locked: true,
      },
    ],
  },
  {
    title: "React",
    nodes: [
      {
        title: "Lesson 1",
        description: "Components",
        completed: false,
        locked: true,
      },
      {
        title: "Lesson 2",
        description: "Props",
        completed: false,
        locked: true,
      },
      {
        title: "Quiz 1",
        description: "Components and Props",
        completed: false,
        locked: true,
      },
      {
        title: "Lesson 3",
        description: "Hooks - useState",
        completed: false,
        locked: true,
      },

      {
        title: "Lesson 4",
        description: "Hooks - useEffect",
        completed: false,
        locked: true,
      },
      {
        title: "Lesson 5",
        description: "Conditional Rendering",
        completed: false,
        locked: true,
      },
      {
        title: "Lesson 6",
        description: "Handling Events",
        completed: false,
        locked: true,
      },
      {
        title: "Assignment 1",
        description: "Building a tic tac toe game",
        completed: false,
        locked: true,
      },
      {
        title: "Assignment 2",
        description: "Build a K-12 Math Quiz",
        completed: false,
        locked: true,
      },
      {
        title: "Assignment 3",
        description: "Build a tutorial to a Leetcode question",
        completed: false,
        locked: true,
      },
      {
        title: "Assignment 4",
        description: "Capstone Project",
        completed: false,
        locked: true,
      },
    ],
  },
  {
    title: "Fullstack",
    nodes: [
      {
        title: "Lesson 1",
        description: "Intro to Databases",
        completed: false,
        locked: true,
      },
    ],
  },
];

export default units;
