import { formatList } from "../formatList";

const title = "Product Manager Project";
const goal =
  "The goal of this project is to identify a product or feature idea, define its scope, and develop a strategy that aligns customer needs with business objectives. This project will simulate the product development lifecycle from ideation to release.";
const objectives = [
  "Identify a product or feature idea from the provided list (or propose your own).",
  "Conduct user and market research to validate customer needs and market demand.",
  "Define business objectives and the product vision.",
  "Create a product roadmap and prioritize key features.",
  "Collaborate with cross-functional teams to develop a go-to-market strategy.",
  "Set success metrics and KPIs for the product or feature.",
  "Prepare a pitch deck to present your product idea and strategy.",
];
const requirements = [
  "Choose a product idea from the list or propose your own idea.",
  "Document customer pain points and how the product solves them.",
  "Prepare a detailed roadmap using tools like Trello, Notion, or Miro.",
  "Identify at least three key stakeholders and describe their roles.",
  "Set at least five measurable KPIs to evaluate the product's success.",
  "Submit a pitch deck (PDF or PowerPoint) summarizing your research, roadmap, and strategy.",
];
const estimatedTime = "1-2 weeks";
const submissionRequirements = formatList([
  "Submit your product pitch deck along with all supporting documentation, user research, and a detailed product roadmap",
]);

export const productManagerProjectData = {
    title,
    goal,
    objectives,
    requirements,
    estimatedTime,
    submissionRequirements,
  };
  