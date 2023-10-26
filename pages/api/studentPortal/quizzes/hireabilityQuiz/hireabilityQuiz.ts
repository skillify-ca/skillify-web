import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";
export type QuizDataHire = {
  title: string;
  body: string;
  questions: QuizQuestionHire[];
  currentQuestion: number;
  progress: number;
};

export type QuizQuestionHire = {
  title: string;
  body: string;
  maxSelections?: number;
  options: QuizOptionHire[];
};

export type QuizOptionHire = {
  name: string;
  weight: number;
  isSelected: boolean;
  isCorrect: boolean;
};
export const quizData: QuizViewState = {
  title: "How hireable are you?",
  body: "Take this free quiz to reveal your hireability score for software engineering, product, or design roles.",
  questions: [
    {
      title: "What role are you interested in?",
      body: "Select the most relevant role.",

      options: [
        {
          name: "Frontend Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Backend Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Mobile Engineer",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};

const quizDataFE: QuizDataHire = {
  title: "Frontend Engineer Quiz",
  body: "Test your knowledge and skills as a Frontend Engineer.",
  questions: [
    {
      title: "What are HTML meta tags used for?",
      body: "Explain the purpose and usage of HTML meta tags.",
      options: [
        {
          name: "To create animations in CSS.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "To fetch data from an API.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "To define block-level and inline elements.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "To provide data about encoding, document title, and character description.",
          weight: 0,
          isSelected: false,
          isCorrect: true,
        },
      ],
    },
    {
      title: "Differentiate between div and span in HTML and CSS.",
      body: "Explain the key differences and use cases of div and span.",
      maxSelections: 1,
      options: [
        {
          name: "Div and span are interchangeable and serve the same purpose.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "Div is used for block-level elements, while span is used for inline elements.",
          weight: 0,
          isSelected: false,
          isCorrect: true,
        },
        {
          name: "Div is used for creating animations, and span is used for styling text.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "Div and span are used for making API requests in web development.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
      ],
    },
    {
      title: "What are the advantages of using REST web services?",
      body: "Discuss the benefits of RESTful web services in web development.",
      options: [
        {
          name: "REST is a heavyweight protocol for web development.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "REST web services can only transfer images and JSON data.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "REST enforces a strict contract between the server and client.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "REST web services have a simple learning curve and work on the HTTP protocol.",
          weight: 0,
          isSelected: false,
          isCorrect: true,
        },
      ],
    },
    {
      title: "Explain the key differences between CSS Grid and Flexbox.",
      body: "Compare and contrast CSS Grid and Flexbox layout systems.",
      options: [
        {
          name: "CSS Grid is primarily used for creating responsive web design, while Flexbox is used for animations.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "CSS Grid and Flexbox are interchangeable and serve the same purpose.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "CSS Grid is a 2D layout system for grid-based layouts, while Flexbox is a 1D layout system for arranging items in a single direction.",
          weight: 0,
          isSelected: false,
          isCorrect: true,
        },
        {
          name: "CSS Grid and Flexbox are both obsolete in modern web development.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
      ],
    },
    {
      title: "What is TypeScript and why is it used in web development?",
      body: "Explain what TypeScript is and its significance in web development.",
      options: [
        {
          name: "TypeScript is a superset of JavaScript that adds static typing and other features, making it more robust for large-scale applications.",
          weight: 0,
          isSelected: false,
          isCorrect: true,
        },
        {
          name: "TypeScript is a standalone language that replaces JavaScript in all web development projects.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "TypeScript is used for creating RESTful web services.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
        {
          name: "TypeScript is primarily used for styling web pages.",
          weight: 0,
          isSelected: false,
          isCorrect: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};

// Backend Engineer Quiz Data
export const quizDataBE: QuizViewState = {
  title: "Backend Engineer Quiz",
  body: "Test your knowledge and skills as a Backend Engineer.",
  questions: [
    {
      title:
        "What is the difference between a RESTful API and a GraphQL API, and when would you choose one over the other?",
      body: "Explain the differences and use cases for RESTful and GraphQL APIs.",
      maxSelections: 1,
      options: [
        {
          name: "RESTful APIs use fixed endpoints and return predefined data, while GraphQL APIs allow clients to request specific data.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "GraphQL APIs are stateless, while RESTful APIs can maintain session state.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "RESTful APIs are more efficient than GraphQL APIs.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "GraphQL APIs are only used for mobile app development.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "Explain the principles of database normalization and why they are important in database design.",
      body: "Discuss the concepts of database normalization and their significance.",
      maxSelections: 1,
      options: [
        {
          name: "Database normalization reduces data redundancy and ensures data consistency.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Normalization is not relevant in database design.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Normalization makes databases slower and less efficient.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Normalization is only applicable to NoSQL databases.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "Describe the role of middleware in a web application's backend architecture.",
      body: "Explain what middleware is and how it fits into the backend architecture.",
      maxSelections: 1,
      options: [
        {
          name: "Middleware acts as a bridge between the frontend and backend components, handling requests and responses.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Middleware is a term used exclusively in frontend development.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Middleware is only used in monolithic application architectures.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Middleware is primarily responsible for rendering HTML templates in the browser.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "How do you handle authentication and authorization in a secure manner in a backend system?",
      body: "Discuss best practices for handling authentication and authorization in backend development.",
      maxSelections: 1,
      options: [
        {
          name: "Use secure protocols like OAuth for authentication and role-based access control (RBAC) for authorization.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Authentication and authorization are not important in backend development.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Store user passwords in plain text in the database.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Use the same authentication approach for all users, regardless of their roles.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "What is the purpose of indexing in a relational database, and how can it improve query performance?",
      body: "Explain the significance of indexing in relational databases.",
      maxSelections: 1,
      options: [
        {
          name: "Indexing speeds up data retrieval by creating a data structure that allows the database to quickly locate rows that match a certain column value.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Indexing is used to delete data from the database.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Indexing is only relevant in NoSQL databases.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Indexing has no impact on query performance.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};

// Game Engineer Quiz Data
export const quizDataGE: QuizViewState = {
  title: "Game Engineer Quiz",
  body: "Test your knowledge and skills as a Game Engineer.",
  questions: [
    {
      title:
        "What are the key components of a game engine, and how do they interact to render a game scene?",
      body: "Explain the components of a game engine and how they work together.",
      maxSelections: 1,
      options: [
        {
          name: "Key components include the renderer, physics engine, audio system, and game logic, which work together to render and simulate game scenes.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game engines only have one component called the game loop.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game engines do not have components; they are single monolithic entities.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game engines are only used for 2D games.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "Explain the difference between forward rendering and deferred rendering in game graphics.",
      body: "Discuss the rendering techniques used in game graphics.",
      maxSelections: 1,
      options: [
        {
          name: "Forward rendering calculates lighting and shading for each object individually, while deferred rendering separates the rendering process into multiple passes.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Forward rendering is a more modern technique compared to deferred rendering.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Deferred rendering is only used for 2D games.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Forward rendering is primarily used for audio rendering in games.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "How do you optimize game performance for different hardware platforms and screen resolutions?",
      body: "Discuss strategies for optimizing game performance across various devices.",
      maxSelections: 1,
      options: [
        {
          name: "Optimization techniques include adjusting graphics settings, using level of detail (LOD) models, and optimizing shaders.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game performance is not affected by hardware or screen resolution.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Optimizing game performance is the sole responsibility of hardware manufacturers.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game performance can only be optimized for high-end hardware.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "Discuss the importance of collision detection and physics simulation in game development.",
      body: "Explain the significance of collision detection and physics simulation in game design.",
      maxSelections: 1,
      options: [
        {
          name: "Collision detection ensures that game objects interact realistically, and physics simulation adds realism to in-game physics.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Collision detection is not relevant in game development.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Physics simulation is only used in 2D games.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Collision detection and physics simulation are used solely for graphics rendering.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "What is game scripting, and how does it enhance gameplay and interactivity?",
      body: "Explain the concept of game scripting and its role in game development.",
      maxSelections: 1,
      options: [
        {
          name: "Game scripting involves writing code to control game events, behaviors, and interactions, enhancing gameplay and interactivity.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game scripting is only used in 2D games.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game scripting is unrelated to gameplay and interactivity.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game scripting is primarily used for game marketing.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};

// Mobile Engineer Quiz Data
export const quizDataME: QuizViewState = {
  title: "Mobile Engineer Quiz",
  body: "Test your knowledge and skills as a Mobile Engineer.",
  questions: [
    {
      title:
        "What are the key differences between native mobile app development and cross-platform development frameworks like React Native or Flutter?",
      body: "Discuss the differences between native and cross-platform mobile app development.",
      maxSelections: 1,
      options: [
        {
          name: "Native development involves writing separate codebases for each platform, while cross-platform frameworks allow developers to use a single codebase for multiple platforms.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Native development is faster than cross-platform development.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Cross-platform development is only suitable for web-based apps.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Cross-platform development is limited to Android apps.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "Describe the Android Activity Lifecycle and how it impacts the behavior of Android apps.",
      body: "Explain the Android Activity Lifecycle and its effects on app behavior.",
      maxSelections: 1,
      options: [
        {
          name: "The Android Activity Lifecycle defines the stages through which an activity passes, impacting its behavior and interactions with the user.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "The Android Activity Lifecycle has no impact on app behavior.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "The Android Activity Lifecycle is only relevant for iOS app development.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "The Android Activity Lifecycle is primarily concerned with memory management.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "How can you optimize the performance and battery life of a mobile app?",
      body: "Discuss strategies for optimizing mobile app performance and battery usage.",
      maxSelections: 1,
      options: [
        {
          name: "Optimization techniques include efficient code, background task management, and minimizing network requests.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Mobile app performance and battery life are not related.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Optimizing mobile app performance requires using the most resource-intensive features.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Optimization is only relevant for iOS apps.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "Explain the concept of reactive programming and how it is used in mobile app development.",
      body: "Discuss reactive programming and its application in mobile development.",
      maxSelections: 1,
      options: [
        {
          name: "Reactive programming is an asynchronous programming paradigm used to handle data streams and event-driven UI updates in mobile apps.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Reactive programming is only used in web development.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Reactive programming is primarily concerned with graphics rendering in mobile apps.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Reactive programming has no relevance in mobile app development.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title:
        "What are the security considerations when developing a mobile app, and how can you protect user data and privacy?",
      body: "Discuss security best practices for mobile app development.",
      maxSelections: 1,
      options: [
        {
          name: "Security considerations include data encryption, secure authentication, and regular security audits to protect user data and privacy.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Security is not a concern in mobile app development.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Mobile apps should not handle user data or privacy.",
          weight: 0,
          isSelected: false,
        },
        {
          name: "User data and privacy can be protected through open access to app data.",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};
