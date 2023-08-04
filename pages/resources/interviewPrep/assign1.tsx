import React, { useState } from 'react';
import Link from 'next/link';
import { InterviewPrepCourse } from '.';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';

export default function Assign1Page() {
  const [experiences, setExperiences] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedExperience, setEditedExperience] = useState('');

  const handleAddExperience = () => {
    if (editIndex !== -1) {
      // If editIndex is not -1, we are updating an existing experience
      const updatedExperiences = [...experiences];
      updatedExperiences[editIndex] = editedExperience;
      setExperiences(updatedExperiences);
      setEditedExperience('');
      setEditIndex(-1);
    } else {
      // If editIndex is -1, we are adding a new experience
      if (editedExperience.trim() === '') {
        return;
      }
      setExperiences([...experiences, editedExperience]);
      setEditedExperience('');
    }
  };

  const handleRemoveExperience = (index) => {
    setEditedExperience(experiences[index]);
    setEditIndex(index);
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center justify-between mb-4">
          <Link href="./tools">
            <button className="px-4 py-2 text-white bg-gray-500 rounded-lg">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold">Bullet all your experiences</h1>
          <Link href="./lesson4">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
              Next
            </button>
          </Link>
        </div>
        {/* Add the textbox and button here */}
        <div className="mb-4 flex items-center">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-l"
            placeholder="Add an experience..."
            value={editedExperience}
            onChange={(e) => setEditedExperience(e.target.value)}
          />
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-r"
            onClick={handleAddExperience}
          >
            {editIndex !== -1 ? 'Save' : 'Add'}
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
                <div>
                  <button
                    className="px-3 py-1 mr-2 text-white bg-blue-500 rounded"
                    onClick={() => handleRemoveExperience(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 text-white bg-red-500 rounded"
                    onClick={() => handleRemoveExperience(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Notes for Next Steps */}
      <div className="my-4 border-b"></div>
      <div className="prose">
        <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold">Notes:</h2>
          <p>{`Add a points system so the user gains points for listing an experience.`}</p>
        </div>
      </div>
    </div>
  );
}

Assign1Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden h-screen col-span-5 -mb-16 overflow-scroll lg:block">
          <InterviewPrepCourse />
        </div>
        <div className="col-span-7 p-4">{page}</div>
      </div>
    </div>
  );
};
