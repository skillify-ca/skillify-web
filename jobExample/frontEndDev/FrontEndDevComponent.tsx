import { useEffect, useState } from 'react';
import { allSkills, filters, projectItem } from './data';

const FrontEndDevComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredRequirements, setFilteredRequirements] = useState([]);

  useEffect(() => {
    // Update the filtered requirements when selectedFilters change
    const selectedSkills = filters.filter((filter) =>
      selectedFilters.includes(filter.name)
    );
    setFilteredRequirements([...allSkills, ...selectedSkills]);
  }, [selectedFilters]);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    if (event.target.checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, filterValue]);
    } else {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== filterValue)
      );
    }
  };

  return (
    <div className="flex flex-wrap p-4">
      <div className="w-full">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-4">Front-End Developer</h1>
          <p>
            As a Front-End Developer, you will be at the forefront of web development, responsible for bringing to life the visual and interactive elements of websites and web applications. Your expertise in HTML, CSS, and JavaScript will enable you to create seamless and user-friendly interfaces that captivate and engage users.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Mandatory Requirements:</h2>
          <ul>
            {allSkills.map((skill) => (
              <li key={skill.name} className="list-disc ml-6">
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Possible Additional Requirements:</h2>
          <ul>
            {filters.map((filter) => (
              <li key={filter.name} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox mr-2"
                    value={filter.name}
                    onChange={handleFilterChange}
                  />
                  {filter.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">All Requirements:</h2>
          <ul>
            {filteredRequirements.map((req) => (
              <li key={req.name} className="list-disc ml-6">
                <a
                  href={req.link}
                  className="underline-on-hover text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {req.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Project:</h2>
          <ul>
            <li className="list-disc ml-6">
              <a
                href={projectItem.link}
                className="underline-on-hover text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectItem.name}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FrontEndDevComponent;
