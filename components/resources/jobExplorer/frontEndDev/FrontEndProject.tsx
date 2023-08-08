import React from "react";

const FrontEndProject = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Front-End Project</h2>
      <p className="text-gray-800">
        The goal of this project is to create a responsive portfolio website using basic front-end technologies. The website should showcase your skills, projects, and experience.
      </p>
      <p className="text-gray-800 mt-2">
        Follow the objectives and requirements mentioned below to complete the project within 1-2 weeks.
      </p>
      <h3 className="text-xl font-bold mt-4">Project Objectives:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Build a multi-page portfolio website with a home page, projects page, about page, and contact page.</li>
        <li>Implement responsive web design to ensure the website looks great on various devices.</li>
        <li>Showcase a collection of your projects with brief descriptions and links to view them.</li>
        <li>Create a visually appealing and user-friendly navigation menu.</li>
        <li>Utilize CSS animations or transitions to add subtle visual enhancements.</li>
        <li>Implement a contact form on the contact page with form validation.</li>
        <li>Optimize the website's performance for faster load times.</li>
        <li>Ensure the website is accessible and complies with basic accessibility guidelines.</li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Requirements:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Strong understanding of HTML, CSS, and JavaScript.</li>
        <li>Knowledge of responsive web design principles and media queries.</li>
        <li>Experience in form validation and handling form submissions with JavaScript.</li>
        <li>Basic knowledge of SEO best practices and meta tags.</li>
        <li>Ensuring the website is accessible to a wide range of users.</li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Submission</h3>
        <p className="text-gray-800 mt-2">
          To submit your assignment, you will need to create a GitHub repository and share the link with us.
        </p>
        <p className="text-gray-800 mt-2">
          Please ensure that your repository includes all the necessary files and instructions to run your portfolio website locally.
        </p>
      </div>
    </div>
  );
};

export default FrontEndProject;
