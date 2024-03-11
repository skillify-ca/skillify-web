import React from "react";

const FullstackProject = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Full-Stack Project</h2>
      <p className="text-gray-800">
        The goal of this project is to build a full-stack web application from scratch. You will demonstrate your proficiency in both front-end and back-end development to create a functional and interactive web application.
      </p>
      <p className="text-gray-800 mt-2">
        Follow the objectives and requirements mentioned below to complete the project within 3-4 weeks.
      </p>
      <h3 className="text-xl font-bold mt-4">Project Objectives:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Design and implement a visually appealing user interface for the web application.</li>
        <li>Create a back-end server to handle user authentication, data storage, and API endpoints.</li>
        <li>Implement client-server communication using RESTful API or GraphQL.</li>
        <li>Develop interactive front-end features using modern JavaScript frameworks (React, Angular, or Vue.js).</li>
        <li>Ensure the application is responsive and works smoothly on various devices.</li>
        <li>Integrate a database (SQL or NoSQL) to store and retrieve data as needed.</li>
        <li>Apply security measures to protect user data and prevent common web vulnerabilities.</li>
        <li>Deploy the web application on a cloud platform for public access (optional).</li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Requirements:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Strong proficiency in front-end technologies (HTML, CSS, JavaScript) and front-end frameworks.</li>
        <li>Experience in building and securing back-end servers using Node.js, Python, or Ruby on Rails.</li>
        <li>Familiarity with databases and data modeling for efficient data storage and retrieval.</li>
        <li>Understanding of client-server communication and RESTful API or GraphQL implementation.</li>
        <li>Version control skills using Git for effective collaboration and code management.</li>
        <li>Ability to deploy the web application and manage cloud platforms (optional).</li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Submission</h3>
        <p className="text-gray-800 mt-2">
          To submit your assignment, create a GitHub repository for your full-stack web application and share the link with us.
        </p>
        <p className="text-gray-800 mt-2">
          Your repository should include both front-end and back-end code, along with a README.md file providing setup instructions and any additional documentation.
        </p>
      </div>
    </div>
  );
};

export default FullstackProject;
