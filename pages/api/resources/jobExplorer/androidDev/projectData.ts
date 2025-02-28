import { formatList } from "../formatList";

const title = "Android Developer Project";

const goal =
  "Develop a feature-rich Android application that demonstrates your proficiency in essential Android development tools and practices, while also showcasing advanced UI design, architecture patterns, and performance optimization.";

const objectives = [
  "Initialize a new Android Studio project with proper Gradle configuration.",
  "Design and implement a responsive UI using XML layouts and/or Jetpack Compose following Material Design principles.",
  "Implement core functionalities using Kotlin, ensuring robust error handling and asynchronous operations.",
  "Integrate RESTful APIs using Retrofit (or similar libraries) to fetch and display dynamic data.",
  "Implement local data persistence using SQLite or Room Database.",
  "Apply modern Android architecture patterns (e.g., MVVM, MVP, MVI, or MVC) to structure your app.",
  "Utilize dependency injection frameworks (Dagger, Hilt, or Koin) for cleaner code management.",
  "Incorporate asynchronous programming using Coroutines, Flow, or RxJava.",
  "Write comprehensive unit tests (JUnit) and UI tests (Espresso) to validate app functionality.",
  "Integrate Firebase services for analytics, crash reporting, or messaging as an optional enhancement.",
  "Optimize app performance and conduct thorough debugging and profiling.",
  "Set up a CI/CD pipeline to automate building, testing, and deployment of the application.",
  "Document the project architecture, development process, and setup instructions in detail.",
];

const requirements = [
  "Proficiency in Kotlin programming and hands-on experience with Android Studio.",
  "Solid understanding of the Android SDK, UI components, and application lifecycle.",
  "Familiarity with Gradle, Git, and basic command-line operations.",
  "Knowledge of RESTful API integration and local data storage solutions (SQLite/Room).",
  "Experience with modern Android architecture patterns and dependency injection.",
  "Ability to implement asynchronous programming and reactive paradigms.",
  "Skill in writing and maintaining both unit and UI tests.",
  "Understanding of CI/CD practices tailored for mobile development.",
];

const estimatedTime = "12 weeks";

const submissionRequirements = formatList([
  "Create and maintain a GitHub repository for your project.",
  "Include a comprehensive README.md outlining the project setup, features, and development process.",
  "Demonstrate CI/CD integration with automated testing and deployment.",
  "Submit the GitHub repository link upon project completion.",
]);

export const androidDeveloperProjectData = {
  title,
  goal,
  objectives,
  requirements,
  estimatedTime,
  submissionRequirements,
};
