import { formatList } from "../formatList";

const title = "iOS Developer Project";

const goal =
  "Develop a feature-rich iOS application that demonstrates your core development skills—from setting up projects in Xcode to implementing modern UI designs and advanced architecture patterns. This project will help you showcase proficiency in both fundamental and advanced iOS development practices.";

const objectives = [
  "Initialize a new Xcode project with proper configuration and project structure.",
  "Design and implement a responsive UI using Storyboards, Auto Layout, and/or SwiftUI following Apple’s Human Interface Guidelines.",
  "Develop core functionalities using Swift (with optional Objective-C components) and ensure robust error handling.",
  "Integrate RESTful APIs to fetch and display dynamic data.",
  "Implement local data persistence using Core Data, Realm, or other storage solutions.",
  "Apply an advanced architecture pattern (MVC, MVVM, or VIPER) to structure your app effectively.",
  "Utilize asynchronous programming with GCD, OperationQueue, or Combine for smooth performance.",
  "Write comprehensive unit tests with XCTest and UI tests with XCUITest to validate functionality.",
  "Set up a CI/CD pipeline using Fastlane for automated building, testing, and deployment.",
  "Document the entire project setup, architecture, and development process in detail.",
];

const requirements = [
  "Proficiency in Swift and familiarity with Xcode and the iOS SDK.",
  "Solid understanding of iOS UI components, Auto Layout, and the app lifecycle.",
  "Experience using Git for version control.",
  "Knowledge of RESTful API integration and JSON parsing.",
  "Familiarity with local data persistence strategies (Core Data, Realm, etc.).",
  "Experience with modern iOS architecture patterns and dependency management.",
  "Ability to implement asynchronous programming and handle concurrency.",
  "Skill in writing and executing both unit and UI tests.",
  "Understanding of CI/CD practices for mobile app development.",
];

const estimatedTime = "12 weeks";

const submissionRequirements = formatList([
  "Create and maintain a GitHub repository for your iOS project.",
  "Include a detailed README.md documenting the project setup, features, and development process.",
  "Integrate a CI/CD workflow using Fastlane with automated tests and deployments.",
  "Submit the GitHub repository link upon project completion.",
]);

export const iosDeveloperProjectData = {
  title,
  goal,
  objectives,
  requirements,
  estimatedTime,
  submissionRequirements,
};
