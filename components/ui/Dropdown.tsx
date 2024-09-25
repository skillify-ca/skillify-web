import { useState } from "react";

function Dropdown({ label, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option); // Pass selected option back to parent
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block w-full">
      {/* Clickable label to open dropdown */}
      <span
        onClick={handleClick}
        className="block cursor-pointer py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100"
      >
        {label}
      </span>
      {isOpen && (
        <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
