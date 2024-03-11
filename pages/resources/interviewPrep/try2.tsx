//Next Step: when adding prompts to a new section, the text box shows the input being typed in all text boxes, but all other features work, so it's very minor
import React, { useState } from 'react';
import Link from 'next/link';
import { InterviewPrepCourse } from '.';
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
      setSectionPrompts((prevSectionPrompts) => {
        const newSectionPrompts = [...prevSectionPrompts];
        newSectionPrompts[currentSection][currentPrompt] = answer; // Set the corresponding prompt's answer
        return newSectionPrompts;
      });
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
                <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg">
                  Back
                </button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold">Technical Questions</h1>
            <div>
              <Link href="./try3">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-4 border-b"></div>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            className="w-full h-10 p-2 mr-4 border rounded-lg"
            placeholder="Enter a new section title..."
            value={newSectionTitle}
            onChange={(e) => setNewSectionTitle(e.target.value)}
          />
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-lg"
            onClick={handleAddSection}
          >
            Add Section
          </button>
        </div>
        <div className="flex flex-col">
          <div className="w-full mb-4 overflow-y-auto max-h-80">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="p-4 mb-4 border">
                <h2 className="mb-4 text-xl font-bold">{section.title}</h2>
                {section.prompts.map((prompt, promptIndex) => (
                  <div
                    key={promptIndex}
                    className={`p-4 my-2 cursor-pointer ${
                      sectionIndex === currentSection &&
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
                    className="w-full h-10 p-2 mr-4 border rounded-lg"
                    placeholder="Enter a new prompt..."
                    value={newPrompt}
                    onChange={(e) => setNewPrompt(e.target.value)}
                  />

                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg"
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
                className="w-full h-32 p-2 mb-4 border rounded-lg"
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
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg"
                  onClick={() =>
                    handleSaveAnswer(
                      sectionPrompts[currentSection][currentPrompt]
                    )
                  }
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 text-white bg-gray-500 rounded-lg"
                  onClick={() => {
                    setSectionPrompts((prevSectionPrompts) => {
                      const newSectionPrompts = [...prevSectionPrompts];
                      newSectionPrompts[currentSection][currentPrompt] = ''; // Set the corresponding prompt's answer to an empty string
                      return newSectionPrompts;
                    });
                  }}
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

      {/* Additional Notes for Next Steps */}
      <div className="my-4 border-b"></div>
      <div className="prose">
        <div className="p-4 mb-6 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold">Notes:</h2>
          <p>
            {`Add AI feedback for written responses`} <br />
            {`Change to Chris' format with the different jobs and clicking on each one of them will bring me to a page with generated questions for that job`}{' '}
            <br /> {`Similar to the previous page.`} <br />{' '}
            {`Add a points system so user gains points for answering every question.`}
          </p>
        </div>
      </div>
    </div>
  );
}

Try2Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />

      <div className="grid h-screen grid-cols-1 lg:grid-cols-12">
        <div className="hidden col-span-5 overflow-scroll lg:block">
          <InterviewPrepCourse />
        </div>
        <div className="col-span-7 p-4 overflow-scroll">{page}</div>
      </div>
    </div>
  );
};
