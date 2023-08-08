import React from "react";
import { additionalSkills, description, mandatorySkills, project, title } from "../../../../pages/api/resources/jobExplorer/aiEngineer/data";

const AIEngineerComponent = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="mb-4 text-4xl font-bold text-center">{title}</h1>
      <p className="text-lg text-gray-800 text-center mb-8">{description}</p> {/* Add margin to create space below description */}

      <div className="flex flex-wrap w-full mb-8"> {/* Add margin to create space between description and requirements */}
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">Mandatory Requirements:</h2>
            <ul className="list-disc pl-6 text-gray-800">
              {mandatorySkills.map((skill) => (
                <li key={skill.name} className="mb-2">
                  <a
                    href={skill.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {skill.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">Possible Additional Requirements:</h2>
            <ul className="list-disc pl-6 text-gray-800">
              {additionalSkills.map((skill) => (
                <li key={skill.name} className="mb-2">
                  <a
                    href={skill.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {skill.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 text-center"> {/* Center the Project section */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-blue-600">
            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Project: {project.name}
            </a>
          </h2> {/* Add project name to the title */}
        </div>
      </div>
    </div>
  );
};

export default AIEngineerComponent;
