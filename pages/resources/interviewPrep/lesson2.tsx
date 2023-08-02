import React from 'react';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';
import Link from 'next/link';

export default Lesson2Page;
function Lesson2Page() {
  return (
    <div>
      <Lesson2Content />
    </div>
  );
}

const Lesson2Content = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="flex justify-between mb-6">
        <div>
          <Link href="./lesson1">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
              Back
            </button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold">Stages of an Interview</h1>
        <div>
          <Link href="./lesson3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Next
            </button>
          </Link>
        </div>
      </div>

      <div className="border-b my-4"></div>
      <div className="border p-4 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Greetings</h2>
        <p>
          <strong>Purpose:</strong> Set the tone for a friendly and welcoming
          atmosphere.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Display basic social skills,
          enthusiasm for the opportunity to interview.
        </p>
      </div>

      <div className="border p-4 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Tell me about yourself
        </h2>
        <p>
          <strong>Purpose:</strong> Allow the interviewer to learn more about
          the candidate&apos;s background.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Communicate personal and
          professional journey concisely, focus on relevant experiences and
          skills.
        </p>
      </div>

      <div className="border p-4 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Company Description</h2>
        <p>
          <strong>Purpose:</strong> Introduce the company, its values, and
          mission to the candidate.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Show genuine interest and
          curiosity about the company, ask thoughtful questions.
        </p>
      </div>

      <div className="border p-4 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Behavioral Questions</h2>
        <p>
          <strong>Purpose:</strong> Assess how a candidate behaves in different
          situations.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Demonstrate problem-solving
          approach, collaboration skills, and ethical decision-making.
        </p>
      </div>

      <div className="border p-4 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Experience/Technical Questions
        </h2>
        <p>
          <strong>Purpose:</strong> Evaluate the candidate&apos;s technical
          knowledge and relevant experiences.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Possess required technical
          skills for the role, discuss experiences with relevant technologies.
        </p>
      </div>

      <div className="border p-4 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Coding Questions</h2>
        <p>
          <strong>Purpose:</strong> Assess the candidate&apos;s ability to solve
          problems using code and algorithms.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Demonstrate coding
          proficiency, problem-solving approach, and attention to detail.
        </p>
      </div>

      <div className="border p-4 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          7. Questions for the Company
        </h2>
        <p>
          <strong>Purpose:</strong> Allow the candidate to inquire about the
          company, team dynamics, and work culture.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Ask thoughtful questions that
          showcase genuine interest in joining the company.
        </p>
      </div>
    </div>
  );
};

Lesson2Page.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
