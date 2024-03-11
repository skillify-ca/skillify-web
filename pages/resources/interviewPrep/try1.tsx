import React, { useState } from 'react';
import Link from 'next/link';
import { InterviewPrepCourse } from '.';
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
      setShowExemplaryAnswer(false);
    }
  };

  const handleSetCurrentPrompt = (index) => {
    setCurrentPrompt(index);
    setShowExemplaryAnswer(false);
  };

  const handleClearAnswer = () => {
    if (currentPrompt !== null) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [prompts[currentPrompt]]: '',
      }));
    }
  };

  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="mb-6">
          <div className="flex justify-between">
            <div>
              <Link href="./lesson4">
                <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg">
                  Back
                </button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold">Behavioral Questions</h1>
            <div>
              <Link href="./try2">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-4 border-b"></div>
        <div className="flex flex-col">
          <div
            className="w-full p-4 border"
            style={{ maxHeight: '50vh', overflowY: 'auto' }}
          >
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
            {/* Add a form to add new prompts */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddPrompt();
              }}
            >
              <input
                type="text"
                className="w-full h-10 p-2 mb-4 border rounded-lg"
                placeholder="Enter a new prompt..."
                value={newPrompt}
                onChange={(e) => setNewPrompt(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg"
              >
                Add Prompt
              </button>
            </form>
          </div>
          <div className="w-full p-4 mt-4">
            {currentPrompt !== null && (
              <>
                <textarea
                  className="w-full h-32 p-2 mb-4 border rounded-lg"
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
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg"
                    onClick={() =>
                      handleSaveAnswer(answers[prompts[currentPrompt]])
                    }
                  >
                    Save
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-gray-500 rounded-lg"
                    onClick={() => handleClearAnswer()}
                  >
                    Clear
                  </button>
                </div>
                <button
                  className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg"
                  onClick={() => setShowExemplaryAnswer(!showExemplaryAnswer)}
                >
                  {showExemplaryAnswer ? 'Hide Hint' : 'Hint'}
                </button>
                {showExemplaryAnswer && (
                  <div className="p-4 mt-4 bg-gray-200 border rounded-lg">
                    {exemplaryAnswers[currentPrompt]}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Additional Notes for Next Steps */}
      <div className="my-4 border-b"></div>
      <div className="prose">
        <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold">Notes:</h2>
          <p>
            Add a record button for each prompt <br /> Import Experiences and
            checklist experiences that apply. <br /> These experiences will be
            displayed when recording. <br /> Add a points system so user gains
            points for answering every question.
          </p>
        </div>
      </div>
    </div>
  );
}

Try1Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />

      <div className="grid h-screen grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 overflow-scroll lg:block">
          <InterviewPrepCourse />
        </div>
        <div className="lg:col-span-7 p-4 overflow-scroll">{page}</div>
      </div>
    </div>
  );
};
