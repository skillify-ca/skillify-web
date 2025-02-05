import { formatList } from "../formatList";

const title = "UX Designer Project";
const goal =
  "The goal of this project is to apply your UX design skills to improve the user experience of an existing product or create a new user interface design from scratch. You will focus on understanding user needs, creating intuitive interfaces, and delivering high-quality design solutions.";
const objectives = [
  "Conduct user research to identify target users, their needs, and pain points.",
  "Create user personas and user journey maps to understand the user experience.",
  "Design wireframes and interactive prototypes to visualize your design concepts.",
  "Apply best practices in information architecture and interaction design.",
  "Design visually appealing interfaces with attention to detail and consistency.",
  "Collaborate with stakeholders to gather feedback and iterate on your designs.",
  "Validate your design decisions through usability testing or user feedback.",
  "Prepare design specifications and assets for handoff to developers (if applicable).",
];
const requirements = [
  "Strong understanding of UX design principles and methodologies.",
  "Proficiency in design tools like Sketch, Figma, Adobe XD, or similar.",
  "Experience with prototyping tools for creating interactive mockups.",
  "Knowledge of user research techniques and usability testing.",
  "Ability to communicate design ideas and concepts effectively.",
  "Understanding of responsive design and mobile-first approach.",
  "Portfolio showcasing previous UX design projects (if available).",
];
const estimatedTime = "1-2 weeks";
const submissionRequirements = formatList([
  "Create a GitHub repository to track your design assets, wireframes, prototypes, and any supporting documentation"
  ,
  "please submit the link to the to complete the project",
]);

export const uxDesignerProjectData = {
    title,
    goal,
    objectives,
    requirements,
    estimatedTime,
    submissionRequirements,
  };
  