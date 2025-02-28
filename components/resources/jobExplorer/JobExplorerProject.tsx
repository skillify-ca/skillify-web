import React from "react";

type JobExplorerProjectProps = {
  title: string;
  goal: string;
  objectives: string[];
  requirements: string[];
  estimatedTime: string;
  submissionRequirements: string;
};

const JobExplorerProject = ({
  title,
  goal,
  objectives,
  requirements,
  estimatedTime,
  submissionRequirements,
}: JobExplorerProjectProps) => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl text-blue-600 font-bold">{title}</h2>
      <p className="text-black-800">{goal}</p>
      <p className="mt-2 text-black-800">
        Follow the objectives and requirements mentioned below to complete the
        project within <span className="font-semibold text-black-600">{estimatedTime}</span>.
      </p>

      {/* Objectives Card */}
      {objectives?.length > 0 && (
        <div className="mt-6 bg-orange-500 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-xl font-bold text-blue-600">Project Objectives:</h3>
          <ul className="pl-4 text-black-600 list-disc list-inside">
            {objectives.map((objective, i) => (
              <li key={i}>{objective}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Requirements Card */}
      {requirements?.length > 0 && (
        <div className="mt-6 bg-orange-500 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-xl font-bold text-blue-600">Requirements:</h3>
          <ul className="pl-4 text-black-600 list-disc list-inside">
            {requirements.map((requirement, i) => (
              <li key={i}>{requirement}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Submission Card */}
      <div className="mt-6 bg-orange-500 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
        <h3 className="text-xl font-bold text-blue-600">Submission:</h3>
        <p className="mt-2 text-black-600">{submissionRequirements}</p>
      </div>
    </div>
  );
};

export default JobExplorerProject;
