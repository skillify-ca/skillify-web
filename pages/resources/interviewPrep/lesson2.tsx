import React from 'react';
import Link from 'next/link';
import { InterviewPrepCourse } from '.';
import LandingNavbar from '../../../components/landingPage/LandingNavbar';

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
            <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg">
              Back
            </button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold">Stages of an Interview</h1>
        <div>
          <Link href="./lesson3">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
              Next
            </button>
          </Link>
        </div>
      </div>

      <div className="my-4 border-b"></div>
      <div className="p-4 mb-6 border rounded">
        <h2 className="mb-2 text-2xl font-semibold">1. Greetings</h2>
        <p>
          <strong>Purpose:</strong> Set the tone for a friendly and welcoming
          atmosphere.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Display basic social skills,
          enthusiasm for the opportunity to interview.
        </p>
      </div>

      <div className="p-4 mb-6 border rounded">
        <h2 className="mb-2 text-2xl font-semibold">
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

      <div className="p-4 mb-6 border rounded">
        <h2 className="mb-2 text-2xl font-semibold">3. Company Description</h2>
        <p>
          <strong>Purpose:</strong> Introduce the company, its values, and
          mission to the candidate.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Show genuine interest and
          curiosity about the company, ask thoughtful questions.
        </p>
      </div>

      <div className="p-4 mb-6 border rounded">
        <h2 className="mb-2 text-2xl font-semibold">4. Behavioral Questions</h2>
        <p>
          <strong>Purpose:</strong> Assess how a candidate behaves in different
          situations.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Demonstrate problem-solving
          approach, collaboration skills, and ethical decision-making.
        </p>
      </div>

      <div className="p-4 mb-6 border rounded">
        <h2 className="mb-2 text-2xl font-semibold">
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

      <div className="p-4 mb-6 border rounded">
        <h2 className="mb-2 text-2xl font-semibold">6. Coding Questions</h2>
        <p>
          <strong>Purpose:</strong> Assess the candidate&apos;s ability to solve
          problems using code and algorithms.
        </p>
        <p>
          <strong>Employer Expectations:</strong> Demonstrate coding
          proficiency, problem-solving approach, and attention to detail.
        </p>
      </div>

      <div className="p-4 mb-6 border rounded">
        <h2 className="mb-2 text-2xl font-semibold">
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

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden h-screen col-span-5 -mb-16 overflow-scroll lg:block">
          <InterviewPrepCourse />
        </div>
        <div className="col-span-7 p-4">{page}</div>
      </div>
    </div>
  );
};
