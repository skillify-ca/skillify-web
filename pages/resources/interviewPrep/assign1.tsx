import React, { useState } from 'react';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';
import Link from 'next/link';

export default function Assign1Page() {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState('');

  const handleAddExperience = () => {
    if (newExperience.trim() === '') {
      return;
    }
    setExperiences([...experiences, newExperience]);
    setNewExperience('');
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-4">
          <Link href="./lesson3">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold">Bullet all your experiences</h1>
          <Link href="./lesson4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Next
            </button>
          </Link>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-l"
            placeholder="Add an experience..."
            value={newExperience}
            onChange={(e) => setNewExperience(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
            onClick={handleAddExperience}
          >
            Add
          </button>
        </div>
        <div>
          <ul>
            {experiences.map((experience, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-2"
              >
                <span>{experience}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleRemoveExperience(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Assign1Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
