import { formatList } from "../formatList";

const title = "Cyber Security Analyst Project";
const goal =
  "The goal of this project is to design and implement a comprehensive cybersecurity solution that demonstrates your ability to identify, mitigate, and manage security threats in a digital environment. You will assess security vulnerabilities, design countermeasures, and develop incident response plans.";
const objectives = [
  "Conduct a thorough security assessment to identify vulnerabilities in a system or network.",
  "Develop and implement security protocols to mitigate identified risks.",
  "Simulate a cybersecurity breach and execute an incident response plan.",
  "Integrate monitoring and alerting systems to detect potential security threats.",
  "Document your findings, security measures, and incident response strategies.",
  "Ensure compliance with industry security standards and best practices.",
];
const requirements = [
  "Strong knowledge of cybersecurity principles, protocols, and standards.",
  "Experience with vulnerability assessment tools and penetration testing methodologies.",
  "Familiarity with network security, encryption, and authentication mechanisms.",
  "Ability to design and implement security policies and incident response plans.",
  "Proficiency in scripting or programming for automation of security tasks.",
  "Understanding of regulatory compliance and data protection laws.",
];
const estimatedTime = "6 weeks";
const submissionRequirements = formatList([
  "Submit a detailed report including the security assessment, implemented security measures, incident response plan, and any relevant configuration files or scripts",
]);

export const cyberSecurityAnalystProjectData = {
    title,
    goal,
    objectives,
    requirements,
    estimatedTime,
    submissionRequirements,
  };
  