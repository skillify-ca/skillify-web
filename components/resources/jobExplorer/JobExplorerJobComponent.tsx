
type JobExplorerJobComponentProps = {
  title: string;
  description: string;
  mandatorySkills: { name: string; link: string }[];
  additionalSkills: { name: string; link: string }[];
  project: { name: string; link: string };
};

const JobExplorerJobComponent = ({
  title,
  description,
  mandatorySkills,
  additionalSkills,
  project,
}: JobExplorerJobComponentProps) => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="mb-4 text-4xl font-bold text-center">{title}</h1>
      <p className="mb-8 text-lg text-center text-gray-800">
        {description}
      </p>{" "}
      {/* Add margin to create space below description */}
      <div className="flex flex-wrap w-full mb-8">
        {" "}
        {/* Add margin to create space between description and requirements */}
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">
              Mandatory Requirements:
            </h2>
            <ul className="pl-6 text-gray-800 list-disc">
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
            <h2 className="mb-4 text-2xl font-bold text-blue-600">
              Possible Additional Requirements:
            </h2>
            <ul className="pl-6 text-gray-800 list-disc">
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
      <div className="w-full text-center lg:w-1/2">
        {" "}
        {/* Center the Project section */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-blue-600">
            <a
              href={'projects/' + project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project: {project.name}
            </a>
          </h2>{" "}
          {/* Add project name to the title */}
        </div>
      </div>
    </div>
  );
};

export default JobExplorerJobComponent;
