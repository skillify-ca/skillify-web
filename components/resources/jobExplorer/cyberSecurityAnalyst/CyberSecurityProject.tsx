import React from "react";

const CyberSecurityProject = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cybersecurity Analyst Project</h2>
      <p className="text-gray-800">
        The goal of this project is to simulate the responsibilities of a Cybersecurity Analyst by identifying and mitigating security risks, responding to incidents, and safeguarding a mock organization's infrastructure. This project will help you develop core cybersecurity skills and showcase your ability to secure systems and data effectively.
      </p>
      <p className="text-gray-800 mt-2">
        Follow the outlined objectives and requirements to complete this project within 4-6 weeks.
      </p>

      <h3 className="text-xl font-bold mt-4">Project Objectives:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Analyze a mock organization’s network architecture to identify potential security vulnerabilities.</li>
        <li>Develop and implement a security plan to address identified risks.</li>
        <li>Perform a vulnerability assessment using tools like Nmap or Nessus.</li>
        <li>Conduct a penetration test to evaluate the organization’s security posture.</li>
        <li>Simulate an incident response scenario, documenting steps for containment, eradication, and recovery.</li>
        <li>Implement basic encryption and cryptographic measures to secure sensitive data.</li>
        <li>Set up a monitoring and logging system to detect potential threats using tools like Wireshark.</li>
        <li>Document the project, detailing findings, mitigations, and lessons learned.</li>
      </ul>

      <h3 className="text-xl font-bold mt-4">Requirements:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Basic knowledge of networking fundamentals (e.g., TCP/IP, firewalls).</li>
        <li>Familiarity with operating systems like Linux and Windows.</li>
        <li>Experience with security tools such as Wireshark, Nmap, or Metasploit.</li>
        <li>Understanding of incident response processes and forensics techniques.</li>
        <li>Proficiency in scripting or programming (Python, Bash, or PowerShell).</li>
        <li>Knowledge of encryption and cryptography principles.</li>
        <li>Awareness of compliance and security standards (e.g., NIST, ISO 27001).</li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Submission</h3>
        <p className="text-gray-800 mt-2">
          To submit your project, create a detailed report or case study in PDF format or as a website. Include:
        </p>
        <ul className="list-disc list-inside text-gray-800 pl-4 mt-2">
          <li>An overview of the mock organization and its infrastructure.</li>
          <li>Details of the vulnerability assessment, including tools and results.</li>
          <li>A summary of the penetration testing process and findings.</li>
          <li>Steps taken during the incident response simulation.</li>
          <li>Evidence of encryption or cryptographic measures applied.</li>
          <li>Recommendations for improving the organization's security posture.</li>
        </ul>
        <p className="text-gray-800 mt-2">
          Share your submission by uploading it to a personal portfolio website or a GitHub repository, or provide a direct link to the document.
        </p>
      </div>
    </div>
  );
};

export default CyberSecurityProject;
