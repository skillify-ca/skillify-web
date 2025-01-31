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
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <p className="text-gray-800">{goal}</p>
      <p className="mt-2 text-gray-800">
        Follow the objectives and requirements mentioned below to complete the
        project within {estimatedTime}.
      </p>
      <h3 className="mt-4 text-xl font-bold">Project Objectives:</h3>
      <ul className="pl-4 text-gray-800 list-disc list-inside">
        {objectives &&
          objectives.map((objective, i) => <li key={i}>{objective}</li>)}
      </ul>
      <h3 className="mt-4 text-xl font-bold">Requirements:</h3>
      <ul className="pl-4 text-gray-800 list-disc list-inside">
        {requirements &&
          requirements.map((requirement, i) => <li key={i}>{requirement}</li>)}
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Submission</h3>
        <p className="mt-2 text-gray-800">
          {submissionRequirements}.
        </p>
      </div>
    </div>
  );
};

export default JobExplorerProject;
