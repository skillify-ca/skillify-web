export interface UnitNode {
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  link: string;
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
        link:"https://www.skillify.ca/course/coding/unit/HTML/1"
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
        link:"https://www.skillify.ca/course/coding/unit/HTML/1"
      },
      {
        title: "Quiz",
        description: "HTML Basics",
        completed: false,
        locked: false,
        link:"https://www.skillify.ca/course/coding/unit/HTML/1"
      },
      {
        title: "Assignment",
        description: "Build an HTML Blog",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/HTML/1"
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
        link:"https://www.skillify.ca/course/coding/unit/CSS/1"
      },
      {
        title: "Quiz",
        description: "CSS Basics",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/CSS/1"
      },
      {
        title: "Assignment",
        description: "Style an HTML Blog",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/CSS/1"
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
        link:"https://www.skillify.ca/course/coding/unit/Javascript/1"
      },
      {
        title: "Lesson 2",
        description: "Functions",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/Javascript/1"
      },
      {
        title: "Lesson 3",
        description: "Conditionals",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/Javascript/1"
      {
        title: "Quiz 1",
        description: "Variables, Functions and Conditionals",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/Javascript/1"
      },
      {
        title: "Lesson 4",
        description: "Arrays",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/Javascript/1"
      },
      {
        title: "Lesson 5",
        description: "Loops",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/Javascript/1"
      },
      {
        title: "Lesson 6",
        description: "Objects",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/Javascript/1"
      },
      {
        title: "Lesson 7",
        description: "Iterators",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/Javascript/1"
      },
      {
        title: "Quiz",
        description: "Arrays, Loops, Objects, Iterators",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/Javascript/1"
      },
      {
        title: "Assignment",
        description: "Build a server application",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/Javascript/1"
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
        link:"https://www.skillify.ca/course/coding/unit/React/1"
      },
      {
        title: "Lesson 2",
        description: "Props",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/React/1"
      },
      {
        title: "Quiz 1",
        description: "Components and Props",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/React/1"
      },
      {
        title: "Lesson 3",
        description: "Hooks - useState",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/React/1"
      },

      {
        title: "Lesson 4",
        description: "Hooks - useEffect",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/React/1"
      },
      {
        title: "Lesson 5",
        description: "Conditional Rendering",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/React/1"
      },
      {
        title: "Lesson 6",
        description: "Handling Events",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/React/1"
      },
      {
        title: "Assignment 1",
        description: "Building a tic tac toe game",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/React/1"
      },
      {
        title: "Assignment 2",
        description: "Build a K-12 Math Quiz",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/React/1"
      },
      {
        title: "Assignment 3",
        description: "Build a tutorial to a Leetcode question",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/React/1"
      },
      {
        title: "Assignment 4",
        description: "Capstone Project",
        completed: false,
        locked: true,
        link:"https://www.skillify.ca/course/coding/unit/React/1"
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
        link:"",
      },
    ],
  },
];

export default units;
