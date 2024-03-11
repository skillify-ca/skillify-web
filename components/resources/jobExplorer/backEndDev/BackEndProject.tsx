import React from "react";

const BackEndProject = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Back-End Project</h2>
      <p className="text-gray-800">
        The goal of this project is to create a RESTful API using a back-end technology of your choice. The API should handle CRUD operations for a specific resource (e.g., users, products, posts).
      </p>
      <p className="text-gray-800 mt-2">
        Follow the objectives and requirements mentioned below to complete the project within 1-2 weeks.
      </p>
        <h3 className="text-xl font-bold mt-4">Project Objectives:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Create a RESTful API with endpoints for creating, reading, updating, and deleting the specified resource.</li>
        <li>Implement proper error handling and validation for API requests.</li>
        <li>Use a database (SQL or NoSQL) to store and retrieve data for the resource.</li>
        <li>Secure the API endpoints using authentication and authorization mechanisms (optional, but recommended).</li>
        <li>Document the API endpoints using a tool like Swagger or Postman.</li>
        <li>Optimize the API performance for efficient data retrieval and response times.</li>
        <li>Handle edge cases and potential security vulnerabilities.</li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Requirements:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Strong understanding of back-end technologies (e.g., Node.js, Python, Ruby on Rails, Django, Express, etc.).</li>
        <li>Familiarity with RESTful API design principles and best practices.</li>
        <li>Experience in working with databases and data modeling.</li>
        <li>Knowledge of authentication and authorization mechanisms (JWT, OAuth, etc.) for securing APIs (optional but recommended).</li>
        <li>Thoroughly document your API endpoints for ease of understanding and testing.</li>
      </ul>

      {/* Submission Instructions */}
      <div className="mt-6">
        <h3 className="text-xl font-bold">Submission</h3>
        <p className="text-gray-800 mt-2">
          To submit your assignment, you will need to create a GitHub repository for your API project and share the link with us.
        </p>
        <p className="text-gray-800 mt-2">
          Please ensure that your repository includes all the necessary code, database configuration, and clear instructions for running and testing your API locally.
        </p>
      </div>
    </div>
  );
};

export default BackEndProject;
