//Next Step: when adding prompts to a new section, the text box shows the input being typed in all text boxes, but all other features work, so it's very minor
import React, { useState } from 'react';
import Link from 'next/link';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';

export default function Try2Page() {
  const [sections, setSections] = useState([
    {
      title: 'Data Analyst Job',
      prompts: [
        {
          text: "As a Data Analyst at our tech company, you're working with a large dataset. How would you approach cleaning and preprocessing the data to ensure its accuracy and reliability?",
          answer: '',
          exemplaryAnswer:
            'To clean and preprocess the data, I would first perform data profiling to understand its structure and quality. Then, I would handle missing values, outliers, and duplicates. Next, I would apply data transformations, such as scaling and normalization. Finally, I would validate the data by comparing it with business rules and domain knowledge.',
        },
        // Add more prompts as needed
      ],
    },
    {
      title: 'Web Developer Job',
      prompts: [
        {
          text: "As a Web Developer, you're tasked with improving website performance. How would you optimize the loading speed of our web pages to enhance user experience?",
          answer: '',
          exemplaryAnswer:
            'To optimize website performance, I would start by minimizing HTTP requests and compressing files. I would leverage browser caching, use content delivery networks (CDNs), and prioritize above-the-fold content loading. Additionally, I would optimize images and implement lazy loading. Finally, I would conduct performance testing and monitoring to identify further optimizations.',
        },
        // Add more prompts as needed
      ],
    },
    {
      title: 'Mobile App Developer Job',
      prompts: [
        {
          text: "As a Mobile App Developer, you're building a new app feature. How would you ensure the feature is both user-friendly and performs well on different devices?",
          answer: '',
          exemplaryAnswer:
            'To ensure the new app feature is user-friendly and performs well on various devices, I would conduct user testing and gather feedback. I would follow responsive design principles and optimize the user interface (UI) for different screen sizes. Additionally, I would perform device testing and utilize performance monitoring tools to identify and fix any performance issues.',
        },
        // Add more prompts as needed
      ],
    },
  ]);

  const [newSectionTitle, setNewSectionTitle] = useState('');
  const [newPrompt, setNewPrompt] = useState('');
  const [currentSection, setCurrentSection] = useState(0);
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const [showExemplaryAnswer, setShowExemplaryAnswer] = useState(false);

  // Use sectionPrompts to store separate input values for each prompt in every section
  const [sectionPrompts, setSectionPrompts] = useState(
    sections.map((section) => section.prompts.map(() => ''))
  );

  const handleAddPrompt = (sectionIndex) => {
    if (newPrompt.trim() !== '') {
      setSections((prevSections) => {
        const newSections = [...prevSections];
        newSections[sectionIndex].prompts.push({
          text: newPrompt,
          answer: '',
          exemplaryAnswer: '',
        });
        return newSections;
      });
      setNewPrompt('');

      // Update sectionPrompts with a new empty string for the added prompt
      setSectionPrompts((prevSectionPrompts) => {
        const newSectionPrompts = [...prevSectionPrompts];
        newSectionPrompts[sectionIndex] = [
          ...newSectionPrompts[sectionIndex],
          '', // Add an empty string for the new prompt
        ];
        return newSectionPrompts;
      });
    }
  };

  const handleAddSection = () => {
    if (newSectionTitle.trim() !== '') {
      setSections((prevSections) => [
        ...prevSections,
        { title: newSectionTitle, prompts: [] },
      ]);

      // Add an empty array of prompts for the new section
      setSectionPrompts((prevSectionPrompts) => [...prevSectionPrompts, []]);

      setNewSectionTitle('');
    }
  };

  const handleSaveAnswer = (answer) => {
    if (currentPrompt !== null) {
      setSections((prevSections) => {
        const newSections = [...prevSections];
        newSections[currentSection].prompts[currentPrompt].answer = answer;
        return newSections;
      });
      setCurrentPrompt(null);
      setShowExemplaryAnswer(false);
    }
  };

  const handleSetCurrentPrompt = (sectionIndex, promptIndex) => {
    setCurrentSection(sectionIndex);
    setCurrentPrompt(promptIndex);
    setShowExemplaryAnswer(false);
  };

  return (
    <div className="theme-default">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="mb-6">
          <div className="flex justify-between">
            <div>
              <Link href="./try1">
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
                  Back
                </button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold">Technical Questions</h1>
            <div>
              <Link href="./try3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-b my-4"></div>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            className="w-full h-10 border rounded-lg p-2 mr-4"
            placeholder="Enter a new section title..."
            value={newSectionTitle}
            onChange={(e) => setNewSectionTitle(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleAddSection}
          >
            Add Section
          </button>
        </div>
        <div className="flex flex-col">
          <div className="w-full overflow-y-auto max-h-80 mb-4">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border p-4 mb-4">
                <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                {section.prompts.map((prompt, promptIndex) => (
                  <div
                    key={promptIndex}
                    className={`p-4 my-2 cursor-pointer ${
                      promptIndex === currentPrompt
                        ? 'bg-red-300'
                        : prompt.answer
                        ? 'bg-green-300'
                        : 'bg-gray-300'
                    }`}
                    onClick={() =>
                      handleSetCurrentPrompt(sectionIndex, promptIndex)
                    }
                  >
                    {prompt.text}
                  </div>
                ))}
                <div className="flex justify-between">
                  <input
                    type="text"
                    className="w-full h-10 border rounded-lg p-2 mr-4"
                    placeholder="Enter a new prompt..."
                    value={newPrompt}
                    onChange={(e) => setNewPrompt(e.target.value)}
                  />

                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleAddPrompt(sectionIndex)}
                  >
                    Add Prompt
                  </button>
                </div>
              </div>
            ))}
          </div>
          {currentPrompt !== null && (
            <div className="w-full p-4">
              <textarea
                className="w-full h-32 border rounded-lg p-2 mb-4"
                placeholder="Your answer..."
                value={sectionPrompts[currentSection][currentPrompt] || ''}
                onChange={(e) => {
                  const newSectionPrompts = [...sectionPrompts];
                  newSectionPrompts[currentSection][currentPrompt] =
                    e.target.value;
                  setSectionPrompts(newSectionPrompts);
                }}
              />
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={() =>
                    handleSaveAnswer(
                      sectionPrompts[currentSection][currentPrompt]
                    )
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
                  Exemplary Answer:{' '}
                  {
                    sections[currentSection].prompts[currentPrompt]
                      .exemplaryAnswer
                  }
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Try2Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
