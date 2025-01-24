import React from "react";

const ProductManagerProject = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Product Manager Project</h2>
      <p className="text-gray-800">
        The goal of this project is to identify a product or feature idea, define its scope, and develop a strategy that aligns customer needs with business objectives. This project will simulate the product development lifecycle from ideation to release.
      </p>
      <p className="text-gray-800 mt-2">
        Follow the objectives and requirements mentioned below to complete the project within 1-2 weeks.
      </p>

      <h3 className="text-xl font-bold mt-4">Project Objectives:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Identify a product or feature idea from the provided list (or propose your own).</li>
        <li>Conduct user and market research to validate customer needs and market demand.</li>
        <li>Define business objectives and the product vision.</li>
        <li>Create a product roadmap and prioritize key features.</li>
        <li>Collaborate with cross-functional teams to develop a go-to-market strategy.</li>
        <li>Set success metrics and KPIs for the product or feature.</li>
        <li>Prepare a pitch deck to present your product idea and strategy.</li>
      </ul>

      <h3 className="text-xl font-bold mt-4">Requirements:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Choose a product idea from the list or propose your own idea.</li>
        <li>Document customer pain points and how the product solves them.</li>
        <li>Prepare a detailed roadmap using tools like Trello, Notion, or Miro.</li>
        <li>Identify at least three key stakeholders and describe their roles.</li>
        <li>Set at least five measurable KPIs to evaluate the product's success.</li>
        <li>Submit a pitch deck (PDF or PowerPoint) summarizing your research, roadmap, and strategy.</li>
      </ul>

      <h3 className="text-xl font-bold mt-4">Product Ideas:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>A productivity app for remote workers to manage tasks and goals.</li>
        <li>An AI-powered resume review and job application assistant.</li>
        <li>A marketplace for eco-friendly and sustainable products.</li>
        <li>A virtual event platform with networking and gamification features.</li>
        <li>A fitness app that adapts workouts based on wearable data.</li>
        <li>A mental health tracking app with journaling and mindfulness exercises.</li>
        <li>An e-learning platform focused on soft skills development.</li>
        <li>A subscription box service for hobbyists (e.g., art, cooking, coding).</li>
        <li>A community-driven platform for local volunteering opportunities.</li>
        <li>A feature for a grocery app that optimizes meal planning and reduces food waste.</li>
      </ul>

      {/* Submission Instructions */}
      <div className="mt-6">
        <h3 className="text-xl font-bold">Submission</h3>
        <p className="text-gray-800 mt-2">
          To submit your assignment, create a GitHub repository or upload your documentation and pitch deck, then share the link with us.
        </p>
        <p className="text-gray-800 mt-2">
          Ensure your submission includes all documentation, user research findings, and a clear product roadmap.
        </p>
      </div>
    </div>
  );
};

export default ProductManagerProject;
