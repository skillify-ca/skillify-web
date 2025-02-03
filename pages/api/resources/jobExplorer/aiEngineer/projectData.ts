// projectData.js
import { formatList } from "../formatList";


  const title = "AI Engineering Project"
  const  goal =    "The goal of this project is to develop an AI-powered application that demonstrates your expertise in artificial intelligence and machine learning. You will build a sophisticated AI model and integrate it into a real-world use case."
 const  objectives= [
    "Identify a real-world problem that can be solved using AI techniques.",
    "Collect and preprocess relevant data for training your AI model.",
    "Design and implement a deep learning or machine learning model to address the problem.",
    "Evaluate the performance of your AI model using appropriate metrics.",
    "Optimize and fine-tune the model for improved accuracy and efficiency.",
    "Integrate the AI model into an application or web service for user interaction.",
    "Implement proper error handling and provide clear instructions for users.",
    "Ensure the application is well-documented and user-friendly.",
    "Consider ethical implications and potential biases in your AI model.",
  ]
  const requirements= [
    "Strong background in machine learning, deep learning, and AI algorithms.",
    "Proficiency in programming languages like Python and libraries like TensorFlow, PyTorch, or scikit-learn.",
    "Experience in data preprocessing, feature engineering, and model evaluation.",
    "Knowledge of deploying machine learning models to applications or web services.",
    "Ability to communicate complex AI concepts to non-technical stakeholders.",
    "Familiarity with ethical considerations and bias mitigation in AI models.",
    "Experience in version control and collaborative development with Git.",
  ]
  const estimatedTime= "8 weeks"
  const submissionRequirements= formatList([
    "Create a GitHub repository for your AI project",
    "Include the AI model code, the application code (if applicable), documentation, and instructions on how to interact with the application",
  ])

export const aiEngineerProjectData = {
    title,
    goal,
    objectives,
    requirements,
    estimatedTime,
    submissionRequirements,
  };