import React, { useState } from 'react';
import Link from 'next/link';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';

export default function Try1Page() {
  const [prompts, setPrompts] = useState([
    'Tell me about a time when you faced a difficult technical challenge.',
    'Describe a situation where you had to work as part of a team to achieve a common goal.',
    'Discuss a time when you had to handle a conflict with a colleague or team member.',
    'Share an experience when you had to meet tight deadlines.',
    'Describe a project you worked on that you are most proud of.',
    'Discuss a time when you had to give constructive feedback to a team member.',
    'Share an experience when you had to adapt to unexpected changes in a project.',
    'Describe a situation where you had to take the lead in a team project.',
    'Discuss a time when you had to resolve a complex technical problem.',
    'Share an experience when you had to collaborate with a diverse team.',
    // Add more prompts as needed
  ]);

  const exemplaryAnswers = [
    'In my previous internship, I faced a difficult technical challenge when...',
    'During a group project at university, I had to work as part of a team to achieve a common goal by...',
    'In one of my previous jobs, I had to handle a conflict with a colleague when...',
    'When working on a tight deadline for a client project, I...',
    'One project I am particularly proud of is...',
    'In my previous role, I had to provide constructive feedback to a team member...',
    'During a project, unexpected changes occurred, and I adapted by...',
    'In a team project, I took the lead by...',
    'I encountered a complex technical problem when...',
    'When collaborating with a diverse team, I...',
    // Add more exemplary answers as needed
  ];

  const [answers, setAnswers] = useState({});
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const [showExemplaryAnswer, setShowExemplaryAnswer] = useState(false);
  const [newPrompt, setNewPrompt] = useState('');

  const handleAddPrompt = () => {
    if (newPrompt.trim() !== '') {
      setPrompts((prevPrompts) => [...prevPrompts, newPrompt]);
      setNewPrompt('');
    }
  };

  const handleSaveAnswer = (answer) => {
    if (currentPrompt !== null) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [prompts[currentPrompt]]: answer,
      }));
      setCurrentPrompt(null);
      setShowExemplaryAnswer(false);
    }
  };

  const handleSetCurrentPrompt = (index) => {
    setCurrentPrompt(index);
    setShowExemplaryAnswer(false);
  };

  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="mb-6">
          <div className="flex justify-between">
            <div>
              <Link href="./lesson4">
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
                  Back
                </button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold">Behavioral Questions</h1>
            <div>
              <Link href="./try2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-b my-4"></div>
        <div className="flex">
          <div className="w-1/3 overflow-y-auto max-h-80 pr-2">
            <div className="border p-4">
              {prompts.map((prompt, index) => (
                <div
                  key={index}
                  className={`p-4 my-2 cursor-pointer ${
                    index === currentPrompt
                      ? 'bg-red-300'
                      : answers[prompt]
                      ? 'bg-green-300'
                      : 'bg-gray-300'
                  }`}
                  onClick={() => handleSetCurrentPrompt(index)}
                >
                  {prompt}
                </div>
              ))}
            </div>
            {/* Add a form to add new prompts */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddPrompt();
              }}
            >
              <input
                type="text"
                className="w-full h-10 border rounded-lg p-2 mb-4"
                placeholder="Enter a new prompt..."
                value={newPrompt}
                onChange={(e) => setNewPrompt(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Add Prompt
              </button>
            </form>
          </div>
          <div className="w-2/3 p-4">
            {currentPrompt !== null && (
              <>
                <textarea
                  className="w-full h-32 border rounded-lg p-2 mb-4"
                  placeholder="Your answer..."
                  value={answers[prompts[currentPrompt]] || ''}
                  onChange={(e) =>
                    setAnswers((prevAnswers) => ({
                      ...prevAnswers,
                      [prompts[currentPrompt]]: e.target.value,
                    }))
                  }
                />
                <div className="flex justify-between">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={() =>
                      handleSaveAnswer(answers[prompts[currentPrompt]])
                    }
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => setCurrentPrompt(null)}
                  >
                    Clear
                  </button>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                  onClick={() => setShowExemplaryAnswer(!showExemplaryAnswer)}
                >
                  {showExemplaryAnswer ? 'Hide Hint' : 'Hint'}
                </button>
                {showExemplaryAnswer && (
                  <div className="border rounded-lg p-4 mt-4 bg-gray-200">
                    {exemplaryAnswers[currentPrompt]}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Try1Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
