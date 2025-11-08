export type UnitNode =
  | {
      title: string;
      description: string;
      link: string;
      locked?: boolean;
      type: "lesson" | "quiz" | "assignment";
    }
  | {
      type: "grayedOut";
    }
  | {
      type: "freemiumMessage";
      link: string;
    };
export interface Unit {
  title: string;
  nodes: UnitNode[];
}

type Course = {
  title: string;
  units: Unit[];
};

// Database Layer
export const javascriptUnit: Unit = {
  title: "JavaScript",
  nodes: [
    {
      type: "lesson",
      title: "JavaScript Introduction",
      description: "",
      link: "js-introduction",
    },
    {
          type: "lesson",
          title: "JavaScript Variables",
          description: "",
          link: "js-variables",
        },
        {
          type: "lesson",
          title: "JavaScript Functions",
          description: "",
          link: "js-functions",
        },
        {
          type: "lesson",
          title: "JavaScript Conditionals",
          description: "",
          link: "js-conditionals",
        },
        {
          type: "quiz",
          title: "JavaScript Quiz 1",
          description: "",
          link: "js-quiz-1",
        },
        {
          type: "lesson",
          title: "JavaScript Arrays",
          description: "",
          link: "js-arrays",
        },
        {
          type: "lesson",
          title: "JavaScript Loops",
          description: "",
          link: "js-loops",
        },
        {
          type: "lesson",
          title: "JavaScript Objects",
          description: "",
          link: "js-objects",
        },
        {
          type: "lesson",
          title: "JavaScript Iterators",
          description: "",
          link: "js-iterators",
        },
        {
          type: "quiz",
          title: "JavaScript Quiz 2",
          description: "",
          link: "js-quiz-2",
        },
        {
          type: "assignment",
          title: "Pokemon Assignment",
          description: "",
          link: "js-pokemon-assignment",
        },
        {
          type: "assignment",
          title: "NBA Assignment",
          description: "",
          link: "js-nba-assignment",
        },
        {
          type: "lesson",
          title: "JavaScript Summary",
          description: "",
          link: "js-summary",
        },
        {
          type: "assignment",
          title: "Build a Portfolio Website",
          description: "",
          link: "js-portfolio-assignment",
        },
  ],
};

export const htmlUnit: Unit = {
  title: "HTML",
  nodes: [
    {
      type: "lesson",
      title: "HTML Lesson",
      description: "",
      link: "html-introduction",
    },
    {
      type: "quiz",
      title: "HTML Quiz",
      description: "",
      link: "html-quiz-1",
    },
    {
      type: "assignment",
      title: "HTML Assignment",
      description: "",
      link: "html-assignment-1",
    },
  ],
};

export const cssUnit: Unit = {
  title: "CSS",
  nodes: [
    {
      type: "lesson",
      title: "CSS Lesson",
      description: "",
      link: "css-introduction",
    },
    {
      type: "lesson",
      title: "CSS Grid",
      description: "",
      link: "css-grid",
    },
    {
      type: "lesson",
      title: "CSS Flexbox",
      description: "",
      link: "css-flexbox",
    },
    {
      type: "quiz",
      title: "CSS Quiz",
      description: "",
      link: "css-quiz",
    },
    {
      type: "assignment",
      title: "CSS Assignment",
      description: "",
      link: "css-assignment",
    },
  ],
};

export const webIntroUnit: Unit = {
  title: "Introduction",
  nodes: [
    {
      title: "Lesson",
      description: "Intro to Web Development",
      type: "lesson",
      link: "introduction",
    },
  ],
};

export const githubUnit: Unit = {
  title: "Github",
  nodes: [
    {
      title: "Lesson",
      description: "Deploying a Project on Github & Vercel",
      link: "github",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Vercel Deep Dive",
      link: "vercel",
      type: "lesson",
    },
  ],
};

export const tailwindUnit: Unit = {
  title: "TailwindCSS",
  nodes: [
    {
      title: "Lesson",
      description: "TailwindCSS - Grid & Flexbox",

      link: "tailwindcss-gridflex",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "TailwindCSS - General Styling",

      link: "tailwindcss-colourstyling",
      type: "lesson",
    },
  ],
};

export const reactUnit: Unit = {
  title: "React",
  nodes: [
    {
      title: "Lesson",
      description: "Components",

      link: "components-lesson",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Props",
      link: "props-lesson",
      type: "lesson",
    },
    {
      title: "Assignment 2",
      description: "Components and Props",
      link: "componentsAssignment",
      type: "assignment",
    },

    {
      title: "Lesson",
      description: "Hooks - useState",
      link: "useState-lesson",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Hooks - useEffect",
      link: "useEffect-lesson",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Conditional Rendering",
      link: "conditionalRendering-lesson",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Handling Events",
      link: "handlingEvents-lesson",
      type: "lesson",
    },
    {
      title: "Assignment 3",
      description: "Building a tic tac toe game",
      link: "ticTacToe-assignment",
      type: "lesson",
    },
    {
      title: "Assignment 4",
      description: "Build a K-12 Math Quiz",
      link: "mathQuiz-assignment",
      type: "lesson",
    },
    {
      title: "Assignment 5",
      description: "Build a Pokedex App",
      link: "pokedex-app",
      type: "lesson",
    },
  ],
};

export const backendUnit: Unit = {
  title: "Backend",
  nodes: [
    {
      title: "Lesson",
      description: "Intro to Databases",
      type: "lesson",

      link: "react/React/1",
    },
    {
      title: "Lesson",
      description: "Database Reads",
      type: "lesson",

      link: "react/React/1",
    },
    {
      title: "Lesson",
      description: "Database Writes",
      type: "lesson",

      link: "react/React/1",
    },
    {
      title: "Assignment 6",
      description: "Capstone Project",

      link: "react/React/1",
      type: "assignment",
    },
  ],
};

export const projectUnit: Unit = {
  title: "Projects",
  nodes: [
    {
      title: "Assignment 1",
      description: "Yelp Clone",
      type: "assignment",
      link: "yelp-assignment",
    },
    {
      title: "Assignment 2",
      description: "Netflix Clone",
      type: "assignment",
      link: "netflix-assignment",
    },
    {
      title: "Assignment 3",
      description: "Instagram Clone",
      type: "assignment",
      link: "instagram-assignment",
    },
    {
      title: "Assignment 4",
      description: "Spotify Clone",
      type: "assignment",
      link: "spotify-assignment",
    },
    {
      title: "Assignment 5",
      description: "Duolingo Clone",
      type: "assignment",
      link: "duolingo-assignment",
    },
  ],
};

export const reactUnits: Unit[] = [
  webIntroUnit,
  githubUnit,
  tailwindUnit,
  reactUnit,
  projectUnit,
  // backendUnit,
];

export const interviewBasicUnits: Unit[] = [
  {
    title: "Introduction",
    nodes: [
      {
        title: "Lesson 1",
        description: "Importance of Interview Preparation",
        type: "lesson",
        link: "courses/interviewPrep/lesson1",
      },
      {
        title: "Lesson 2",
        description: "Stages of the Interview",
        type: "lesson",
        link: "courses/interviewPrep/lesson2",
      },
      {
        title: "Lesson 3",
        description: "Employer's Expectations",
        type: "lesson",
        link: "courses/interviewPrep/lesson3",
      },
      {
        title: "Lesson 4",
        description: "Tools: Software Dictionary",
        type: "lesson",
        link: "courses/interviewPrep/lesson4",
      },
    ],
  },
  {
    title: "Practice",
    nodes: [
      {
        title: "Lesson 5",
        description: "How should I introduce myself?",
        type: "lesson",
        link: "courses/interviewPrep/lesson5",
      },
      {
        title: "Lesson 6",
        description: "Try Yourself: Behavioral Questions",
        type: "lesson",
        link: "courses/interviewPrep/lesson6",
      },
      {
        title: "Lesson 7",
        description: "Try Yourself: Technical Questions",
        type: "lesson",
        link: "courses/interviewPrep/lesson7",
      },
      {
        title: "Lesson 8",
        description: "Try Yourself: Hands-On Coding Questions",
        type: "lesson",
        link: "courses/interviewPrep/lesson8",
      },
    ],
  },
  {
    title: "Mock Interview",
    nodes: [
      {
        title: "Assignment",
        description: "Real Interview Simulation",
        type: "assignment",
        link: "courses/interviewPrep/assignment1",
      },
      {
        title: "Lesson 9",
        description: "How do I know if I'm ready?",
        type: "lesson",
        link: "courses/interviewPrep/lesson9",
      },
    ],
  },
];

export const interviewUnits: Unit[] = [
  {
    title: "Data Structures",
    nodes: [
      {
        title: "Lesson 1",
        type: "lesson",
        description: "Arrays",

        link: "",
      },
      {
        title: "Lesson 2",
        description: "Strings",

        type: "lesson",

        link: "",
      },
      {
        title: "Lesson 3",
        description: "Maps",

        type: "lesson",
        link: "",
      },
      {
        title: "Lesson 4",
        description: "Linked Lists",
        type: "lesson",

        link: "",
      },
      {
        title: "Lesson 5",
        type: "lesson",
        description: "Trees",

        link: "",
      },
      {
        title: "Lesson 6",
        description: "Graphs",
        type: "lesson",

        link: "",
      },
      {
        type: "lesson",
        title: "Lesson 7",
        description: "Stacks",

        link: "",
      },
      {
        title: "Lesson 8",
        type: "lesson",
        description: "Queues",

        link: "",
      },
      {
        title: "Lesson 9",
        description: "Heaps",

        type: "lesson",

        link: "",
      },
    ],
  },
  {
    title: "Algorithms 1",
    nodes: [
      {
        title: "Lesson 1",
        description: "Sliding Window",
        type: "lesson",

        link: "",
      },
      {
        title: "Lesson 2",
        description: "Two Pointers",

        type: "lesson",
        link: "",
      },
      {
        title: "Lesson 3",
        description: "Fast and Slow Pointers",

        link: "",
        type: "lesson",
      },

      {
        title: "Lesson 4",
        description: "Binary Search",

        type: "lesson",
        link: "",
      },
      {
        title: "Lesson 5",
        description: "Greedy",

        type: "lesson",
        link: "",
      },

      {
        title: "Lesson 6",
        description: "In-place reversal of linked list",

        type: "lesson",

        link: "",
      },
    ],
  },
  {
    title: "Algorithms 2",
    nodes: [
      {
        title: "Lesson 1",
        description: "Tree BFS",

        link: "",
        type: "lesson",
      },
      {
        title: "Lesson 2",
        description: "Tree DFS",
        type: "lesson",

        link: "",
      },
      {
        title: "Lesson 3",
        type: "lesson",
        description: "Dynamic Programming",

        link: "",
      },
      {
        title: "Lesson 4",
        type: "lesson",
        description: "Backtracking",

        link: "",
      },
    ],
  },
  {
    title: "Algorithms 3",
    nodes: [
      {
        title: "Lesson 1",
        description: "Intervals",
        type: "lesson",

        link: "",
      },
      {
        title: "Lesson 2",
        type: "lesson",
        description: "Toplogical Sort",

        link: "",
      },
      {
        title: "Lesson 3",
        type: "lesson",
        description: "Union Find",

        link: "",
      },
      {
        title: "Lesson 4",
        description: "Cyclic Sort",
        type: "lesson",

        link: "",
      },
      {
        title: "Lesson 5",
        description: "Two Heaps",
        type: "lesson",

        link: "",
      },
      {
        title: "Lesson 6",
        description: "Subsets",

        type: "lesson",
        link: "",
      },
      {
        title: "Lesson 7",
        description: "Top K Elements",
        type: "lesson",

        link: "",
      },
      {
        title: "Lesson 8",
        type: "lesson",
        description: "K-way Merge",

        link: "",
      },
    ],
  },
];

export const androidUnits = [
  {
    title: "Android",
    nodes: [
      {
        title: "Lesson 1",
        type: "lesson",
        description: "Activities",

        link: "",
      },
      {
        title: "Lesson 2",
        description: "Fragments",

        link: "",
        type: "lesson",
      },
      {
        title: "Lesson 3",
        description: "Lists and RecyclerViews",

        link: "",
        type: "lesson",
      },
      {
        title: "Lesson 4",
        description: "Strings and Resources",

        link: "",
        type: "lesson",
      },
      {
        title: "Lesson 5",
        description: "Retrofit and Networking",

        link: "",
        type: "lesson",
      },
      {
        title: "Lesson 6",
        description: "MVVM",

        link: "",
        type: "lesson",
      },
    ],
  },
];
