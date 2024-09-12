export type UnitNode =
  | {
      title: string;
      description: string;
      link: string;
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
export const codingBasicsCourse: Course = {
  title: "Coding Basics",
  units: [
    {
      title: "Introduction",
      nodes: [
        {
          type: "lesson",
          title: "Introduction",
          description: "",
          link: "/intro/introduction",
        },
      ],
    },
    {
      title: "HTML",
      nodes: [
        {
          type: "lesson",
          title: "HTML Lesson",
          description: "",
          link: "/intro/HTML/1",
        },
        {
          type: "quiz",
          title: "HTML Quiz",
          description: "",
          link: "/intro/HTML/2",
        },
        {
          type: "assignment",
          title: "HTML Assignment",
          description: "",
          link: "/intro/HTML/3",
        },
      ],
    },
    {
      title: "CSS",
      nodes: [
        {
          type: "lesson",
          title: "CSS Lesson",
          description: "",
          link: "/intro/CSS/1",
        },
        {
          type: "lesson",
          title: "CSS Grid",
          description: "",
          link: "/intro/CSS/2-Grid",
        },
        {
          type: "lesson",
          title: "CSS Flexbox",
          description: "",
          link: "/intro/CSS/2-Flexbox",
        },
        {
          type: "quiz",
          title: "CSS Quiz",
          description: "",
          link: "/intro/CSS/4",
        },
        {
          type: "assignment",
          title: "CSS Assignment",
          description: "",
          link: "/intro/CSS/6",
        },
      ],
    },
    {
      title: "JavaScript",
      nodes: [
        {
          type: "lesson",
          title: "JavaScript Introduction",
          description: "",
          link: "intro/Javascript/1",
        },
        {
          type: "lesson",
          title: "JavaScript Variables",
          description: "",
          link: "intro/Javascript/Variables",
        },
        {
          type: "lesson",
          title: "JavaScript Functions",
          description: "",
          link: "intro/Javascript/Functions",
        },
        {
          type: "lesson",
          title: "JavaScript Conditionals",
          description: "",
          link: "intro/Javascript/Conditionals",
        },
        {
          type: "quiz",
          title: "JavaScript Quiz 1",
          description: "",
          link: "intro/Javascript/JSQuiz1",
        },
        {
          type: "lesson",
          title: "JavaScript Arrays",
          description: "",
          link: "intro/Javascript/Array",
        },
        {
          type: "lesson",
          title: "JavaScript Loops",
          description: "",
          link: "intro/Javascript/Loops",
        },
        {
          type: "lesson",
          title: "JavaScript Objects",
          description: "",
          link: "intro/Javascript/Objects",
        },
        {
          type: "lesson",
          title: "JavaScript Iterators",
          description: "",
          link: "intro/Javascript/Iterators",
        },
        {
          type: "quiz",
          title: "JavaScript Quiz 2",
          description: "",
          link: "intro/Javascript/JSQuiz2",
        },
        {
          type: "assignment",
          title: "Pokemon Assignment",
          description: "",
          link: "intro/Javascript/pokemon/self-ranking",
        },
        {
          type: "assignment",
          title: "NBA Assignment",
          description: "",
          link: "intro/Javascript/sports/introduction",
        },
        {
          type: "lesson",
          title: "JavaScript Summary",
          description: "",
          link: "intro/Javascript/summary",
        },
      ],
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
      link: "web/introduction",
    },
  ],
};

export const githubUnit: Unit = {
  title: "Github",
  nodes: [
    {
      title: "Lesson",
      description: "Deploying a Project on Github & Vercel",
      link: "web/React/github",
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

      link: "web/React/tailwindcss-gridflex",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "TailwindCSS - General Styling",

      link: "web/React/tailwindcss-colourstyling",
      type: "lesson",
    },
    {
      title: "Assignment 1",
      description: "TailwindCSS Assignment",

      link: "web/React/assignments/tailwindAssignment",
      type: "assignment",
    },
  ],
};

export const reactUnit: Unit = {
  title: "React",
  nodes: [
    {
      title: "Lesson",
      description: "Components",

      link: "web/React/components",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Props",

      link: "web/React/props",
      type: "lesson",
    },
    {
      title: "Assignment 2",
      description: "Components and Props",

      link: "web/React/assignments/componentsAssignment",
      type: "assignment",
    },

    {
      title: "Lesson",
      description: "Hooks - useState",

      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Hooks - useEffect",

      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Conditional Rendering",

      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Handling Events",

      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Assignment 3",
      description: "Building a tic tac toe game",

      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Assignment 4",
      description: "Build a K-12 Math Quiz",

      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Assignment 5",
      description: "Build a tutorial to a Leetcode question",

      link: "react/React/1",
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

export const reactUnits: Unit[] = [
  webIntroUnit,
  githubUnit,
  tailwindUnit,
  reactUnit,
  backendUnit,
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
        link: "courses/interviewPrep/tools",
      },
    ],
  },
  {
    title: "Tell Me About Yourself",
    nodes: [
      {
        title: "Assignment 1",
        description: "Bullet all your experiences",
        type: "assignment",
        link: "courses/interviewPrep/assign1",
      },
      {
        title: "Lesson 4",
        description: "How should I introduce myself?",
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
        description: "Try Yourself: Behavioral Questions",
        type: "lesson",
        link: "courses/interviewPrep/try1",
      },
      {
        title: "Lesson 6",
        description: "Try Yourself: Technical Questions",
        type: "lesson",
        link: "courses/interviewPrep/try2",
      },
      {
        title: "Lesson 7",
        description: "Try Yourself: Hands-On Coding Questions",
        type: "lesson",
        link: "courses/interviewPrep/try3",
      },
    ],
  },
  {
    title: "Mock Interview",
    nodes: [
      {
        title: "Assignment 2",
        description: "Real Interview Simulation",
        type: "assignment",
        link: "courses/interviewPrep/assign2",
      },
      {
        title: "Lesson 4",
        description: "How do I know if I'm ready?",
        type: "lesson",
        link: "courses/interviewPrep/lesson5",
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
