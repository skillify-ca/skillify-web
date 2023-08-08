import React from "react";

const DataScienceProject = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Data Science Project</h2>
      <p className="text-gray-800">
        The goal of this project is to analyze a dataset of your choice and draw meaningful insights from it. You will demonstrate your data exploration, analysis, and visualization skills.
      </p>
      <p className="text-gray-800 mt-2">
        Follow the objectives and requirements mentioned below to complete the project within 1-2 weeks.
      </p>
      <h3 className="text-xl font-bold mt-4">Project Objectives:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Select an appropriate dataset for analysis (publicly available or self-collected).</li>
        <li>Clean and preprocess the data to handle missing values and ensure data integrity.</li>
        <li>Perform exploratory data analysis (EDA) to gain insights and discover patterns.</li>
        <li>Apply suitable statistical methods and machine learning algorithms to answer specific questions or make predictions.</li>
        <li>Create clear and visually appealing data visualizations to communicate your findings effectively.</li>
        <li>Document your data science process and the key insights you obtained.</li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Requirements:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Proficiency in data manipulation using Python/R.</li>
        <li>Familiarity with data visualization libraries like Matplotlib or Seaborn.</li>
        <li>Understanding of statistical concepts and hypothesis testing.</li>
        <li>Experience with machine learning algorithms for regression, classification, or clustering.</li>
        <li>Ability to present complex data insights in a clear and concise manner.</li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Submission</h3>
        <p className="text-gray-800 mt-2">
          To submit your assignment, create a GitHub repository for your data science project and share the link with us.
        </p>
        <p className="text-gray-800 mt-2">
          Your repository should include well-documented Jupyter notebooks or Python/R scripts, along with a summary report of your findings.
        </p>
      </div>
    </div>
  );
};

export default DataScienceProject;
